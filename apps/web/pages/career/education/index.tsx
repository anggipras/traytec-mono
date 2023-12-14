import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import EducationTemplate from "@/modules/career/templates/education";

const Education = () => {
  return <EducationTemplate />;
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

export default Education;
