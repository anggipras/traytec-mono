import type { ReactHTML } from "react";

function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline text-primary-900">
        Hello world
      </h1>
    </main>
  );
}

Page.getLayout = function PageLayout(page: ReactHTML) {
  return <>{page}</>;
};

export default Page;
