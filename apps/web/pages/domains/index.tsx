import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DomainTemplate from "@/modules/domains/templates";

const Domain = () => {
  return <DomainTemplate />;
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

export default Domain;
