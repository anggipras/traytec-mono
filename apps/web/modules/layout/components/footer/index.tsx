/* eslint-disable @typescript-eslint/no-unsafe-assignment -- Need to disable eslint for read src path of image */
import Image from "next/image";
import React from "react";

const footerComponent = () => {
  return (
    <div className="flex relative justify-center bg-primary-900 w-[100%]">
      <Image
        alt="bg_footer_left"
        className="absolute left-0 top-0"
        src={require("@/assets/images/common/img_bg_footer_left.png")}
      />
      <div className="text-center text-white max-w-[874px] my-[60px]">
        <div className="text-fs-40 mb-sz-20">Contact us for more details</div>
        <div className="text-fs-base">
          Choose according to what you want to ask then click continue and fill
          in your biodata and message later
        </div>
        <div className="flex mt-sz-40 gap-sz-20">
          <div className="flex-1 rounded-[24px] bg-primary-950 px-sz-32 py-[88px]">
            <div className="flex justify-start items-center mb-sz-24">
              <Image
                alt="ic_setting"
                className="mr-sz-12"
                height="48"
                src={require("@/assets/images/icons/ic_setting.png")}
                width="48"
              />
              <div className="text-fs-18">Integration</div>
            </div>
            <div className="text-start text-fs-base">
              Contact us for further and clearer information, about our company
              and others
            </div>
          </div>
          <div className="flex-1 rounded-[24px] bg-primary-950 px-sz-32 py-[88px]">
            <div className="flex justify-start items-center mb-sz-24">
              <Image
                alt="ic_setting"
                className="mr-sz-12"
                src={require("@/assets/images/icons/ic_career.png")}
                width="48"
              />
              <div className="text-fs-18">Career</div>
            </div>
            <div className="text-start text-fs-base">
              Contact us for more specific and clearer careers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footerComponent;
