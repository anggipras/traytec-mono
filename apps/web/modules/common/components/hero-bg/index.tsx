import React, { useEffect } from "react";
import Image from "next/image";
import { clsx } from "clsx";
import RenderHtml from "../render-html";
import { Enum_Componentutilsheading_Typ } from "@/generated/graphql";
import type {
  Maybe,
  ComponentHerosHero1,
  ComponentUtilsButton,
  ComponentUtilsHeading,
  Scalars,
  UploadFileEntityResponse,
} from "@/generated/graphql";
import Button from "@/modules/common/components/button";
import { serverBaseUrl } from "@/client.config";
import imgBgHeroLeft from "@/assets/images/common/img_bg_hero_left.svg";

interface ComponentProps {
  data: ComponentHerosHero1;
}

interface ComponentHero {
  __typename?: "ComponentHerosHero1";
  hero_btn?: Maybe<Maybe<ComponentUtilsButton>[]>;
  hintergrund?: Maybe<UploadFileEntityResponse>;
  id: Scalars["ID"];
  sichtbar: Scalars["Boolean"];
  ueberschrift?: Maybe<ComponentUtilsHeading>;
}

const Hero = ({ data }: ComponentProps) => {
  const heroComponent: ComponentHero = { ...data };

  useEffect(() => {
    const videoElement = document.getElementById(
      "heroHomeVideo"
    ) as HTMLVideoElement | null;
    if (videoElement) {
      void videoElement.play();
    }
  }, [data]);

  const heroHeading = clsx({
    "typo-h1":
      heroComponent.ueberschrift?.typ === Enum_Componentutilsheading_Typ.H1,
    "typo-h2":
      heroComponent.ueberschrift?.typ === Enum_Componentutilsheading_Typ.H2,
  });

  const visibleHero = clsx({
    hidden: !heroComponent.sichtbar,
    block: heroComponent.sichtbar,
  });

  const scrollToDynamicView = (dt: string) => {
    const scrolledEl = document.getElementById(dt);
    if (scrolledEl)
      scrolledEl.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div
      className={clsx(
        "relative w-full h-[720px] max-h-screen overflow-hidden",
        visibleHero
      )}
    >
      {heroComponent.hintergrund && (
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
              src={`${serverBaseUrl?.replace("/api", "")}${heroComponent
                .hintergrund?.data?.attributes?.url}`}
              type={`video/${heroComponent.hintergrund?.data?.attributes?.ext?.replaceAll(
                ".",
                ""
              )}`}
            />
          </video>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950 to-transparent" />
      <div className="absolute max-w-desktop top-0 bottom-0 -left-48 medium:left-0">
        <Image
          alt="bg_hero_left"
          className="w-full h-full"
          height="0"
          priority
          sizes="100%"
          src={imgBgHeroLeft}
          width="0"
        />
      </div>

      <div className="absolute inset-0 max-w-desktop mx-auto h-full">
        <div className="flex relative flex-col justify-center text-center medium:text-start items-center medium:items-start h-full max-w-3xl px-6 text-white mx-auto">
          <div className="w-fit px-3.5 py-2 bg-white bg-opacity-25 rounded-md mb-4 animate-fade-down [animation-delay:_500ms]">
            {heroComponent.ueberschrift?.topline}
          </div>
          <div
            className={clsx("mb-4 medium:mb-6 animate-fade-up", heroHeading)}
          >
            {heroComponent.ueberschrift?.heading}
          </div>
          <RenderHtml
            className="leading-6.5 mb-4 medium:mb-6 animate-fade-down [animation-delay:_500ms]"
            html={heroComponent.ueberschrift?.text || ""}
          />
          {heroComponent.hero_btn?.map((val, idx) => (
            <Button
              key={idx}
              onClick={() => {
                scrollToDynamicView(val?.url ?? "");
              }}
              size="medium"
              variant={val?.variante}
              width="w-fit"
            >
              <span>{val?.text}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
