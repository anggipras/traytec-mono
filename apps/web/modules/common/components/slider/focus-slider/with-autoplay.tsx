import React, { useEffect, useState } from "react";
import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import RenderHtml from "../../render-html";
import Card from "../../card";
import LayoutContainer from "@/modules/layout/components/layout-container";
import type { ComponentSliderHorizontalerSliderFokus } from "@/generated/graphql";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/modules/common/components/carousel/next-prev-btn";

interface ComponentProps {
  data: ComponentSliderHorizontalerSliderFokus;
}

const FocusSliderWithAutoplay = ({ data }: ComponentProps) => {
  const [countSlider, setCountSlider] = useState(0);
  const emblaOptions: EmblaOptionsType = {
    align: "center",
    containScroll: false,
    loop: data.embla_optionen?.loop ?? false,
    startIndex: data.embla_optionen?.start_index ?? 0,
  };
  const autoplayOption =
    data.autoplay?.ist_aktiv && data.autoplay.dauer
      ? [
          Autoplay({
            delay: data.autoplay.dauer * 1000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]
      : [];

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, autoplayOption);

  useEffect(() => {
    if (emblaApi)
      emblaApi.on("select", () => {
        setCountSlider(
          data.cards?.length && countSlider === data.cards?.length - 1
            ? 0
            : countSlider + 1
        );
      });
  }, [countSlider, data.cards?.length, emblaApi]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <LayoutContainer>
      <div className="flex max-medium:flex-col relative justify-center items-center py-10 medium:p-0 mx-6 medium:mx-0">
        <div className="hidden medium:flex absolute left-0 top-0">
          <Image
            alt="bg_linear"
            className="w-full h-full"
            objectFit="cover"
            src={require("@/assets/images/common/img_bg_linear.svg")}
          />
        </div>
        {data.cards?.length && (
          <div className="relative max-w-[670px] pt-0 medium:pt-4">
            <div className="typo-h3 mb-5 text-center">
              {data.cards[countSlider]?.ueberschrift}
            </div>
            <RenderHtml
              className="mb-10 text-gray-400 text-center"
              html={data.cards[countSlider]?.text || ""}
            />
            <div className="embla_main">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  {data.cards?.map((dt, idx) => {
                    return (
                      <div className="embla__slide" key={idx}>
                        <div className="px-0 medium:px-10">
                          <Image
                            alt="img-ex-product"
                            className="w-full"
                            height="0"
                            sizes="100%"
                            src={dt?.image?.data?.attributes?.url ?? ""}
                            width="0"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                {data.cards[countSlider]?.vorteile && (
                  <div className="flex flex-col medium:flex-row medium:flex-wrap justify-start medium:justify-center gap-4">
                    {data.cards[countSlider]?.vorteile
                      ?.replace(/(?:<(?:[^>]+)>)/gi, "")
                      .split(";")
                      .map((det, idxDetail) => {
                        return (
                          <div className="flex items-center" key={idxDetail}>
                            <Image
                              alt="ic_check"
                              className="w-6"
                              src={require("@/assets/images/icons/ic_check.svg")}
                            />
                            <div className="typo-copy-normal text-gray-400 ml-2">
                              {det}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            </div>
            <div className="embla__buttons flex medium:hidden items-center justify-center left-0 right-0 gap-3 w-full">
              <PrevButton
                disabled={prevBtnDisabled}
                onClick={onPrevButtonClick}
              />
              <NextButton
                disabled={nextBtnDisabled}
                onClick={onNextButtonClick}
              />
            </div>
            {/* {data.cards[countSlider]?.vorteile && (
              <div className="flex flex-col medium:flex-row medium:flex-wrap justify-start medium:justify-center gap-4">
                {data.cards[countSlider]?.vorteile
                  ?.replace(/(?:<(?:[^>]+)>)/gi, "")
                  .split(";")
                  .map((det, idxDetail) => {
                    return (
                      <div className="flex items-center" key={idxDetail}>
                        <Image
                          alt="ic_check"
                          className="w-6"
                          src={require("@/assets/images/icons/ic_check.svg")}
                        />
                        <div className="typo-copy-normal text-gray-400 ml-2">
                          {det}
                        </div>
                      </div>
                    );
                  })}
              </div>
            )} */}
          </div>
        )}
        <div className="embla__buttons w-fit h-fit hidden medium:flex absolute items-center justify-center left-[230px]">
          <PrevButton disabled={prevBtnDisabled} onClick={onPrevButtonClick} />
        </div>
        <div className="embla__buttons w-fit h-fit hidden medium:flex absolute items-center justify-center right-[230px]">
          <NextButton disabled={nextBtnDisabled} onClick={onNextButtonClick} />
        </div>
      </div>
      <div className="grid grid-cols-1 medium:grid-cols-4 gap-5 px-6 medium:px-15 mt-10 w-full">
        {data.cards?.length &&
          data.cards[countSlider]?.medien?.data.map((medDt, medIdx) => {
            return (
              <Card
                additionalclass="flex-col justify-start"
                image={medDt.attributes?.url ?? ""}
                imgclass="px-0 mb-6"
                imgstyle="w-full"
                indexcard={medIdx}
                key={medIdx}
                subcontent={medDt.attributes?.caption || ""}
                title={medDt.attributes?.name || ""}
                titleclass="typo-h4"
              />
            );
          })}
      </div>
    </LayoutContainer>
  );
};

export default FocusSliderWithAutoplay;
