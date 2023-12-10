import React, { useState } from "react";
import SubHeader from "@/modules/common/components/sub-header";
import LayoutContainer from "@/modules/layout/components/layout-container";
import SectionHeader from "@/modules/common/components/section-header";
import Image from "next/image";

const EducationTemplate = () => {
  const [educationDesc] = useState({
    title: "Description",
    description:
      "After a training period, you will be responsible for implementing the company`s objectives and processes during your shift.Tasks:You work in 3 shifts, around 12 employees on the shift trust your judgmentYou report directly to the operations managerYou are experienced in working with production machines or want to become oneYou work in accordance with the specifications of our quality management systemYou are aware of your responsibility for occupational safety measuresWe offer:A secure job with a salary that matches the tasks.",
  });

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
          <div className="flex justify-between items-center w-full gap-16">
            <div className="max-w-2xl">
              <div className="typo-h4 mb-5">{educationDesc.title}</div>
              <div className="typo-copy-normal text-gray-400 text-justify mb-4 last:mb-0">
                {educationDesc.description}
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 bottom-0 bg-gray-200 rounded-3xl -rotate-3 w-full" />
              <div className="absolute top-0 bottom-0 bg-gray-200 rounded-3xl rotate-3 w-full" />
              <div className="relative">
                <Image
                  alt="img_company_desc"
                  className="w-full h-full rounded-3xl"
                  src={require("@/assets/images/common/img_example_company_desc.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </>
  );
};

export default EducationTemplate;
