// import type { ReactHTML } from "react";
import Head from "@/modules/common/components/head";
import HomeTemplate from "@/modules/home/templates";
import LayoutContainer from "@/modules/layout/components/layout-container";

const HomePage = () => {
  return (
    <LayoutContainer>
      <Head description="this is desc" title="this is title" />
      <HomeTemplate />
    </LayoutContainer>
  );
};

// Page.getLayout = function PageLayout(page: ReactHTML) {
//   return <>{page}</>;
// };

export default HomePage;
