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

export default HomePage;
