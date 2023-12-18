import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/modules/common/components/carousel/next-prev-btn";
import type { ComponentSliderHorizontalerSlider } from "@/generated/graphql";

interface ComponentProps {
  data: ComponentSliderHorizontalerSlider;
  type: "normal" | "nowrap" | null;
}

const OPTIONS: EmblaOptionsType = { align: "start" };

const HorizontalSlider = ({ data, type }: ComponentProps) => {
  const [screenWidth, setScreenWidth] = useState(0);

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

  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const emblaMain = () => {
    if (type === "normal") {
      if (screenWidth > 1279) {
        return "embla_testimonial_desktop";
      }
      return "embla";
    }
    return "embla_services";
  };

  return (
    <div
      className={`flex flex-col mx-6 my-10 medium:my-32.5 ${
        type === "nowrap" ? "medium:ml-15 medium:mr-0" : "medium:mx-15"
      }`}
    >
      <div
        className={`flex flex-col text-center medium:text-start items-center medium:items-stretch ${
          type === "nowrap" ? "medium:mr-15" : ""
        }`}
      >
        <div className="w-fit px-3.5 py-2 bg-pink-100 rounded-full text-rose-800">
          {t("PAGES.HOME_PAGE.PROCESS.INTRO", {
            processIntro: data.uberschrift?.topline,
          })}
        </div>
        <div className="typo-h2 mb-6 mt-4 max-w-xl">
          {t("PAGES.HOME_PAGE.PROCESS.TITLE", {
            processTitle: data.uberschrift?.heading,
          })}
        </div>
        <div className="flex justify-between items-center">
          <div className="typo-copy-normal text-gray-400 max-w-[670px]">
            {t("PAGES.HOME_PAGE.PROCESS.SUBTITLE", {
              processSubtitle: data.uberschrift?.text,
            })}
          </div>
          <div className="embla__buttons hidden medium:flex gap-4">
            <PrevButton
              disabled={prevBtnDisabled}
              onClick={onPrevButtonClick}
            />
            <NextButton
              disabled={nextBtnDisabled}
              onClick={onNextButtonClick}
            />
          </div>
        </div>
      </div>
      <div className={`${emblaMain()} pt-6 pb-4 medium:pt-10 medium:pb-0`}>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {data.cards?.map((val, index) =>
              type === "nowrap" ? (
                <div className="embla__slide" key={index}>
                  <div className="rounded-3xl border border-gray-200 p-6">
                    <div className="typo-h1 text-gray-200">0{index + 1}</div>
                    <div className="flex items-center mt-1 mb-6">
                      <div className="flex p-3 mr-3 rounded-full border border-gray-200">
                        <Image
                          alt="ex-icon-service"
                          className="w-6"
                          src={val?.icon?.data[0].attributes?.url || ""}
                        />
                      </div>
                      <div className="typo-h5">
                        {t("PAGES.HOME_PAGE.PROCESS.LIST.TITLE", {
                          listTitle: val?.ueberschrift,
                        })}
                      </div>
                    </div>
                    <div className="typo-copy-normal text-gray-400">
                      {t("PAGES.HOME_PAGE.PROCESS.LIST.DESCRIPTION", {
                        listDesc: val?.text,
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="embla__slide" key={index}>
                  <div className="rounded-3xl border border-gray-200 px-6 py-12">
                    <div className="typo-copy-normal text-gray-400">
                      {val?.text}
                    </div>
                    <div className="flex items-center mt-6">
                      <Image
                        alt="ex-icon-service"
                        className="w-12 rounded-full mr-3"
                        src={val?.icon?.data[0].attributes?.url || ""}
                      />
                      <div className="typo-h4">{val?.ueberschrift}</div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="embla__buttons flex medium:hidden justify-center gap-3 w-full">
        <PrevButton disabled={prevBtnDisabled} onClick={onPrevButtonClick} />
        <NextButton disabled={nextBtnDisabled} onClick={onNextButtonClick} />
      </div>
    </div>
  );
};

export default HorizontalSlider;
