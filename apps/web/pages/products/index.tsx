import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ProductTemplate from "@/modules/products/templates";

const ProductPage = () => {
  return <ProductTemplate />;
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

export default ProductPage;
