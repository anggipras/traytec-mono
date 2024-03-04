import React, { useEffect, useState } from "react";
import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Image from "next/image";
import RenderHtml from "../../render-html";
import FocusSliderWithAutoplay from "./with-autoplay";
import Button from "@/modules/common/components/button";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/modules/common/components/carousel/next-prev-btn";
import SectionHeader from "@/modules/common/components/section-header";
import type { ComponentSliderHorizontalerSliderFokus } from "@/generated/graphql";
import LayoutContainer from "@/modules/layout/components/layout-container";

interface ComponentProps {
  data: ComponentSliderHorizontalerSliderFokus;
}

const FocusSlider = ({ data }: ComponentProps) => {
  const emblaOptions: EmblaOptionsType = {
    align: "center",
    containScroll: false,
    loop: data.embla_optionen?.loop ?? false,
    startIndex: data.embla_optionen?.start_index ?? 0,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [ClassNames()]);
  const [emblaRefMob, emblaApiMob] = useEmblaCarousel(emblaOptions);
  const [screenWidth, setScreenWidth] = useState(0);

  let basedOnDesign: any;
  if (screenWidth > 1279) {
    basedOnDesign = emblaApi;
  } else {
    basedOnDesign = emblaApiMob;
  }

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(basedOnDesign);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToDynamicView = (dt: string) => {
    const scrolledEl = document.getElementById(dt);
    if (scrolledEl)
      scrolledEl.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div className="flex flex-col py-10 medium:pb-0 medium:pt-32.5">
      {data.ueberschrift && (
        <LayoutContainer>
          <SectionHeader
            desc={data.ueberschrift?.text}
            intro={data.ueberschrift?.topline}
            title={data.ueberschrift?.heading}
            typ={data.ueberschrift.typ}
          />
        </LayoutContainer>
      )}
      {!data.background_anzeigen || !data.karten_ausserhalb_anzeigen ? (
        <FocusSliderWithAutoplay data={data} />
      ) : (
        <>
          <div className="relative mx-6 medium:mx-0 mt-5 medium:mt-10">
            <div
              className={
                screenWidth > 1279 ? "embla_focus_slider" : "embla_main"
              }
            >
              <div
                className="embla__viewport"
                ref={screenWidth > 1279 ? emblaRef : emblaRefMob}
              >
                <div className="embla__container">
                  {data.cards?.map((val, index) => (
                    <div
                      className={`embla__slide ${
                        screenWidth > 1279 ? "embla__class-names" : null
                      }`}
                      key={index}
                    >
                      <div className="px-0 medium:px-12">
                        <div className="flex flex-col justify-center items-center bg-gray-50 rounded-3xl p-6">
                          <div className="flex justify-center items-center p-3 medium:p-10 rounded-full w-fit bg-white mt-3 mb-4">
                            {val?.image?.data?.attributes?.url && (
                              <Image
                                alt="icon-horizontal-slider"
                                className="w-8 medium:w-24"
                                height="0"
                                sizes="100%"
                                src={val?.image?.data?.attributes?.url}
                                width="0"
                              />
                            )}
                          </div>
                          <div className="typo-h4">{val?.ueberschrift}</div>
                          <RenderHtml
                            className="text-gray-400 text-center medium:text-start"
                            html={val?.text || ""}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="embla__buttons hidden medium:flex absolute items-center justify-center top-0 bottom-0 left-0 right-[600px]">
              <PrevButton
                disabled={prevBtnDisabled}
                onClick={onPrevButtonClick}
              />
            </div>
            <div className="embla__buttons hidden medium:flex absolute items-center justify-center top-0 bottom-0 left-[600px] right-0">
              <NextButton
                disabled={nextBtnDisabled}
                onClick={onNextButtonClick}
              />
            </div>
          </div>
          <div className="embla__buttons flex medium:hidden justify-center gap-3 w-full mt-5">
            <PrevButton
              disabled={prevBtnDisabled}
              onClick={onPrevButtonClick}
            />
            <NextButton
              disabled={nextBtnDisabled}
              onClick={onNextButtonClick}
            />
          </div>
          {data.button && (
            <LayoutContainer>
              <div
                aria-hidden
                className="flex justify-center mt-10"
                onClick={() => {
                  scrollToDynamicView(data.button?.url ?? "");
                }}
              >
                <Button size="medium" variant={data.button.variante}>
                  <span className="">{data.button.text}</span>
                </Button>
              </div>
            </LayoutContainer>
          )}
        </>
      )}
    </div>
  );
};

export default FocusSlider;
