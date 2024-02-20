import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import type { EmblaOptionsType } from "embla-carousel";
import { clsx } from "clsx";
import RenderHtml from "../../render-html";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/modules/common/components/carousel/next-prev-btn";
import {
  Enum_Componentutilsheading_Typ,
  type ComponentSliderHorizontalerSlider,
} from "@/generated/graphql";
import LayoutContainer from "@/modules/layout/components/layout-container";

interface ComponentProps {
  data: ComponentSliderHorizontalerSlider;
}

const HorizontalSlider = ({ data }: ComponentProps) => {
  const emblaOptions: EmblaOptionsType = {
    align: "start",
    loop: data.embla_optionen?.loop ?? false,
    startIndex: data.embla_optionen?.start_index ?? 0,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const textSizeByTyp = clsx({
    "typo-h1": data.uberschrift?.typ === Enum_Componentutilsheading_Typ.H1,
    "typo-h2": data.uberschrift?.typ === Enum_Componentutilsheading_Typ.H2,
  });

  return (
    <div className="medium:pb-0 medium:pt-32.5">
      <LayoutContainer>
        <div className="mx-6 medium:mx-15 py-10">
          <div className="flex flex-col text-center medium:text-start items-center medium:items-stretch">
            <div className="w-fit px-3.5 py-2 bg-pink-100 rounded-full text-rose-800">
              {data.uberschrift?.topline}
            </div>
            <div className={clsx("mb-6 mt-4 max-w-xl", textSizeByTyp)}>
              {data.uberschrift?.heading}
            </div>
            <div className="flex justify-between items-center">
              <RenderHtml
                className="text-gray-400 max-w-[670px]"
                html={data.uberschrift?.text || ""}
              />
              {data.cards?.length && (
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
              )}
            </div>
          </div>
        </div>
      </LayoutContainer>
      {data.cards?.length && (
        <>
          <div className="embla_nowrap px-6 medium:px-15 pt-6 pb-4 medium:pt-10 medium:pb-0">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {data.cards?.map((val, index) => (
                  <div className="embla__slide" key={index}>
                    <div className="rounded-3xl border border-gray-200 p-6">
                      <div className="typo-h1 text-gray-200">0{index + 1}</div>
                      <div className="flex items-center mt-1 mb-6">
                        <div className="flex p-3 mr-3 rounded-full border border-gray-200">
                          <Image
                            alt="icon-slider-nowrap"
                            height={24}
                            src={val?.icon?.data?.attributes?.url ?? ""}
                            width={24}
                          />
                        </div>
                        <div className="typo-h5">{val?.ueberschrift}</div>
                      </div>
                      <RenderHtml
                        className="text-gray-400"
                        html={val?.text || ""}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="embla__buttons flex medium:hidden justify-center gap-3 w-full">
            <PrevButton
              disabled={prevBtnDisabled}
              onClick={onPrevButtonClick}
            />
            <NextButton
              disabled={nextBtnDisabled}
              onClick={onNextButtonClick}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HorizontalSlider;
