import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NewsDetailTemplate from "@/modules/news/templates/news-detail";

const NewsDetail = () => {
  return <NewsDetailTemplate />;
};

export async function getStaticProps({ locale }) {
  const initialLocale = locale ?? "de";
  const namespaces = ["common"];

  return {
    props: {
      ...(await serverSideTranslations(initialLocale, namespaces)),
    },
    revalidate: 3600,
  };
}

export default NewsDetail;
