/* eslint-disable @typescript-eslint/no-unsafe-assignment -- Need to disable eslint for read src path of image */
import Image from "next/image";
import React, { useState } from "react";

export default function FooterComponent() {
  const [contactFooter] = useState([
    {
      id: 1,
      image: require("@/assets/images/icons/ic_location.svg"),
      ctn: "traytec GmbHBudapester Str. 348455 Bad Bentheim",
    },
    {
      id: 2,
      image: require("@/assets/images/icons/ic_phone.svg"),
      ctn: "+49 (0)5924/99717-0",
    },
    {
      id: 3,
      image: require("@/assets/images/icons/ic_phone.svg"),
      ctn: "+49 (0)5924/99717-10",
    },
    {
      id: 4,
      image: require("@/assets/images/icons/ic_email.svg"),
      ctn: "info@traytec.de",
    },
  ]);

  return (
    <div className="flex flex-col relative justify-center items-center bg-primary-900 w-[100%] text-white">
      <div className="absolute left-0 top-0">
        <Image
          alt="bg_footer_left"
          className="max-w-full h-auto"
          src={require("@/assets/images/common/img_bg_footer_left.svg")}
        />
      </div>
      <div className="absolute right-0 top-0">
        <Image
          alt="bg_footer_right"
          className="max-w-full h-auto"
          src={require("@/assets/images/common/img_bg_footer_right.svg")}
        />
      </div>
      <div className="flex flex-col items-center text-center max-w-[874px] mx-sz-24 my-sz-40 lg:my-sz-60 z-10">
        <div className="text-[24px] lg:text-fs-40 mb-sz-16 lg:mb-sz-20">
          Contact us for more details
        </div>
        <div className="text-[14px] lg:text-fs-base">
          Choose according to what you want to ask then click continue and fill
          in your biodata and message later
        </div>
        <div className="flex flex-col lg:flex-row mt-sz-24 lg:mt-sz-40 gap-sz-16 lg:gap-sz-20">
          <div className="lg:flex-1 rounded-[18px] lg:rounded-[24px] bg-primary-950 px-sz-24 py-[50px] lg:px-sz-32 lg:py-[88px]">
            <div className="flex justify-start items-center mb-[18px] lg:mb-sz-24">
              <Image
                alt="ic_setting"
                className="w-[48px] mr-sz-12"
                src={require("@/assets/images/icons/ic_setting.png")}
              />
              <div className="text-fs-18">Integration</div>
            </div>
            <div className="text-start text-fs-base leading-lh-26">
              Contact us for further and clearer information, about our company
              and others
            </div>
          </div>
          <div className="lg:flex-1 rounded-[18px] lg:rounded-[24px] bg-primary-950 px-sz-24 py-[50px] lg:px-sz-32 lg:py-[88px]">
            <div className="flex justify-start items-center mb-[18px] lg:mb-sz-24">
              <Image
                alt="ic_career"
                className="w-[48px] mr-sz-12"
                src={require("@/assets/images/icons/ic_career.png")}
              />
              <div className="text-fs-18">Career</div>
            </div>
            <div className="text-start text-fs-base leading-lh-26">
              Contact us for more specific and clearer careers
            </div>
          </div>
        </div>
        <div className="buttonCustom hidden lg:block bg-primary-950 px-sz-24 py-sz-14 text-white rounded-[50px] mt-sz-40">
          Continue
        </div>
      </div>
      <div className="w-[100%]">
        <hr className="text-white h-2 mx-sz-24 lg:mx-sz-60" />
      </div>
      <div className="w-[100%] px-sz-24 lg:px-sz-60 pt-[44px] :pt-[80px] pb-sz-24">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center self-center lg:items-start max-w-[275px] gap-sz-24 lg:gap-sz-40">
            <Image
              alt="footer_logo"
              className="max-w-[183px]"
              src={require("@/assets/images/common/img_footer_logo.png")}
            />
            <div className="leading-lh-26 text-center lg:text-start">
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
                  width="32"
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
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="flex flex-col mt-sz-24 lg:mt-0 gap-sz-14 lg:gap-sz-16 text-fs-16 mr-sz-20">
              <div className="text-fs-18 mb-[8px] font-semibold">
                Navigation
              </div>
              <a href="a">Products</a>
              <a href="a">Domain</a>
              <a href="a">Company Information</a>
              <a href="a">Career Section</a>
            </div>
            <div className="flex flex-col mt-sz-24 lg:mt-0 gap-sz-14 lg:gap-sz-16 text-fs-16 max-w-[275px]">
              <div className="text-fs-18 mb-[8px] font-semibold">Contact</div>
              {contactFooter.map((val) => {
                return (
                  <div className="flex" key={`contact-footer-${val.id}`}>
                    <div className="self-start mr-[8px]">
                      <Image
                        alt="footer_ic_location"
                        className="w-[32px]"
                        src={val.image}
                      />
                    </div>
                    <div className="self-center">{val.ctn}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between text-center leading-lh-26 mt-[77px]">
          <div className="mt-sz-14 lg:mt-0 text-fs-16">
            traytec GmbH 2023. All rights reserved.
          </div>
          <div className="text-[14px] lg:text-fs-base">
            imprint &#124; Generelles Geschäftbedingungen &#124; Datenschutz
          </div>
        </div>
      </div>
    </div>
  );
}
