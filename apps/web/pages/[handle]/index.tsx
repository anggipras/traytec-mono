/* eslint-disable no-unsafe-optional-chaining -- disabled no unsafe optional chaining */
import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "@/modules/common/components/head";
import { getApolloClient } from "@/lib/with-apollo";
import type {
  ComponentIntegrationenJobs,
  ComponentSharedSeo,
  GetJobQuery,
  GetPageHandleQuery,
  GetPageQuery,
  JobRelationResponseCollection,
  SeiteEntity,
} from "@/generated/graphql";
import {
  GetJobDocument,
  GetPageDocument,
  GetPageHandleDocument,
} from "@/generated/graphql";
import { useSeo } from "@/lib/hooks/use-seo";
import SinglePageTemplate from "@/modules/single-page/templates";
import type { PathInfo } from "@/types/global";

const fetchSinglePageHandle = async () => {
  const apolloClient = getApolloClient();
  const { data } = await apolloClient.query({
    query: GetPageHandleDocument,
    variables: {
      filters: {
        slug: {
          notNull: true,
        },
      },
    },
  });

  const singlePageHandleData = data as GetPageHandleQuery;

  return singlePageHandleData?.seiten?.data;
};

const fetchSinglePage = (handle: string, locale: string) => {
  const apolloClient = getApolloClient();
  return apolloClient.query({
    query: GetPageDocument,
    variables: {
      filters: {
        slug: {
          eq: handle,
        },
      },
      locale,
      pagination: {
        limit: 50,
      },
    },
  });
};

const fetchJobDetail = (locale: string) => {
  const apolloClient = getApolloClient();
  return apolloClient.query({
    query: GetJobDocument,
    variables: {
      locale,
      pagination: {
        page: 1,
        pageSize: 3,
      },
    },
  });
};

const SinglePage = ({ singlePageData }) => {
  const singlePage = singlePageData as GetPageQuery;
  const seo = useSeo(
    singlePage.seiten?.data[0].attributes?.seo as ComponentSharedSeo
  );

  return (
    <>
      <Head description={seo.description} image={seo.image} title={seo.title} />
      {singlePage.seiten?.data?.length && (
        <div className="medium:pb-32.5">
          <SinglePageTemplate data={singlePage} />
        </div>
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const singlePageHandle = await fetchSinglePageHandle();
    const singlePageHandleData = singlePageHandle as SeiteEntity[];

    const paths: PathInfo[] = [];
    singlePageHandleData.forEach((dt) => {
      paths.push({
        params: { handle: dt.attributes?.slug ?? "" },
        locale: dt.attributes?.locale ?? "",
      });
      dt.attributes?.localizations?.data.forEach((dtLocal) => {
        paths.push({
          params: { handle: dtLocal.attributes?.slug ?? "" },
          locale: dtLocal.attributes?.locale ?? "",
        });
      });
    });

    return {
      paths,
      fallback: "blocking",
    };
  } catch (e) {
    console.error("Failed to get single page handles:", e);

    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  const handle = context.params?.handle as string;

  const singlePage = await fetchSinglePage(handle, locale ?? "de");
  const singlePageResponse = singlePage?.data as GetPageQuery;

  if (
    singlePageResponse.seiten?.data &&
    singlePageResponse.seiten?.data.length < 1
  ) {
    return {
      notFound: true,
    };
  }

  let modifiedSinglePageByJobs: GetPageQuery = {};
  if (singlePageResponse.seiten?.data[0].attributes?.inhalte?.length) {
    const getFilteredJobInhalte =
      singlePageResponse.seiten?.data[0].attributes?.inhalte?.filter(
        (jobVal) => jobVal?.__typename === "ComponentIntegrationenJobs"
      );

    const changedDataSinglePage = { ...singlePageResponse };
    const changedDataSingleResponse = [
      ...singlePageResponse.seiten?.data[0].attributes?.inhalte,
    ];

    if (
      getFilteredJobInhalte?.length &&
      (getFilteredJobInhalte[0] as ComponentIntegrationenJobs).alle_anzeigen
    ) {
      const jobPage = await fetchJobDetail(locale ?? "de");
      const jobPageData = jobPage.data as GetJobQuery;

      const findIdxJobAtSinglePage =
        singlePageResponse.seiten?.data[0].attributes?.inhalte?.findIndex(
          (jobVal) => jobVal?.__typename === "ComponentIntegrationenJobs"
        );

      if (changedDataSingleResponse.length) {
        const compIntegrationJobs = {
          ...(changedDataSingleResponse[
            findIdxJobAtSinglePage
          ] as ComponentIntegrationenJobs),
        };

        modifiedSinglePageByJobs = {
          __typename: "Query",
          seiten: {
            __typename: "SeiteEntityResponseCollection",
            data: [
              {
                __typename: "SeiteEntity",
                attributes: {
                  __typename: "Seite",
                  slug: changedDataSinglePage.seiten?.data[0].attributes?.slug,
                  seo: changedDataSinglePage.seiten?.data[0].attributes?.seo,
                  inhalte:
                    changedDataSinglePage.seiten?.data[0].attributes?.inhalte?.map(
                      (val) => {
                        if (val?.__typename === "ComponentIntegrationenJobs") {
                          return {
                            __typename: "ComponentIntegrationenJobs",
                            STYLE: compIntegrationJobs.STYLE,
                            alle_anzeigen: compIntegrationJobs.alle_anzeigen,
                            id: "",
                            jobs: jobPageData.jobs as JobRelationResponseCollection,
                          };
                        }
                        return val;
                      }
                    ),
                },
              },
            ],
          },
        };
      }
    }
  }

  return {
    props: {
      singlePageData: modifiedSinglePageByJobs.seiten
        ? modifiedSinglePageByJobs
        : singlePageResponse,
      ...(await serverSideTranslations(locale ?? "de", ["common"])),
    },
    revalidate: 1800,
  };
};

export default SinglePage;
