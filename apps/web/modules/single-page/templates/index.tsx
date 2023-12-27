import React from "react";
import type { GetPageQuery } from "@/generated/graphql";
import { renderDynamicContent } from "@/lib/util/render-dynamic-content";

interface SinglePageProps {
  data: GetPageQuery;
}

const SinglePageTemplate = ({ data }: SinglePageProps) => {
  return (
    <>
      {data.seiten?.data[0].attributes?.inhalte &&
      data.seiten?.data[0].attributes?.inhalte.length > 0
        ? data.seiten?.data[0].attributes?.inhalte.map((dt, idx) => (
            <div key={idx}>{renderDynamicContent(dt)}</div>
          ))
        : null}
    </>
  );
};

export default SinglePageTemplate;
