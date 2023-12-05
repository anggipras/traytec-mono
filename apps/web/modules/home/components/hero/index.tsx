import Image from "next/image";
import React, { useEffect } from "react";

const Hero: React.FC = () => {
  useEffect(() => {
    const videoElement = document.getElementById(
      "heroHomeVideo"
    ) as HTMLVideoElement | null;
    if (videoElement) {
      videoElement.play();
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
            Let`s work with Traytech
          </div>
          <div className="typo-h1 mb-4 medium:mb-6">
            Service provider for high quality Plastic
          </div>
          <div className="typo-copy-intro leading-6.5 mb-4 medium:mb-6">
            Service Provider Manufacturing Trays, inserts, workpiece containers,
            lids and more from a variety of plastics for all applications
          </div>
          <div className="buttonCustom w-fit bg-white px-6 py-3.5 text-primary-950 rounded-full">
            Find out your needs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
