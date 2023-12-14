import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import LayoutContainer from "@/modules/layout/components/layout-container";
import ChevronIcon from "@/modules/common/icons/chevron";
import Link from "next/link";

interface LocaleList {
  id: number;
  name: string;
  code: string;
  createdAt: string;
  updatedAt: string;
  isDefault: boolean;
}

interface NavbarTemplateProps {
  navbarvalue?: {
    localeList?: LocaleList[];
  };
}

const NavBarTemplate = ({ navbarvalue }: NavbarTemplateProps) => {
  const router = useRouter();
  const webLang: LocaleList[] = navbarvalue?.localeList || [
    {
      id: 0,
      name: "",
      code: "",
      createdAt: "",
      updatedAt: "",
      isDefault: false,
    },
  ];

  const [openLang, setOpenLang] = useState(false);
  const [openMenu, setOpenMenu] = useState(-1);
  const navbarMenu = useMemo(
    () => [
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
    ],
    []
  );

  const setLangSelected = (idx: number, flag: string) => {
    setOpenLang(false);
    void router.push(router.asPath, router.asPath, { locale: flag });
  };

  const setSubMenu = (val: string) => {
    console.log("val", val);
    setOpenMenu(-1);
  };

  const localeOptions = (val: LocaleList, idx: number) => {
    const localeCodeFlag = val.code === "en" ? "gb" : val.code;
    const src = `/flags/1x1/${localeCodeFlag.toLowerCase()}.svg`;
    const alt = `${localeCodeFlag}_flag`;

    return (
      <div
        aria-hidden="true"
        className="flex w-full justify-between items-center px-2.5 py-2 gap-1"
        id={`menu-item-${idx}`}
        key={val.name}
        onClick={() => {
          setLangSelected(idx, val.code);
        }}
        role="menuitem"
      >
        <div className="flex text-copy-normal">
          {localeCodeFlag.toLocaleUpperCase()}
        </div>
        <div className="flex">
          <ChevronIcon />
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

  return (
    <div className="sticky top-0 z-20 bg-gray-50">
      <LayoutContainer>
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
          <div className="flex">
            <div className="relative inline-block cursor-pointer">
              <div
                aria-hidden="true"
                className="flex items-center px-2.5 py-2 border-solid border-gray-200 border rounded-[60px] gap-1"
                onClick={() => {
                  setOpenLang(!openLang);
                }}
              >
                <Image
                  alt={currentFlag.alt}
                  className="rounded-full"
                  height={24}
                  src={currentFlag.src}
                  width={24}
                />
                <ChevronIcon />
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
            <Image
              alt="navbar_hmb"
              className="w-8 ml-1 medium:hidden"
              src={require("@/assets/images/icons/ic_hamburger.svg")}
            />
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
};

export default NavBarTemplate;
