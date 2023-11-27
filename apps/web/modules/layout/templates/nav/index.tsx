/* eslint-disable @typescript-eslint/no-unsafe-assignment -- Need to disable eslint for read src path of image */
import Image from "next/image";
import React, { useState } from "react";

export default function NavBar() {
  const [navbarMenu] = useState([
    "Products",
    "Domain",
    "Company Information",
    "Career Section",
  ]);

  return (
    <header>
      <nav className="flex justify-between items-center h-[88px] bg-white px-sz-60 py-sz-24">
        <Image
          alt="navbar_logo"
          className="max-w-[183px]"
          src={require("@/assets/images/common/img_header_logo.png")}
        />
        <div className="flex">
          {navbarMenu.map((val) => {
            return (
              <div
                className="flex items-center text-custom-gray p-sz-10"
                key={`menu-${val}`}
              >
                <div>{val}</div>
                <Image
                  alt="navbar_menu_arrow"
                  className="w-sz-20 ml-[5px]"
                  src={require("@/assets/images/icons/ic_arrow_down.svg")}
                />
              </div>
            );
          })}
        </div>
        <div className="flex items-center px-sz-10 py-[8px] border-solid border-custom-gray border-[1px] rounded-[60px] gap-1">
          <Image
            alt="navbar_lang"
            className="w-sz-24 rounded-[80px]"
            src={require("@/assets/images/common/img_example_lang.png")}
          />
          <Image
            alt="navbar_menu_arrow"
            className="w-sz-20"
            src={require("@/assets/images/icons/ic_arrow_down.svg")}
          />
          <div className="text-sz-16">GER</div>
        </div>
      </nav>
    </header>
  );
}
