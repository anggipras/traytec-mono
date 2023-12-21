import React from "react";
import SectionHeader from "../section-header";
import Card from "../card";
import type { ComponentListenGridListe } from "@/generated/graphql";

interface ComponentProps {
  data: ComponentListenGridListe;
}

const GridList = ({ data }: ComponentProps) => {
  return (
    <div className="flex flex-col items-center mx-6 medium:mx-15">
      <SectionHeader
        intro={data.ueberschrift?.topline}
        title={data.ueberschrift?.heading}
      />
      <div className="grid grid-cols-2 medium:grid-cols-4 gap-5 mt-10">
        {data.inhalt?.map((val, idx) => {
          return (
            <Card
              additionalclass="flex-col"
              image={val?.bild?.data?.attributes?.url}
              imgclass="px-5 mb-6"
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
