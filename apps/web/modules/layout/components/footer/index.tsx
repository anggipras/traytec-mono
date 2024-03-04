/* eslint-disable import/no-named-as-default-member -- disable no named as default member */
/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style -- disable non-nullable type assertion style */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import qs from "qs";
import { useTranslation } from "next-i18next";
import { useStrapiPluginNavigationTree } from "@/api/hooks/navigation/use-strapi-plugin-navigation";
import type { SeitenEinstellung } from "@/generated/graphql";
import { SmallIcon } from "@/types/icon";
import RenderHtml from "@/modules/common/components/render-html";
import clientConfig from "@/client.config";

interface FooterComponentProps {
  footervalue?: SeitenEinstellung;
}

const FooterComponent = ({ footervalue }: FooterComponentProps) => {
  const { t } = useTranslation("common");
  const [footerNavMenu, setFooterNavMenu] = useState([
    {
      path: "",
      menuName: "",
    },
  ]);
  const router = useRouter();
  const navResponse = useStrapiPluginNavigationTree("main-navigation", {
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

  useEffect(() => {
    const fetchFooterNav = async () => {
      let url = `${clientConfig.serverBaseUrl}/navigation/render/footer-navigation`;
      const query_ = {
        locale: router.locale as string,
        type: "TREE",
      };
      const params = qs.stringify(query_);
      if (params) {
        url = `${url}?${params}`;
      }
      const fetchData = await fetch(url);
      const fetchDataJSON = await fetchData.json();
      if (fetchDataJSON.length) {
        const mappedFooterNavMenu = fetchDataJSON.map((footerNavVal: any) => {
          return { path: footerNavVal.path, menuName: footerNavVal.title };
        });
        setFooterNavMenu(mappedFooterNavMenu);
      }
    };
    void fetchFooterNav();
  }, [router.locale]);

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
                    className="w-full h-full"
                    height="0"
                    sizes="100%"
                    src={
                      footervalue?.logo?.logo_hell?.data?.attributes?.url ?? ""
                    }
                    width="0"
                  />
                </Link>
                <RenderHtml
                  className=""
                  html={footervalue?.footer_text || ""}
                />
                <div className="flex">
                  {footervalue?.social_media?.map((val, idx) => {
                    return (
                      <div key={idx}>
                        {val?.typ && (
                          <div
                            aria-hidden
                            className="cursor-pointer mr-6 self-center"
                            onClick={() => {
                              window.open(val.url || "", "_blank");
                            }}
                          >
                            <Image
                              alt={`footer_${val.typ}`}
                              className="w-8"
                              src={require(
                                `@/assets/images/icons/${
                                  SmallIcon[val.typ]
                                }.svg`
                              )}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col medium:flex-row medium:justify-between">
                <div className="flex flex-col mt-6 medium:mt-0 gap-3.5 medium:gap-4 typo-copy-normal mr-5">
                  <div className="typo-h5 mb-2 capitalize">
                    {t("NAVIGATION")}
                  </div>
                  {navbarMenu.map((footerNav, idx) => (
                    <Link href={footerNav.path} key={idx}>
                      {footerNav.menuName}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col mt-6 medium:mt-0 gap-3.5 medium:gap-4 typo-copy-normal max-w-[275px]">
                  <div className="typo-h5 mb-2 capitalize">{t("CONTACT")}</div>
                  {footervalue?.kontakt?.map((val, idx) => {
                    return (
                      <div className="flex" key={idx}>
                        {val?.type && (
                          <div className="self-start mr-2">
                            <Image
                              alt="footer_ic_location"
                              className="w-8"
                              src={require(
                                `@/assets/images/icons/${
                                  SmallIcon[val.type]
                                }.svg`
                              )}
                            />
                          </div>
                        )}
                        <div className="self-center">{val?.inhalt}</div>
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
              <div className="flex typo-copy-normal">
                {footerNavMenu.map((ftNav, ftIdx) => {
                  return (
                    <Link href={ftNav.path} key={ftIdx}>
                      &#160; {ftNav.menuName} &#124;
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
