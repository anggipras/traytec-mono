import React from "react";
import SectionHeader from "../section-header";
import Card from "../card";
import type { ComponentListenGridListe } from "@/generated/graphql";
import { serverBaseUrl } from "@/client.config";

interface ComponentProps {
  data: ComponentListenGridListe;
}

const GridList = ({ data }: ComponentProps) => {
  return (
    <div className="flex flex-col items-center mx-6 medium:mx-15">
      <SectionHeader
        desc={data.ueberschrift?.text}
        intro={data.ueberschrift?.topline}
        title={data.ueberschrift?.heading}
      />
      <div className="grid grid-cols-2 medium:grid-cols-4 gap-5 mt-10 w-full">
        {data.inhalt?.map((val, idx) => {
          const imageUrl = val?.bild?.data?.attributes?.url;
          return (
            <Card
              additionalclass="flex-col"
              image={imageUrl ? `${serverBaseUrl}${imageUrl}` : ""}
              imgclass="px-0 mb-6"
              imgstyle="w-full"
              key={idx}
              subcontent={val?.text || ""}
              title={val?.titel || ""}
              titleclass="typo-h4"
            />
          );
        })}
      </div>
    </div>
  );
};

export default GridList;
