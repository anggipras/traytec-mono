import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "@/modules/common/components/head";
import { getApolloClient } from "@/lib/with-apollo";
import type {
  ComponentSharedSeo,
  GetPageHandleQuery,
  GetPageQuery,
  SeiteEntity,
} from "@/generated/graphql";
import { GetPageDocument, GetPageHandleDocument } from "@/generated/graphql";
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
        limit: 100,
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

  return {
    props: {
      singlePageData: singlePageResponse,
      ...(await serverSideTranslations(locale ?? "de", ["common"])),
    },
    revalidate: 1800,
  };
};

export default SinglePage;
