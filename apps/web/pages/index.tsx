import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import Head from "@/modules/common/components/head";
import { getApolloClient } from "@/lib/with-apollo";
import type { ComponentSharedSeo, GetPageQuery } from "@/generated/graphql";
import { GetPageDocument } from "@/generated/graphql";
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

  return {
    props: {
      singlePageData: singlePageResponse,
      ...(await serverSideTranslations(initialLocale, namespaces)),
    },
    revalidate: 1800,
  };
};

export default HomePage;
