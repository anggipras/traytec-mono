/* eslint-disable no-unsafe-optional-chaining -- disabled no unsafe optional chaining */
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import Head from "@/modules/common/components/head";
import { getApolloClient } from "@/lib/with-apollo";
import type {
  BewertungRelationResponseCollection,
  ComponentIntegrationenBewertungen,
  ComponentSharedSeo,
  GetPageQuery,
  GetReviewsQuery,
} from "@/generated/graphql";
import { GetPageDocument, GetReviewsDocument } from "@/generated/graphql";
import { useSeo } from "@/lib/hooks/use-seo";
import SinglePageTemplate from "@/modules/single-page/templates";

const fetchHomePageStatic = (locale: string) => {
  const apolloClient = getApolloClient();
  return apolloClient.query({
    query: GetPageDocument,
    variables: {
      filters: {
        slug: {
          eq: null,
        },
      },
      locale,
    },
  });
};

const fetchReviewsList = () => {
  const apolloClient = getApolloClient();
  return apolloClient.query({
    query: GetReviewsDocument,
  });
};

const HomePage = ({ singlePageData }) => {
  const singlePage = singlePageData as GetPageQuery;
  const seo = useSeo(
    singlePage.seiten?.data[0]?.attributes?.seo as ComponentSharedSeo
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

export const getStaticProps: GetStaticProps = async (context) => {
  const initialLocale = context.locale ?? "de";
  const namespaces = ["common"];

  const singlePage = await fetchHomePageStatic(initialLocale);
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
    const getFilteredBewertungenInhalte =
      singlePageResponse.seiten?.data[0].attributes?.inhalte?.filter(
        (bwtVal) => bwtVal?.__typename === "ComponentIntegrationenBewertungen"
      );

    const changedDataSinglePage = { ...singlePageResponse };
    const changedDataSingleResponse = [
      ...singlePageResponse.seiten?.data[0].attributes?.inhalte,
    ];

    if (
      getFilteredBewertungenInhalte?.length &&
      (getFilteredBewertungenInhalte[0] as ComponentIntegrationenBewertungen)
        .alle_anzeigen
    ) {
      const reviewComponent = await fetchReviewsList();
      const reviewComponentData = reviewComponent.data as GetReviewsQuery;

      const findIdxReviewAtSinglePage =
        singlePageResponse.seiten?.data[0].attributes?.inhalte?.findIndex(
          (jobVal) => jobVal?.__typename === "ComponentIntegrationenBewertungen"
        );

      if (changedDataSingleResponse.length) {
        const compIntegrationReview = {
          ...(changedDataSingleResponse[
            findIdxReviewAtSinglePage
          ] as ComponentIntegrationenBewertungen),
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
                        if (
                          val?.__typename ===
                          "ComponentIntegrationenBewertungen"
                        ) {
                          return {
                            __typename: "ComponentIntegrationenBewertungen",
                            ueberschrift: compIntegrationReview.ueberschrift,
                            alle_anzeigen: compIntegrationReview.alle_anzeigen,
                            bewertungen:
                              reviewComponentData.bewertungen as BewertungRelationResponseCollection,
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
      ...(await serverSideTranslations(initialLocale, namespaces)),
    },
    revalidate: 1800,
  };
};

export default HomePage;
