import React from "react";
import DescriptionHeading from "@/modules/common/section/description-heading";

const CompanyDesc = () => {
  const companyDesc = {
    title: "Our journey to become who we are now",
    description:
      "Since its foundation, the company has developed into a high-performance specialist for the design und production von disposable and reusable carrier systems. (so-called trays). These are manufactured from a wide range of plastics using the thermoforming process for various industries and areas of application and adapted to the individual requirements of the customer. <br /><br /> Just one year after the company was founded, traytec, as a dynamically growing company, introduced a quality management system in accordance with DIN EN ISO 9001, in which all internal and external work and production processes are firmly anchored.",
    image: require("@/assets/images/common/img_example_company_desc.png"),
  };

  return (
    <DescriptionHeading
      description={companyDesc.description}
      image={companyDesc.image}
      title={companyDesc.title}
      titleclass="typo-h2"
    />
  );
};

export default CompanyDesc;
