import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CompanyTemplate from "@/modules/company/templates";

const Company = () => {
  return <CompanyTemplate />;
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

export default Company;
