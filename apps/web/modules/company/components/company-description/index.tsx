import Image from "next/image";
import React, { useState } from "react";

const CompanyDesc = () => {
  const [companyDesc] = useState({
    title: "Our journey to become who we are now",
    description: [
      "Since its foundation, the company has developed into a high-performance specialist for the design und production von disposable and reusable carrier systems. (so-called trays). These are manufactured from a wide range of plastics using the thermoforming process for various industries and areas of application and adapted to the individual requirements of the customer.",
      "Just one year after the company was founded, traytec, as a dynamically growing company, introduced a quality management system in accordance with DIN EN ISO 9001, in which all internal and external work and production processes are firmly anchored.",
    ],
  });

  return (
    <div className="flex justify-between w-full gap-16">
      <div className="max-w-2xl">
        <div className="typo-h2 mb-5">{companyDesc.title}</div>
        {companyDesc.description.map((desc, idx) => {
          return (
            <div
              className="typo-copy-normal text-gray-400 text-justify mb-4 last:mb-0"
              key={idx}
            >
              {desc}
            </div>
          );
        })}
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
  );
};

export default CompanyDesc;
