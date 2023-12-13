import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const Hero = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const videoElement = document.getElementById(
      "heroHomeVideo"
    ) as HTMLVideoElement | null;
    if (videoElement) {
      void videoElement.play();
    }
  }, []);

  return (
    <div className="relative w-full h-[720px] max-h-screen overflow-hidden">
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "720px" }}
      >
        <video
          className="absolute top-0 left-0 w-full h-full"
          id="heroHomeVideo"
          loop
          muted
          playsInline
          style={{ objectFit: "cover", objectPosition: "center" }}
        >
          <source src="/videos/traytec_home.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950 to-transparent" />
      <div className="absolute max-w-desktop top-0 bottom-0 -left-48 medium:left-0">
        <Image
          alt="bg_hero_left"
          className="w-full h-full"
          objectFit="cover"
          src={require("@/assets/images/common/img_bg_hero_left.svg")}
        />
      </div>

      <div className="absolute inset-0 max-w-desktop mx-auto h-full">
        <div className="flex relative flex-col justify-center text-center medium:text-start items-center medium:items-start mx-15 h-full max-w-3xl text-white">
          <div className="w-fit px-3.5 py-2 bg-white bg-opacity-25 rounded-md mb-4">
            {t("COMPONENTS.HERO.INTRO")}
          </div>
          <div className="typo-h1 mb-4 medium:mb-6">
            {t("COMPONENTS.HERO.TITLE")}
          </div>
          <div className="typo-copy-intro leading-6.5 mb-4 medium:mb-6">
            {t("COMPONENTS.HERO.SUBTITLE")}
          </div>
          <div className="w-fit bg-white px-6 py-3.5 text-primary-950 rounded-full">
            {t("COMPONENTS.HERO.BUTTON")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
