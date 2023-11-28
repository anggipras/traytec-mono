/* eslint-disable @typescript-eslint/no-unsafe-assignment -- Need to disable eslint for read src path of image */
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative max-w-full h-[720px] max-h-screen">
      <Image
        alt="hero_image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src="https://assets.hongkiat.com/uploads/nature-photography/nature-photography-mountain-sky.jpg"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950 to-transparent" />
      <div className="absolute top-0 left-0">
        <Image
          alt="bg_hero_left"
          className="max-w-full h-auto"
          src={require("@/assets/images/common/img_bg_hero_left.svg")}
        />
      </div>

      <div className="flex relative flex-col justify-center text-center lg:text-start items-center lg:items-start mx-[60px] h-full max-w-[738px] text-white">
        <div className="w-fit px-sz-14 py-[8px] bg-primary-100 rounded-md mb-sz-16">
          Let`s work with Traytech
        </div>
        <div className="text-[32px] lg:text-[64px] lg:leading-[72px] mb-sz-16 lg:mb-sz-24">
          Service provider for high quality Plastic
        </div>
        <div className="text-[16px] lg:text-[20px] leading-[26px] mb-sz-16 lg:mb-sz-24">
          Service Provider Manufacturing Trays, inserts, workpiece containers,
          lids and more from a variety of plastics for all applications
        </div>
        <div className="buttonCustom w-fit bg-white px-sz-24 py-sz-14 text-primary-950 rounded-[50px]">
          Find out your needs
        </div>
      </div>
    </div>
  );
};

export default Hero;
