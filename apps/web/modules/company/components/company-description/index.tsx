import React from "react";
import DescriptionHeading from "@/modules/common/section/description-heading";
import type { ComponentHerosHero1 } from "@/generated/graphql";
import { serverBaseUrl } from "@/client.config";

interface CompanyDescriptionProps {
  data: ComponentHerosHero1;
}

const CompanyDesc = ({ data }: CompanyDescriptionProps) => {
  return (
    <DescriptionHeading
      description={data.ueberschrift?.text}
      image={`${serverBaseUrl}${data.hintergrund?.data?.attributes?.url}`}
      title={data.ueberschrift?.heading}
      titleclass="typo-h2"
    />
  );
};

export default CompanyDesc;
