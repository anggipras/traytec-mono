import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { clsx } from "clsx";
import {
  Enum_Componentutilsheading_Typ,
  type ComponentHerosHero1,
} from "@/generated/graphql";
import Button from "@/modules/common/components/button";
import { serverBaseUrl } from "@/client.config";

interface ComponentProps {
  data: ComponentHerosHero1;
}

const Hero = ({ data }: ComponentProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    const videoElement = document.getElementById(
      "heroHomeVideo"
    ) as HTMLVideoElement | null;
    if (videoElement) {
      void videoElement.play();
    }
  }, [data]);

  const heroHeading = clsx({
    "typo-h1": data.ueberschrift?.typ === Enum_Componentutilsheading_Typ.H1,
    "typo-h2": data.ueberschrift?.typ === Enum_Componentutilsheading_Typ.H2,
  });

  const visibleHero = clsx({
    hidden: !data.sichtbar,
    block: data.sichtbar,
  });

  return (
    <div
      className={clsx(
        "relative w-full h-[720px] max-h-screen overflow-hidden",
        visibleHero
      )}
    >
      {data.hintergrund ? (
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
            <source
              src={`${serverBaseUrl?.replace("/api", "")}${data.hintergrund
                ?.data?.attributes?.url}`}
              type={`video/${data.hintergrund?.data?.attributes?.ext?.replaceAll(
                ".",
                ""
              )}`}
            />
          </video>
        </div>
      ) : null}
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
        <div className="flex relative flex-col justify-center text-center medium:text-start items-center medium:items-start h-full max-w-3xl px-6 text-white mx-auto">
          <div className="w-fit px-3.5 py-2 bg-white bg-opacity-25 rounded-md mb-4">
            {t("COMPONENTS.HERO.INTRO", {
              topLine: data.ueberschrift?.topline,
            })}
          </div>
          <div className={clsx("mb-4 medium:mb-6", heroHeading)}>
            {t("COMPONENTS.HERO.TITLE", {
              heroHeading: data.ueberschrift?.heading,
            })}
          </div>
          <div className="typo-copy-intro leading-6.5 mb-4 medium:mb-6">
            {t("COMPONENTS.HERO.SUBTITLE", {
              heroText: data.ueberschrift?.text,
            })}
          </div>
          {data.hero_btn?.map((val, idx) => (
            <Button
              key={idx}
              size="medium"
              variant={val?.variante}
              width="w-fit"
            >
              <span>
                {t("COMPONENTS.HERO.BUTTON", { buttonText: val?.text })}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
