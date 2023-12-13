import React from "react";
import { useTranslation } from "next-i18next";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/modules/common/components/carousel/next-prev-btn";

const OPTIONS: EmblaOptionsType = { align: "start", containScroll: false };

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const sampleOrderProcessList = [
    {
      title: "Production Scheduling",
      description:
        "Planning & control taking into account material availability and resource capacities",
    },
    {
      title: "Construction",
      description:
        "Planning & control taking into account material availability and resource capacities",
    },
    {
      title: "Toolmaking",
      description:
        "Planning & control taking into account material availability and resource capacities",
    },
    {
      title: "Production",
      description:
        "Planning & control taking into account material availability and resource capacities",
    },
    {
      title: "Production Scheduling",
      description:
        "Planning & control taking into account material availability and resource capacities",
    },
  ];

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    // countSlider,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="flex flex-col mx-6 medium:ml-15 medium:mr-0 my-10 medium:my-32.5">
      <div className="flex flex-col text-center medium:text-start items-center medium:items-stretch medium:mr-15">
        <div className="w-fit px-3.5 py-2 bg-pink-100 rounded-full text-rose-800">
          {t("PAGES.HOME_PAGE.PROCESS.INTRO")}
        </div>
        <div className="typo-h2 mb-6 mt-4">
          {t("PAGES.HOME_PAGE.PROCESS.TITLE")}
        </div>
        <div className="flex justify-between items-center">
          <div className="typo-copy-normal text-gray-400 max-w-[670px]">
            {t("PAGES.HOME_PAGE.PROCESS.SUBTITLE")}
          </div>
          <div className="embla__buttons hidden medium:flex gap-4">
            <PrevButton
              disabled={prevBtnDisabled}
              onClick={onPrevButtonClick}
            />
            {/* <div className="typo-copy-small hidden medium:flex">
                <div className="text-gray-700">0{countSlider}</div>
                <div className="text-gray-500">/0{SLIDE_COUNT}</div>
              </div> */}
            <NextButton
              disabled={nextBtnDisabled}
              onClick={onNextButtonClick}
            />
          </div>
        </div>
      </div>
      <div className="embla_services pt-6 pb-4 medium:pt-10 medium:pb-0">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {sampleOrderProcessList.map((val, index) => (
              <div className="embla__slide" key={index}>
                <div className="rounded-3xl border border-gray-200 p-6">
                  <div className="typo-h1 text-gray-200">0{index + 1}</div>
                  <div className="flex items-center mt-1 mb-6">
                    <div className="flex p-3 mr-3 rounded-full border border-gray-200">
                      <Image
                        alt="ex-icon-service"
                        className="w-6"
                        src={require("@/assets/images/common/img_example_book.png")}
                      />
                    </div>
                    <div className="typo-h5">
                      {t("PAGES.HOME_PAGE.PROCESS.LIST.TITLE", {
                        listTitle: val.title,
                      })}
                    </div>
                  </div>
                  <div className="typo-copy-normal text-gray-400">
                    {t("PAGES.HOME_PAGE.PROCESS.LIST.DESCRIPTION", {
                      listDesc: val.description,
                    })}
                  </div>
                </div>
              </div>
            ))}
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

export default ServicesSection;
