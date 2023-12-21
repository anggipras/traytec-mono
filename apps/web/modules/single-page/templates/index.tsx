import React from "react";
import type { GetPageQuery } from "@/generated/graphql";
import { renderDynamicContent } from "@/lib/util/render-dynamic-content";

interface SinglePageProps {
  data: GetPageQuery;
}

const SinglePageTemplate = ({ data }: SinglePageProps) => {
  const contentData: any[] | undefined | null =
    data.seiten?.data[0].attributes?.inhalte;

  return (
    <>
      {contentData && contentData.length > 0
        ? contentData.map((dt, idx) => (
            <div key={idx}>{renderDynamicContent(dt)}</div>
          ))
        : null}
    </>
  );
};

export default SinglePageTemplate;
