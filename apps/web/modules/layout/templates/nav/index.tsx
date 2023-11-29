/* eslint-disable @typescript-eslint/no-unsafe-assignment -- Need to disable eslint for read src path of image */
import Image from "next/image";
import React, { useState, useMemo } from "react";
import LayoutContainer from "../../components/layout-container";

export default function NavBar() {
  const [openLang, setOpenLang] = useState(false);
  const [openMenu, setOpenMenu] = useState(-1);
  const webLang = useMemo(
    () => [
      {
        image: require("@/assets/images/common/img_example_lang.png"),
        country: "EN",
      },
      {
        image: require("@/assets/images/common/img_example_lang.png"),
        country: "GER",
      },
    ],
    []
  );
  const navbarMenu = useMemo(
    () => [
      {
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
        menuName: "Domain",
        submenu: [
          "Customer frame system",
          "Container inserts",
          "Stackable",
          "Rotating stackable",
          "Inserts for various types of packaging",
        ],
      },
      {
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

  const setLangSelected = (val: string) => {
    console.log("val", val);
  };

  const setSubMenu = (val: string) => {
    console.log("val", val);
    setOpenMenu(-1);
  };

  return (
    <LayoutContainer>
      <div className="flex sticky top-0 z-20 justify-between items-center h-[88px] bg-white px-6 py-3.5 small:px-15 small:py-6">
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
                  <div>{val.menuName}</div>
                  <Image
                    alt="navbar_menu_arrow"
                    className="w-5 ml-1"
                    src={require("@/assets/images/icons/ic_arrow_down.svg")}
                  />
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
          <div className="relative inline-block">
            <div
              aria-hidden="true"
              className="flex items-center px-2.5 py-2 border-solid border-custom-gray border rounded-[60px] gap-1"
              onBlur={() => {
                setOpenLang(false);
              }}
              onClick={() => {
                setOpenLang(true);
              }}
              onKeyUp={() => {
                setOpenLang(true);
              }}
              onMouseOut={() => {
                setOpenLang(false);
              }}
            >
              <Image
                alt="navbar_lang"
                className="w-6 rounded-[80px]"
                src={require("@/assets/images/common/img_example_lang.png")}
              />
              <Image
                alt="navbar_menu_arrow"
                className="w-5"
                src={require("@/assets/images/icons/ic_arrow_down.svg")}
              />
              <div className="text-base hidden small:block">GER</div>
            </div>

            {openLang ? (
              <div
                className="absolute right-0 z-20 mt-2 w-full origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
              >
                <div className="py-1" role="none">
                  {webLang.map((val, idx) => {
                    return (
                      <div
                        aria-hidden="true"
                        className="flex items-center px-2.5 py-2 gap-1"
                        id={`menu-item-${idx}`}
                        key={val.country}
                        onClick={() => {
                          setLangSelected(val.country);
                        }}
                        role="menuitem"
                      >
                        <Image
                          alt="navbar_lang"
                          className="w-6 rounded-[80px]"
                          src={val.image}
                        />
                        <Image
                          alt="navbar_menu_arrow"
                          className="w-5"
                          src={require("@/assets/images/icons/ic_arrow_down.svg")}
                        />
                        <div className="text-base hidden small:block">
                          {val.country}
                        </div>
                      </div>
                    );
                  })}
                </div>
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
    </LayoutContainer>
  );
}
