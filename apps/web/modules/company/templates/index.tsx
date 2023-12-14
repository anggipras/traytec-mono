import React from "react";
import CompanyDesc from "@/modules/company/components/company-description";
import CompanyTeam from "@/modules/company/components/company-team";
// import CompanyMilestone from "@/modules/company/components/company-milestone";
import SubHeader from "@/modules/common/components/sub-header";
import LayoutContainer from "@/modules/layout/components/layout-container";

const CompanyTemplate = () => {
  return (
    <>
      <SubHeader title="About Us" />
      <LayoutContainer>
        <div className="my-10 mx-6 medium:mt-20 medium:mx-15 medium:mb-32.5">
          <CompanyDesc />
          {/* <CompanyMilestone /> */}
          <CompanyTeam />
        </div>
      </LayoutContainer>
    </>
  );
};

export default CompanyTemplate;
