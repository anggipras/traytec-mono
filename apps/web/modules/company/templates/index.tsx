import React from "react";
import CompanyDesc from "@/modules/company/components/company-description";
import CompanyTeam from "@/modules/company/components/company-team";
import CompanyMilestone from "@/modules/company/components/company-milestone";
import SubHeader from "@/modules/common/components/sub-header";
import LayoutContainer from "@/modules/layout/components/layout-container";
import type { ComponentHerosHero1, GetPageQuery } from "@/generated/graphql";

interface CompanyTemplateProps {
  singlePageData: GetPageQuery;
}

const CompanyTemplate = ({ singlePageData }: CompanyTemplateProps) => {
  const contentsData = singlePageData.seiten?.data[0].attributes?.inhalte ?? {};
  const heroData: ComponentHerosHero1 = contentsData ? contentsData[0] : [];
  
  return (
    <>
      <SubHeader title={heroData.ueberschrift?.topline || ""} />
      <LayoutContainer>
        <div className="my-10 mx-6 medium:mt-20 medium:mx-15 medium:mb-32.5">
          <CompanyDesc data={heroData} />
          <CompanyMilestone />
          <CompanyTeam />
        </div>
      </LayoutContainer>
    </>
  );
};

export default CompanyTemplate;
