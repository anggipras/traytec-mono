import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NewsTemplate from "@/modules/news/templates";

const News = () => {
  return <NewsTemplate />;
};

export async function getStaticProps({ locale }) {
  const initialLocale = locale ?? "de";
  const namespaces = ["common"];

  return {
    props: {
      ...(await serverSideTranslations(initialLocale, namespaces)),
    },
    revalidate: 5,
  };
}

export default News;
