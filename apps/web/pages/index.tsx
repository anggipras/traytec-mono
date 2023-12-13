import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "@/modules/common/components/head";
import HomeTemplate from "@/modules/home/templates";

const HomePage = () => {
  return (
    <>
      <Head description="Bad Bentheim" title="traytec GmbH" />
      <HomeTemplate />
    </>
  );
};

// Page.getLayout = function PageLayout(page: ReactHTML) {
//   return <>{page}</>;
// };

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

export default HomePage;
