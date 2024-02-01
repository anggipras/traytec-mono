import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NewsDetailTemplate from "@/modules/news/templates/news-detail";

const NewsDetail = () => {
  return <NewsDetailTemplate />;
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
  const initialLocale = locale ?? "de";
  const namespaces = ["common"];

  return {
    props: {
      ...(await serverSideTranslations(initialLocale, namespaces)),
    },
    revalidate: 5,
  };
};

export default NewsDetail;
