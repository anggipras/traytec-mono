import React, { useMemo } from "react";
import EducationList from "../components/education/education-list";
import SubHeader from "@/modules/common/components/sub-header";
import LayoutContainer from "@/modules/layout/components/layout-container";
import SectionHeader from "@/modules/common/components/section-header";
import DescriptionHeading from "@/modules/common/section/description-heading";

const EducationTemplate = () => {
  const educationList = useMemo(
    () => [
      {
        createdDate: "Des 1, 2023",
        title: "Shift manager",
        desc: "The company traytec GmbH in Bad Bentheim / Gildehaus produces high-quality trays made of plastic in the automotive, food and medical industries using the so-called “deep-drawing process”.",
        slug: "education-1",
        detail: {
          job_position: "full time",
          salary: "negotiable",
          vacant: "open",
        },
      },
      {
        createdDate: "Des 1, 2023",
        title: "Shift manager 4",
        desc: "The company traytec GmbH in Bad Bentheim / Gildehaus produces high-quality trays made of plastic in the automotive, food and medical industries using the so-called “deep-drawing process”.",
        slug: "education-2",
        detail: {
          job_position: "full time",
          salary: "negotiable",
          vacant: "open",
        },
      },
      {
        createdDate: "Des 1, 2023",
        title: "Shift manager 3",
        desc: "The company traytec GmbH in Bad Bentheim / Gildehaus produces high-quality trays made of plastic in the automotive, food and medical industries using the so-called “deep-drawing process”.",
        slug: "education-3",
        detail: {
          job_position: "full time",
          salary: "negotiable",
          vacant: "closed",
        },
      },
      {
        createdDate: "Des 1, 2023",
        title: "Shift manager 4",
        desc: "The company traytec GmbH in Bad Bentheim / Gildehaus produces high-quality trays made of plastic in the automotive, food and medical industries using the so-called “deep-drawing process”.",
        slug: "education-4",
        detail: {
          job_position: "full time",
          salary: "negotiable",
          vacant: "open",
        },
      },
    ],
    []
  );

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
        <div className="my-10 mx-6 medium:mt-20 medium:mx-15 medium:mb-32.5">
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
          <EducationList educationList={educationList} />
        </div>
      </LayoutContainer>
    </>
  );
};

export default EducationTemplate;
