/* eslint-disable @typescript-eslint/no-unsafe-assignment -- Need to disable eslint for read src path of image */
import Image from "next/image";
import React from "react";

const footerComponent = () => {
  return (
    <div className="flex flex-col relative justify-center items-center bg-primary-900 w-[100%] text-white">
      <Image
        alt="bg_footer_left"
        className="absolute left-0 top-0 max-w-[594px]"
        src={require("@/assets/images/common/img_bg_footer_left.svg")}
      />
      <Image
        alt="bg_footer_right"
        className="absolute right-0 top-0 max-w-[594px]"
        src={require("@/assets/images/common/img_bg_footer_right.svg")}
      />
      <div className="flex flex-col items-center text-center max-w-[874px] my-[60px] z-10">
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
            <div className="text-start text-fs-base leading-lh-26">
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
            <div className="text-start text-fs-base leading-lh-26">
              Contact us for more specific and clearer careers
            </div>
          </div>
        </div>
        <div className="buttonCustom bg-primary-950 px-sz-24 py-sz-14 text-white rounded-[50px] mt-sz-40">
          Continue
        </div>
      </div>
      <div className="w-[100%]">
        <hr className="text-white h-2 mx-[60px]" />
      </div>
      <div className="w-[100%] px-[60px] pt-[80px] pb-sz-24">
        <div className="flex justify-between">
          <div className="max-w-[275px]">
            <Image
              alt="footer_logo"
              className="max-w-[183px] mb-sz-40"
              src={require("@/assets/images/common/img_footer_logo.png")}
            />
            <div className="mb-sz-40 leading-lh-26">
              Company manufacturing Trays, inserts, workpiece containers, lids,
              etc. Made from a variety of plastics for all applications
            </div>
            <div className="flex">
              <div className="mr-[23px] self-center">
                <Image
                  alt="footer_socmed_ig"
                  className="w-[32px]"
                  src={require("@/assets/images/icons/ic_instagram.svg")}
                />
              </div>
              <div className="mr-[23px] self-center">
                <Image
                  alt="footer_socmed_yt"
                  className="w-[32px]"
                  src={require("@/assets/images/icons/ic_youtube.svg")}
                />
              </div>
              <div className="mr-[23px] self-center">
                <Image
                  alt="footer_socmed_ln"
                  className="w-[32px]"
                  src={require("@/assets/images/icons/ic_linkedin.svg")}
                />
              </div>
              <div className="mr-[23px] self-center">
                <Image
                  alt="footer_socmed_fb"
                  className="w-[32px]"
                  src={require("@/assets/images/icons/ic_facebook.svg")}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-sz-16 text-fs-16 mr-sz-20">
              <div className="text-fs-18 mb-[8px]">Navigation</div>
              <a href="a">Products</a>
              <a href="a">Domain</a>
              <a href="a">Company Information</a>
              <a href="a">Career Section</a>
            </div>
            <div className="flex flex-col gap-sz-16 text-fs-16 max-w-[275px]">
              <div className="text-fs-18 mb-[8px]">Contact</div>
              <div className="flex">
                <Image
                  alt="footer_ic_location"
                  className="w-[32px] self-start mr-[8px]"
                  src={require("@/assets/images/icons/ic_location.svg")}
                />
                <div className="self-center">
                  traytec GmbHBudapester Str. 348455 Bad Bentheim
                </div>
              </div>
              <div className="flex">
                <Image
                  alt="footer_ic_phone"
                  className="w-[32px] self-start mr-[8px]"
                  src={require("@/assets/images/icons/ic_phone.svg")}
                />
                <div className="self-center">+49 (0)5924/99717-0</div>
              </div>
              <div className="flex">
                <Image
                  alt="footer_ic_phone"
                  className="w-[32px] self-start mr-[8px]"
                  src={require("@/assets/images/icons/ic_phone.svg")}
                />
                <div className="self-center">+49 (0)5924/99717-10</div>
              </div>
              <div className="flex">
                <Image
                  alt="footer_ic_email"
                  className="w-[32px] self-start mr-[8px]"
                  src={require("@/assets/images/icons/ic_email.svg")}
                />
                <div className="self-center">info@traytec.de</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-fs-16 leading-lh-26 mt-[77px]">
          <div>traytec GmbH 2023. All rights reserved.</div>
          <div>
            imprint &#124; Generelles Geschäftbedingungen &#124; Datenschutz
          </div>
        </div>
      </div>
    </div>
  );
};

export default footerComponent;
