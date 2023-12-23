import React from "react";
import Card from "@/modules/common/components/card";
import SectionHeader from "@/modules/common/components/section-header";

const CompanyTeam = () => {
  const companyTeam = [
    {
      team_name: "Holger Hesselink",
      team_role: "Managing director.",
      team_image: require("@/assets/images/common/img_example_company_team.jpeg"),
    },
    {
      team_name: "Holger Hesselink",
      team_role: "Managing director.",
      team_image: require("@/assets/images/common/img_example_company_team.jpeg"),
    },
    {
      team_name: "Holger Hesselink",
      team_role: "Managing director.",
      team_image: require("@/assets/images/common/img_example_company_team.jpeg"),
    },
    {
      team_name: "Holger Hesselink",
      team_role: "Managing director.",
      team_image: require("@/assets/images/common/img_example_company_team.jpeg"),
    },
  ];

  return (
    <div className="flex flex-col items-center mx-auto mt-20 medium:mt-32.5 w-full">
      <SectionHeader
        desc="Provider of services for making trays, inserts, workpiece containers,
        lids, etc. for industry according to our wishes"
        title="Meet Our Team"
      />
      <div className="grid grid-cols-2 medium:grid-cols-4 gap-5 mt-6 medium:mt-10">
        {companyTeam.map((val, idx) => {
          return (
            <Card
              additionalclass="flex-col"
              image={val.team_image}
              imgclass="px-0 mb-4"
              key={idx}
              subcontent={val.team_role}
              title={val.team_name}
              titleclass="typo-h4"
            />
          );
        })}
      </div>
    </div>
  );
};

export default CompanyTeam;
