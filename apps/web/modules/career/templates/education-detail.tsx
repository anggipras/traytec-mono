import React from "react";
import DetailPageComponent from "@/modules/career/components/detail-page";

const EducationDetailTemplate = () => {
  const sampleEducationDetail = {
    createdDate: "Des 1, 2023",
    title: "Industrial business management assistant",
    desc: "The company traytec GmbH in Bad Bentheim / Gildehaus produces high-quality trays made of plastic in the automotive, food and medical industries using the so-called “deep-drawing process”.",
    slug: "education-1",
    detail: {
      job_position: "full time",
      salary: "negotiable",
      vacant: "open",
    },
    desc_detail: [
      {
        title: "About Us",
        content:
          "Trays opens the door to inspiring careers, where every individual has the opportunity to develop and reach their maximum potential",
      },
      {
        title: "Detail Job",
        content:
          "After a training period, you will be responsible for implementing the company's objectives and processes during your shift.Tasks:You work in 3 shifts, around 12 employees on the shift trust your judgmentYou report directly to the operations managerYou are experienced in working with production machines or want to become oneYou work in accordance with the specifications of our quality management systemYou are aware of your responsibility for occupational safety measuresWe offer:A secure job with a salary that matches the tasks.",
      },
    ],
  };

  return (
    <DetailPageComponent
      createdDate={sampleEducationDetail.createdDate}
      desc={sampleEducationDetail.desc}
      desc_detail={sampleEducationDetail.desc_detail}
      detail={sampleEducationDetail.detail}
      slug={sampleEducationDetail.slug}
      title={sampleEducationDetail.title}
    />
  );
};

export default EducationDetailTemplate;
