import Image from "next/image";
import React, { useMemo, useState } from "react";
import LayoutContainer from "@/modules/layout/components/layout-container";

const FooterComponent = () => {
  const [activeFooter, setActiveFooter] = useState(-1);
  const footerSelection = useMemo(
    () => [
      {
        icon: require("@/assets/images/icons/ic_setting.png"),
        title: "Integration",
        desc: "Contact us for further and clearer information, about our company and others",
      },
      {
        icon: require("@/assets/images/icons/ic_career.png"),
        title: "Career",
        desc: "Contact us for more specific and clearer careers",
      },
    ],
    []
  );
  const contactFooter = useMemo(
    () => [
      {
        image: require("@/assets/images/icons/ic_location.svg"),
        ctn: "traytec GmbHBudapester Str. 348455 Bad Bentheim",
      },
      {
        image: require("@/assets/images/icons/ic_phone.svg"),
        ctn: "+49 (0)5924/99717-0",
      },
      {
        image: require("@/assets/images/icons/ic_phone.svg"),
        ctn: "+49 (0)5924/99717-10",
      },
      {
        image: require("@/assets/images/icons/ic_email.svg"),
        ctn: "info@traytec.de",
      },
    ],
    []
  );

  return (
    <div className="relative bg-primary-900">
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
      <LayoutContainer>
        <div className="flex flex-col relative justify-center items-center text-white">
          <div className="flex flex-col items-center text-center max-w-[874px] mx-6 my-10 medium:my-15 z-10">
            <div className="typo-h2 mb-4 medium:mb-5">
              Contact us for more details
            </div>
            <div className="typo-copy-normal">
              Choose according to what you want to ask then click continue and
              fill in your biodata and message later
            </div>
            <div className="flex flex-col medium:flex-row mt-6 medium:mt-10 gap-4 medium:gap-5">
              {footerSelection.map((val, idx) => {
                return (
                  <div
                    className={`${
                      activeFooter === idx ? "bg-primary-800" : "bg-primary-950"
                    } medium:flex-1 cursor-pointer rounded-2xl medium:rounded-3xl px-6 py-[50px] medium:px-8 medium:py-[88px]`}
                    key={idx}
                    onClick={() => {
                      setActiveFooter(idx);
                    }}
                    onKeyUp={() => {
                      setActiveFooter(idx);
                    }}
                    role="button"
                    tabIndex={idx}
                  >
                    <div className="flex justify-start items-center mb-4.5 medium:mb-6">
                      <Image
                        alt="footer_selection"
                        className="w-12 mr-3"
                        src={val.icon}
                      />
                      <div className="typo-h5">{val.title}</div>
                    </div>
                    <div className="text-start typo-copy-normal leading-6.5">
                      {val.desc}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="buttonCustom cursor-pointer hidden medium:block bg-primary-950 px-6 py-3.5 text-white rounded-full mt-10 hover:bg-white hover:text-primary-950">
              Continue
            </div>
          </div>
          <div className="w-full">
            <hr className="text-white h-2 mx-6 medium:mx-15" />
          </div>
          <div className="w-full px-6 medium:px-15 pt-11 :pt-20 pb-6">
            <div className="flex flex-col medium:flex-row medium:justify-between">
              <div className="flex flex-col items-center self-center medium:items-start max-w-[275px] gap-6 medium:gap-10">
                <Image
                  alt="footer_logo"
                  className="max-w-[183px]"
                  src={require("@/assets/images/common/img_footer_logo.png")}
                />
                <div className="leading-6.5 text-center medium:text-start">
                  Company manufacturing Trays, inserts, workpiece containers,
                  lids, etc. Made from a variety of plastics for all
                  applications
                </div>
                <div className="flex">
                  <div className="mr-6 self-center">
                    <Image
                      alt="footer_socmed_ig"
                      className="w-8"
                      src={require("@/assets/images/icons/ic_instagram.svg")}
                    />
                  </div>
                  <div className="mr-6 self-center">
                    <Image
                      alt="footer_socmed_yt"
                      className="w-8"
                      src={require("@/assets/images/icons/ic_youtube.svg")}
                      width="32"
                    />
                  </div>
                  <div className="mr-6 self-center">
                    <Image
                      alt="footer_socmed_ln"
                      className="w-8"
                      src={require("@/assets/images/icons/ic_linkedin.svg")}
                    />
                  </div>
                  <div className="mr-6 self-center">
                    <Image
                      alt="footer_socmed_fb"
                      className="w-8"
                      src={require("@/assets/images/icons/ic_facebook.svg")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col medium:flex-row medium:justify-between">
                <div className="flex flex-col mt-6 medium:mt-0 gap-3.5 medium:gap-4 typo-copy-normal mr-5">
                  <div className="typo-h5 mb-2">Navigation</div>
                  <a href="a">Products</a>
                  <a href="a">Domain</a>
                  <a href="a">Company Information</a>
                  <a href="a">Career Section</a>
                </div>
                <div className="flex flex-col mt-6 medium:mt-0 gap-3.5 medium:gap-4 typo-copy-normal max-w-[275px]">
                  <div className="typo-h5 mb-2">Contact</div>
                  {contactFooter.map((val, idx) => {
                    return (
                      <div className="flex" key={`contact-footer-${idx}`}>
                        <div className="self-start mr-2">
                          <Image
                            alt="footer_ic_location"
                            className="w-8"
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
            <div className="flex flex-col-reverse medium:flex-row medium:justify-between text-center leading-6.5 mt-[77px]">
              <div className="mt-3.5 medium:mt-0 typo-copy-normal">
                traytec GmbH 2023. All rights reserved.
              </div>
              <div className="typo-copy-normal">
                imprint &#124; Generelles Geschäftbedingungen &#124; Datenschutz
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
};

export default FooterComponent;
