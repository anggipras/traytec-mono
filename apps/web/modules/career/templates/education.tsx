import React, { useMemo } from "react";
import EducationList from "../components/education/education-list";
// import SubHeader from "@/modules/common/components/sub-header";
import LayoutContainer from "@/modules/layout/components/layout-container";
import SectionHeader from "@/modules/common/components/section-header";
// import DescriptionHeading from "@/modules/common/components/section-media-content";
import Card from "@/modules/common/components/card";

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

  const specialBenefit = useMemo(
    () => [
      {
        title: "Benefit 1",
        desc: "Innovative design for beauty product storage and easy access",
        image: require("@/assets/images/common/img_example_company_team.jpeg"),
      },
      {
        title: "Benefit 2",
        desc: "Innovative design for beauty product storage and easy access",
        image: require("@/assets/images/common/img_example_company_team.jpeg"),
      },
      {
        title: "Benefit 3",
        desc: "Innovative design for beauty product storage and easy access",
        image: require("@/assets/images/common/img_example_company_team.jpeg"),
      },
      {
        title: "Benefit 4",
        desc: "Innovative design for beauty product storage and easy access",
        image: require("@/assets/images/common/img_example_company_team.jpeg"),
      },
    ],
    []
  );

  // const educationDesc = {
  //   title: "Description",
  //   description:
  //     "<p>After a training period, you will be responsible for implementing the company's objectives and processes during your shift.</p>  <p>Tasks:</p>  <ul>    <li>You work in 3 shifts, around 12 employees on the shift trust your judgment</li>    <li>You report directly to the operations manager</li>    <li>You are experienced in working with production machines or want to become one</li>    <li>You work in accordance with the specifications of our quality management system</li>    <li>You are aware of your responsibility for occupational safety measures</li>  </ul>  <p>We offer:</p>  <p>A secure job with a salary that matches the tasks.</p>",
  //   image: require("@/assets/images/common/img_example_company_desc.png"),
  // };

  return (
    <>
      {/* <SubHeader title="Education programs" /> */}
      <LayoutContainer>
        <div className="my-10 mx-6 medium:mt-20 medium:mx-15 medium:mb-32.5">
          <div className="mb-10">
            <SectionHeader
              desc="Provider of services for making trays, inserts, workpiece containers, lids, etc. for industry according to our wishes"
              title="Description for internship at our company"
            />
          </div>
          {/* <DescriptionHeading
            description={educationDesc.description}
            image={educationDesc.image}
            title={educationDesc.title}
            titleclass="typo-h4"
          /> */}
          <div className="my-20 medium:my-32.5">
            <SectionHeader
              desc="Provider of services for making trays, inserts, workpiece containers, lids, etc. for industry according to our wishes"
              title="Special Benefit"
            />
            <div className="grid grid-cols-2 medium:grid-cols-4 mt-10 gap-5">
              {specialBenefit.map((val, idx) => (
                <Card
                  additionalclass="flex-col justify-center items-center"
                  image={val.image}
                  imgclass="mb-3 border-4 border-gray-100 rounded-full overflow-hidden"
                  imgstyle="w-[154px] h-[154px] medium:w-[180px] medium:h-[180px] rounded-full object-cover"
                  key={idx}
                  subcontent={val.desc}
                  textposition="text-center"
                  title={val.title}
                  titleclass="typo-h4"
                />
              ))}
            </div>
          </div>
          <SectionHeader
            desc="Provider of services for making trays, inserts, workpiece containers, lids, etc. for industry according to our wishes"
            title="Program Education/Ausbildung"
          />
          <EducationList educationList={educationList} />
        </div>
      </LayoutContainer>
    </>
  );
};

export default EducationTemplate;
