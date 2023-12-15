import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CareerDetailTemplate from "@/modules/career/templates/career-detail";

const CareerDetail = () => {
  return <CareerDetailTemplate />;
};

export const getStaticPaths: GetStaticPaths = () => {
  try {
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
    revalidate: 3600,
  };
};

export default CareerDetail;
