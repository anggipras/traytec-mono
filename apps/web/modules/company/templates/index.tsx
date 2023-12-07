import React from "react";
import CompanyDesc from "@/modules/company/components/company-description";
import CompanyTeam from "@/modules/company/components/company-team";
import SubHeader from "@/modules/common/components/sub-header";
import LayoutContainer from "@/modules/layout/components/layout-container";

const CompanyTemplate = () => {
  return (
    <>
      <SubHeader title="About Us" />
      <LayoutContainer>
        <div className="mt-20 mx-15 mb-32.5">
          <CompanyDesc />
          <CompanyTeam />
        </div>
      </LayoutContainer>
    </>
  );
};

export default CompanyTemplate;
