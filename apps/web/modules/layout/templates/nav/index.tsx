import type { UrlObject } from "node:url";
import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import ChevronIcon from "@/modules/common/icons/chevron";
import type { GetLocalesQuery, SeiteEntity } from "@/generated/graphql";
import Accordion from "@/modules/common/components/accordion";
import type { PathInfo } from "@/types/global";

interface NavbarTemplateProps {
  localeList?: GetLocalesQuery;
  localeHandle: SeiteEntity[];
}
interface ValueNavbar {
  __typename: string;
  id: string;
  attributes: Record<string, string>;
}

interface NestedSlugPathType {
  params: { handle: string; slug: string };
  locale: string;
}

const NavBarTemplate = ({
  navbarvalue,
}: {
  navbarvalue?: NavbarTemplateProps;
}) => {
  const router = useRouter();
  const webLang = navbarvalue?.localeList?.i18NLocales?.data || [
    {
      id: "",
      attributes: {
        __typename: "",
        code: "",
      },
    },
  ];

  useEffect(() => {
    if (navbarvalue?.localeHandle && navbarvalue.localeHandle.length > 0) {
      const filteredHandle = navbarvalue.localeHandle.filter((val) =>
        router.asPath.replace("/", "").includes(val.attributes?.slug || "")
      );

      const paths: PathInfo[] = [];
      const nestedSlugPath: NestedSlugPathType[] = [];
      filteredHandle.forEach((dt) => {
        paths.push({
          params: { handle: dt.attributes?.slug ?? "" },
          locale: dt.attributes?.locale ?? "",
        });
        dt.attributes?.localizations?.data.forEach((dtLocal) => {
          paths.push({
            params: { handle: dtLocal.attributes?.slug ?? "" },
            locale: dtLocal.attributes?.locale ?? "",
          });
        });
        if (dt.attributes?.inhalte && dt.attributes?.inhalte.length > 0) {
          const nestedSlug = dt.attributes?.inhalte.filter(
            (inhalteVal) =>
              inhalteVal?.__typename === "ComponentIntegrationenJobs"
          );

          if (
            nestedSlug.length &&
            nestedSlug[0]?.__typename === "ComponentIntegrationenJobs"
          ) {
            nestedSlug[0].jobs?.data.forEach((jobDt) => {
              if (
                dt.attributes?.slug &&
                jobDt.attributes?.slug &&
                router.asPath.replace("/", "") ===
                  `${dt.attributes?.slug}/${jobDt.attributes?.slug}`
              ) {
                nestedSlugPath.push({
                  params: {
                    handle: dt.attributes?.slug,
                    slug: jobDt.attributes?.slug ? jobDt.attributes?.slug : "",
                  },
                  locale: jobDt.attributes?.locale ?? "",
                });

                jobDt.attributes?.localizations?.data.forEach((jobDtLocal) => {
                  const filteredParentPath = paths
                    .filter(
                      (filteredPath) =>
                        filteredPath.locale === jobDtLocal.attributes?.locale
                    )
                    .map((strPath) => strPath.params.handle);

                  if (filteredParentPath.length) {
                    nestedSlugPath.push({
                      params: {
                        handle: filteredParentPath[0],
                        slug: jobDtLocal.attributes?.slug
                          ? jobDtLocal.attributes?.slug
                          : "",
                      },
                      locale: jobDtLocal.attributes?.locale ?? "",
                    });
                  }
                });
              }
            });
          }
          // else add another typeName that has nestedSlug e.g Industry page
        }
      });
      setNestedSlug(nestedSlugPath);
      setPageHandle(paths);
    }
  }, [navbarvalue?.localeHandle, router.asPath]);

  const [openLang, setOpenLang] = useState(false);
  const [pageHandle, setPageHandle] = useState<PathInfo[]>();
  const [nestedSlug, setNestedSlug] = useState<NestedSlugPathType[]>();
  const [openMenu, setOpenMenu] = useState(-1);
  const [openMobileNavbar, setOpenMobileNavbar] = useState(false);
  const navbarMenu = [
    {
      path: "/products",
      menuName: "Products",
      submenu: [
        "Customer frame system",
        "Container inserts",
        "Stackable",
        "Rotating stackable",
        "Inserts for various types of packaging",
      ],
    },
    {
      path: "/domains",
      menuName: "Domains",
      submenu: [
        "Customer frame system",
        "Container inserts",
        "Stackable",
        "Rotating stackable",
        "Inserts for various types of packaging",
      ],
    },
    {
      path: "/company",
      menuName: "Company Information",
      submenu: [
        "Customer frame system",
        "Container inserts",
        "Stackable",
        "Rotating stackable",
        "Inserts for various types of packaging",
      ],
    },
    {
      path: "/career",
      menuName: "Career Section",
      submenu: [
        "Customer frame system",
        "Container inserts",
        "Stackable",
        "Rotating stackable",
        "Inserts for various types of packaging",
      ],
    },
  ];

  const setLangSelected = (flag: string) => {
    const selectedHandle = pageHandle?.filter((val) => val.locale === flag);

    setOpenLang(false);
    if (selectedHandle && selectedHandle.length > 0) {
      if (nestedSlug && nestedSlug.length > 0) {
        const selectedNestedSlug = nestedSlug.filter(
          (val) => val.locale === flag
        );

        const newRouter: UrlObject = {
          pathname: "/[handle]/[slug]",
          query: {
            handle: selectedNestedSlug[0].params.handle,
            slug: selectedNestedSlug[0].params.slug,
          },
        };

        void router.replace(newRouter, undefined, { locale: flag });
      } else {
        const selectedLangHandle = selectedHandle[0].params.handle || "";
        void router.replace(selectedLangHandle, selectedLangHandle, {
          locale: flag,
        });
      }
    } else {
      void router.replace(router.asPath, router.asPath, {
        locale: flag,
      });
    }
  };

  const setSubMenu = (val: string) => {
    console.log("val", val);
    setOpenMenu(-1);
  };

  const localeOptions = (val: ValueNavbar, idx: number) => {
    const localeCodeFlag =
      val.attributes.code === "en" ? "gb" : val.attributes.code;
    const src = `/flags/1x1/${localeCodeFlag.toLowerCase()}.svg`;
    const alt = `${localeCodeFlag}_flag`;

    return (
      <div
        aria-hidden="true"
        className="flex w-full justify-between items-center px-2.5 py-2 gap-1"
        id={`menu-item-${idx}`}
        key={val.id}
        onClick={() => {
          setLangSelected(val.attributes.code);
        }}
        role="menuitem"
      >
        <div className="flex text-copy-normal">
          {localeCodeFlag.toLocaleUpperCase()}
        </div>
        <div className="flex">
          <ChevronIcon direction="down" />
          <Image
            alt={alt}
            className="rounded-full"
            height={24}
            src={src}
            width={24}
          />
        </div>
      </div>
    );
  };

  const currentFlag = useMemo(() => {
    const localeCodeFlag =
      router.locale === "en" ? "gb" : router.locale || "de";
    const src = `/flags/1x1/${localeCodeFlag.toLowerCase()}.svg`;
    const alt = `${localeCodeFlag}_flag`;

    return { src, alt, localeCodeFlag };
  }, [router.locale]);

  const onToggleMobileNavbar = () => {
    if (!openMobileNavbar) {
      setOpenLang(false);
    }
    setOpenMobileNavbar(!openMobileNavbar);
  };

  const onToggleWebLang = () => {
    if (!openLang) {
      setOpenMobileNavbar(false);
    }
    setOpenLang(!openLang);
  };

  return (
    <div className="sticky top-0 z-20 bg-gray-50">
      <div className="mx-auto max-w-desktop w-full">
        <div className="flex justify-between items-center h-[88px] px-6 py-3.5 medium:px-15 medium:py-6">
          <Link href="/">
            <Image
              alt="navbar_logo"
              className="max-w-[121px] h-auto medium:max-w-[183px]"
              src={require("@/assets/images/common/img_header_logo.png")}
            />
          </Link>
          <div className="hidden medium:flex">
            {navbarMenu.map((val, menuIdx) => {
              return (
                <div
                  className="relative inline-block"
                  key={`menu-${val.menuName}`}
                  onMouseEnter={() => {
                    setOpenMenu(menuIdx);
                  }}
                  onMouseLeave={() => {
                    setOpenMenu(-1);
                  }}
                >
                  <div className="flex items-center cursor-pointer text-gray-700 p-2.5">
                    <div
                      aria-hidden="true"
                      className={`${
                        router.pathname.includes(val.path)
                          ? "text-primary-950"
                          : "text-gray-700"
                      }`}
                      onClick={() => {
                        void router.push(val.path);
                        setOpenMenu(-1);
                      }}
                    >
                      {val.menuName}
                    </div>
                    <div
                      aria-hidden="true"
                      className="ml-1"
                      onClick={() => {
                        setOpenMenu(menuIdx !== -1 ? menuIdx : -1);
                      }}
                    >
                      <ChevronIcon
                        color={
                          router.pathname.includes(val.path)
                            ? "#730033"
                            : "#12090D"
                        }
                      />
                    </div>
                  </div>

                  {openMenu !== -1 && openMenu === menuIdx ? (
                    <div
                      className="flex overflow-hidden absolute left-0 z-20 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                    >
                      <div className="w-3.5 bg-primary-950" />
                      <div className="min-w-[200px]" role="none">
                        {navbarMenu[openMenu].submenu.map((value, idx) => {
                          return (
                            <div
                              aria-hidden="true"
                              className="flex items-center cursor-pointer hover:bg-pink-100 px-2.5 py-2 gap-1"
                              id={`submenu-item-${idx}`}
                              key={value}
                              onClick={() => {
                                setSubMenu(value);
                              }}
                              role="menuitem"
                            >
                              <div className="text-base hidden medium:block">
                                {value}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="flex items-center">
            <div className="relative inline-block cursor-pointer">
              <div
                aria-hidden="true"
                className="flex items-center px-2.5 py-2 border-solid border-gray-200 border rounded-[60px] gap-1"
                onClick={() => {
                  onToggleWebLang();
                }}
              >
                <Image
                  alt={currentFlag.alt}
                  className="rounded-full"
                  height={24}
                  src={currentFlag.src}
                  width={24}
                />
                <ChevronIcon direction="down" />
                <div className="text-base hidden medium:block">
                  {currentFlag.localeCodeFlag.toLocaleUpperCase()}
                </div>
              </div>

              {openLang ? (
                <div
                  className="absolute w-28 right-0 mt-2 z-20 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                >
                  {webLang.map((val, idx) => {
                    return localeOptions(val, idx);
                  })}
                </div>
              ) : null}
            </div>
            <div
              aria-hidden="true"
              onClick={() => {
                onToggleMobileNavbar();
              }}
            >
              <Image
                alt="navbar_hmb"
                className="w-8 ml-1 medium:hidden"
                src={
                  openMobileNavbar
                    ? require("@/assets/images/icons/ic_close.svg")
                    : require("@/assets/images/icons/ic_hamburger.svg")
                }
              />
            </div>
          </div>
        </div>
      </div>
      {openMobileNavbar ? (
        <div className="absolute w-screen h-screen bg-gray-50 z-20 pt-3.5 px-6 overflow-y-scroll">
          <Accordion
            closeMenu={() => {
              onToggleMobileNavbar();
            }}
            data={navbarMenu}
          />
        </div>
      ) : null}
    </div>
  );
};

export default NavBarTemplate;
