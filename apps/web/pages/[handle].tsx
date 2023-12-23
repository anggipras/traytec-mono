import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { notFound } from "next/navigation";
import Head from "@/modules/common/components/head";
import { getApolloClient } from "@/lib/with-apollo";
import type { ComponentSharedSeo, GetPageQuery } from "@/generated/graphql";
import { GetPageDocument } from "@/generated/graphql";
import { useSeo } from "@/lib/hooks/use-seo";
import SinglePageTemplate from "@/modules/single-page/templates";

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
    },
  });
};

const SinglePage = ({ singlePageData }) => {
  const singlePage: GetPageQuery = singlePageData?.data;
  const seo = useSeo(
    singlePage.seiten?.data[0]?.attributes?.seo as ComponentSharedSeo
  );

  const contentData: any[] | undefined | null =
    singlePage.seiten?.data[0].attributes?.inhalte;

  return (
    <>
      <Head description={seo.description} image={seo.image} title={seo.title} />
      {contentData && contentData.length > 0 ? (
        <SinglePageTemplate data={singlePage} />
      ) : null}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  try {
    // const paths: PathInfo[] = [];
    // sampleNewsDetailPath.forEach((data) => {
    //   paths.push({
    //     params: { handle: data.handle },
    //     locale: "en",
    //   });
    // });

    return {
      paths: [],
      fallback: "blocking",
    };
  } catch (e) {
    console.error("Failed to get news handles:", e);

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
  const singlePageData: GetPageQuery = singlePage?.data;

  if (singlePageData.seiten?.data && singlePageData.seiten?.data.length === 0) {
    notFound()
  }

  return {
    props: {
      singlePageData: singlePage,
      ...(await serverSideTranslations(locale ?? "de", ["common"])),
    },
    revalidate: 1800,
  };
};

export default SinglePage;
