// import type { ReactHTML } from "react";
import Head from "@/modules/common/components/head";
import HomeTemplate from "@/modules/home/templates";

const HomePage = () => {
  return (
    <main>
      <Head description="this is desc" title="this is title" />
      <HomeTemplate />
    </main>
  );
};

// Page.getLayout = function PageLayout(page: ReactHTML) {
//   return <>{page}</>;
// };

export default HomePage;
