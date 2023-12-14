import React from "react";
import DetailPageComponent from "@/modules/career/components/detail-page";

const CareerDetailTemplate = () => {
  const sampleCareerDetail = {
    createdDate: "Des 1, 2023",
    title: "Shift manager",
    desc: "The company traytec GmbH in Bad Bentheim / Gildehaus produces high-quality trays made of plastic in the automotive, food and medical industries using the so-called “deep-drawing process”.",
    slug: "career-1",
    detail: {
      job_position: "full time",
      salary: "negotiable",
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
      createdDate={sampleCareerDetail.createdDate}
      desc={sampleCareerDetail.desc}
      desc_detail={sampleCareerDetail.desc_detail}
      detail={sampleCareerDetail.detail}
      slug={sampleCareerDetail.slug}
      title={sampleCareerDetail.title}
    />
  );
};

export default CareerDetailTemplate;
