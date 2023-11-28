// import type { ReactHTML } from "react";
import Head from "@/modules/common/components/head";
import HomeTemplate from "@/modules/home/templates";

const HomePage = () => {
  return (
    <main>
      <h1 className="typo-h1">Hello world</h1>
      <h2 className="typo-h2">This is a monorepo with Next.js.</h2>
      <p className="typo-copy-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </p>
      <p className="typo-copy-small">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </p>
      <p className="typo-copy-intro">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </p>
      <Head description="this is desc" title="this is title" />
      <HomeTemplate />
    </main>
  );
};

// Page.getLayout = function PageLayout(page: ReactHTML) {
//   return <>{page}</>;
// };

export default HomePage;
