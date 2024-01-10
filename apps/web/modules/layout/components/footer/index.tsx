import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStrapiPluginNavigationTree } from "@/api/hooks/navigation/use-strapi-plugin-navigation";

const FooterComponent = () => {
  const router = useRouter();
  const navResponse = useStrapiPluginNavigationTree("main-navigation", {
    // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style -- disable non-nullable-type-assertion-style
    locale: router.locale as string,
  });
  const newNavbarMenu: any = { ...navResponse };
  let navbarMenu = [
    {
      path: "",
      menuName: "",
      submenu: [],
    },
  ];

  if (navResponse.status === "success" && newNavbarMenu.navigation?.length) {
    const mappedNavbarMenu = newNavbarMenu.navigation.map((navVal) => {
      return { path: navVal.path, menuName: navVal.title, submenu: [] };
    });
    navbarMenu = mappedNavbarMenu;
  }

  const contactFooter = [
    {
      image: require("@/assets/images/icons/ic_location.svg"),
      ctn: "traytec GmbH Budapester Str. 348455 Bad Bentheim",
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
  ];

  return (
    <div className="relative bg-primary-900">
      <div className="mx-auto max-w-desktop w-full">
        <div className="flex flex-col relative justify-center items-center w-full text-white">
          <div className="w-full px-6 medium:px-15 pt-11 :pt-20 pb-6">
            <div className="flex flex-col medium:flex-row medium:justify-between">
              <div className="flex flex-col items-center self-center medium:items-start max-w-[275px] gap-6 medium:gap-10">
                <Link href="/">
                  <Image
                    alt="footer_logo"
                    className="max-w-[183px]"
                    src={require("@/assets/images/common/img_footer_logo.png")}
                  />
                </Link>
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
                  {navbarMenu.map((footerNav, idx) => (
                    <Link href={footerNav.path} key={idx}>
                      {footerNav.menuName}
                    </Link>
                  ))}
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
                traytec GmbH {new Date().getFullYear().toString()}. All rights
                reserved.
              </div>
              <div className="typo-copy-normal">
                imprint &#124; Generelles Geschäftbedingungen &#124; Datenschutz
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
