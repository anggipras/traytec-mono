import Image from "next/image";
import React from "react";
import SubHeader from "@/modules/common/components/sub-header";
import Button from "@/modules/common/components/button";

const DomainTemplate: React.FC = () => {
  return (
    <div>
      <SubHeader title="Our Industry" />
      <div className="flex flex-col items-center mx-auto my-10">
        <div className="typo-h2 mb-4 px-6 medium:px-0 text-center medium:text-center">
          Select your desired industry
        </div>
        <div className="typo-copy-normal mb-6 text-gray-400 px-6 medium:px-0 text-center medium:text-center">
          Provider of services for making trays, inserts, workpiece containers,
          lids, etc. for industry according to our wishes.
        </div>
      </div>
      <div className="flex mx-15 gap-5">
        {/* 1st row, 1st column */}
        <div className="flex relative bg-gray-100 rounded-3xl max-w-[60%] overflow-hidden">
          <div className="absolute top-0 left-[50%] h-full">
            <Image
              alt="domain_product"
              className="max-w-none w-auto h-full"
              src={require("@/assets/images/common/img_example_product.png")}
            />
          </div>
          <div className="px-6 py-20 w-[50%]">
            <div className="typo-h3">Automotive Industries</div>
            <div className="typo-copy-normal text-gray-500 mt-4 mb-5">
              For the automotive industry traytec manufactures disposable and
              reusable trays
            </div>
            <Button
              className="bg-primary-950 px-6 py-3.5 w-fit text-white rounded-full"
              size="medium"
              type="button"
              variant="text"
            >
              <span className="">See more Product</span>
            </Button>
          </div>
        </div>

        {/* 1st row, 1st column */}
        <div className="flex relative bg-white border border-gray-200 rounded-3xl max-w-[40%] overflow-hidden">
          <div className="absolute top-0 left-[50%] h-full">
            <Image
              alt="domain_product"
              className="max-w-none w-auto h-full"
              src={require("@/assets/images/common/img_example_product.png")}
            />
          </div>
          <div className="px-6 py-20 w-[50%]">
            <div className="typo-h3">Automotive Industries</div>
            <div className="typo-copy-normal text-gray-500 mt-4 mb-5">
              For the automotive industry traytec manufactures disposable and
              reusable trays
            </div>
            <Button
              className="bg-white border border-primary-950 px-6 py-3.5 w-fit text-primary-950 rounded-full"
              size="medium"
              type="button"
              variant="text"
            >
              <span className="">See more Product</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainTemplate;
