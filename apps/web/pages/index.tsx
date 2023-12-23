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
  const singlePage: GetPageQuery = singlePageData?.data;

  const seo = useSeo(
    singlePage.seiten?.data[0]?.attributes?.seo as ComponentSharedSeo
  );

  const contentData: any[] | undefined | null =
    singlePage.seiten?.data[0].attributes?.inhalte;

  return (
    <>
      {singlePage.seiten ? (
        <>
          <Head
            description={seo.description}
            image={seo.image}
            title={seo.title}
          />
          {contentData && contentData.length > 0 ? (
            <SinglePageTemplate data={singlePage} />
          ) : null}
        </>
      ) : null}
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const initialLocale = context.locale ?? "de";
  const namespaces = ["common"];

  const singlePage = await fetchHomePageStatic(initialLocale);

  return {
    props: {
      singlePageData: singlePage,
      ...(await serverSideTranslations(initialLocale, namespaces)),
    },
    revalidate: 1800,
  };
};

export default HomePage;
