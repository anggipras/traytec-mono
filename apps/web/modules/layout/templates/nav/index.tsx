import Image from "next/image";
import React, { useState, useMemo } from "react";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  const [openLang, setOpenLang] = useState(false);
  const [langIdx, setLangIdx] = useState(0);
  const [openMenu, setOpenMenu] = useState(-1);
  const webLang = useMemo(
    () => [
      {
        image: require("@/assets/images/common/img_example_lang.png"),
        country: "GER",
      },
      {
        image: require("@/assets/images/common/img_example_lang.png"),
        country: "EN",
      },
    ],
    []
  );
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
        path: "/about",
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

  const setLangSelected = (idx: number) => {
    setOpenLang(false);
    setLangIdx(idx);
  };

  const setSubMenu = (val: string) => {
    console.log("val", val);
    setOpenMenu(-1);
  };

  return (
    <div className="sticky top-0 z-20 bg-gray-50">
      <div className="mx-auto max-w-desktop w-full">
        <div className="flex justify-between items-center h-[88px] px-6 py-3.5 small:px-15 small:py-6">
          <Image
            alt="navbar_logo"
            className="max-w-[121px] h-auto small:max-w-full"
            src={require("@/assets/images/common/img_header_logo.png")}
          />
          <div className="hidden small:flex">
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
                      className={`${
                        router.pathname.includes(val.path)
                          ? "text-primary-950"
                          : "text-gray-700"
                      }`}
                    >
                      {val.menuName}
                    </div>
                    <div className="ml-1">
                      <svg
                        fill="none"
                        height="20"
                        viewBox="0 0 20 20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 8L10 12L14 8"
                          stroke={`${
                            router.pathname.includes(val.path)
                              ? "#730033"
                              : "#12090D"
                          }`}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.2"
                        />
                      </svg>
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
                              <div className="text-base hidden small:block">
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
                  alt="navbar_lang"
                  className="w-6 rounded-full"
                  src={require("@/assets/images/common/img_example_lang.png")}
                />
                <Image
                  alt="navbar_menu_arrow"
                  className="w-5"
                  src={require("@/assets/images/icons/ic_arrow_down.svg")}
                />
                <div className="text-base hidden small:block">
                  {webLang[langIdx].country}
                </div>
              </div>

              {openLang ? (
                <div
                  className="absolute w-28 right-0 mt-2 z-20 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                >
                  {webLang.map((val, idx) => {
                    return (
                      <div
                        aria-hidden="true"
                        className="flex w-full justify-between items-center px-2.5 py-2 gap-1"
                        id={`menu-item-${idx}`}
                        key={val.country}
                        onClick={() => {
                          setLangSelected(idx);
                        }}
                        role="menuitem"
                      >
                        <div className="text-base hidden small:block">
                          {val.country}
                        </div>
                        <div className="flex">
                          <Image
                            alt="navbar_menu_arrow"
                            className="w-5"
                            src={require("@/assets/images/icons/ic_arrow_down.svg")}
                          />
                          <Image
                            alt="navbar_lang"
                            className="w-6 rounded-full"
                            src={val.image}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
            <Image
              alt="navbar_hmb"
              className="w-8 ml-1 small:hidden"
              src={require("@/assets/images/icons/ic_hamburger.svg")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
