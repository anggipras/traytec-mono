import React from "react";
import Image from "next/image";
import LayoutContainer from "@/modules/layout/components/layout-container";
import Button from "@/modules/common/components/button";

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
    <LayoutContainer>
      <div className="flex flex-col medium:flex-row justify-between mx-6 my-10 medium:mx-15 medium:mt-10 medium:mb-32.5 gap-20 medium:gap-5">
        <div className="flex flex-col w-full">
          <div className="typo-h2">{sampleCareerDetail.title}</div>
          <div className="flex gap-5 my-6 medium:my-5">
            {Object.entries(sampleCareerDetail.detail).map(
              ([property, val]) => (
                <div className="flex items-center" key={property}>
                  <div>
                    <Image
                      alt="ic-career-detail-card"
                      className="w-full h-full"
                      src={
                        property === "job_position"
                          ? require("@/assets/images/icons/ic_clock.svg")
                          : require("@/assets/images/icons/ic_dollar.svg")
                      }
                    />
                  </div>
                  <div className="typo-copy-normal text-gray-500 capitalize ml-2">
                    {val}
                  </div>
                </div>
              )
            )}
          </div>
          <div className="typo-copy-normal text-gray-500">
            {sampleCareerDetail.createdDate}
          </div>
          <div className="border border-gray-100 w-full mt-6" />
          {sampleCareerDetail.desc_detail.map((val, idx) => (
            <div className="mt-6 medium:mt-8" key={idx}>
              <div className="typo-h4 mb-6 medium:mb-5">{val.title}</div>
              <div className="typo-copy-normal text-gray-400">
                {val.content}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col px-10 py-6 bg-gray-50 rounded-3xl w-full medium:max-w-lg h-fit">
          <div className="typo-h4">Interested to work with us ?</div>
          <div className="typo-copy-normal text-gray-400 mt-4 mb-6">
            provide your complete application documents and click apply
          </div>
          <Button size="small" variant="secondary" width="w-full">
            <span>Apply Now</span>
          </Button>
        </div>
      </div>
    </LayoutContainer>
  );
};

export default CareerDetailTemplate;
