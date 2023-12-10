import React from "react";
import SubHeader from "@/modules/common/components/sub-header";
import LayoutContainer from "@/modules/layout/components/layout-container";
import SectionHeader from "@/modules/common/components/section-header";
import DescriptionHeading from "@/modules/common/section/description-heading";

const EducationTemplate = () => {
  const educationDesc = {
    title: "Description",
    description:
      "<p>After a training period, you will be responsible for implementing the company's objectives and processes during your shift.</p>  <p>Tasks:</p>  <ul>    <li>You work in 3 shifts, around 12 employees on the shift trust your judgment</li>    <li>You report directly to the operations manager</li>    <li>You are experienced in working with production machines or want to become one</li>    <li>You work in accordance with the specifications of our quality management system</li>    <li>You are aware of your responsibility for occupational safety measures</li>  </ul>  <p>We offer:</p>  <p>A secure job with a salary that matches the tasks.</p>",
    image: require("@/assets/images/common/img_example_company_desc.png"),
  };

  return (
    <>
      <SubHeader title="Education programs" />
      <LayoutContainer>
        <div className="mt-20 mx-15 mb-32.5">
          <div className="mb-10">
            <SectionHeader
              desc="Provider of services for making trays, inserts, workpiece containers, lids, etc. for industry according to our wishes"
              title="Description for internship at our company"
            />
          </div>
          <DescriptionHeading
            description={educationDesc.description}
            image={educationDesc.image}
            title={educationDesc.title}
            titleclass="typo-h4"
          />
        </div>
      </LayoutContainer>
    </>
  );
};

export default EducationTemplate;
