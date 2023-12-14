import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CareerTemplate from "@/modules/career/templates";

const Career = () => {
  return <CareerTemplate />;
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

export default Career;
