import React, { useEffect, useState } from "react";
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
  type ComponentIntegrationenBewertungen,
} from "@/generated/graphql";

interface ComponentProps {
  data: ComponentIntegrationenBewertungen;
}

const HorizontalSliderDefault = ({ data }: ComponentProps) => {
  const emblaOptions: EmblaOptionsType = {
    align: "start",
    loop: data.embla_optionen?.loop ?? false,
    startIndex: data.embla_optionen?.start_index ?? 0,
  };
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

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const textSizeByTyp = clsx({
    "typo-h1": data.ueberschrift?.typ === Enum_Componentutilsheading_Typ.H1,
    "typo-h2": data.ueberschrift?.typ === Enum_Componentutilsheading_Typ.H2,
  });

  return (
    <div className="flex flex-col mx-6 medium:mx-15 py-10 medium:pb-0 medium:pt-32.5">
      <div className="flex flex-col text-center medium:text-start items-center medium:items-stretch">
        {data.ueberschrift && (
          <>
            <div className="w-fit px-3.5 py-2 bg-pink-100 rounded-full text-rose-800">
              {data.ueberschrift?.topline}
            </div>
            <div className={clsx("mb-6 mt-4 max-w-xl", textSizeByTyp)}>
              {data.ueberschrift?.heading}
            </div>
          </>
        )}
        <div className="flex justify-between items-center">
          <RenderHtml
            className="text-gray-400 max-w-[670px]"
            html={data.ueberschrift?.text || ""}
          />
          {data.bewertungen?.data.length && (
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
      {data.bewertungen?.data.length && (
        <>
          <div
            className={`${
              screenWidth > 1279 ? "embla_testimonial_desktop" : "embla_main"
            } pt-6 pb-4 medium:pt-10 medium:pb-0`}
          >
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {data.bewertungen?.data.map((val, index) => (
                  <div className="embla__slide" key={index}>
                    <div className="flex flex-col h-full justify-between rounded-3xl border border-gray-200 px-6 py-12">
                      <RenderHtml
                        className="text-gray-400 "
                        html={val.attributes?.kommentar || ""}
                      />
                      {val.attributes?.person &&
                        val.attributes?.person.length > 0 && (
                          <div className="flex items-center mt-6">
                            <div className="flex w-12 h-12 overflow-hidden mr-3 rounded-full border border-gray-200">
                              <Image
                                alt="icon-horizontal"
                                height={48}
                                src={val.attributes.person[0]?.photo_url || ""}
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                                width={48}
                              />
                            </div>
                            <div className="typo-h4">
                              {val.attributes.person[0]?.name}
                            </div>
                          </div>
                        )}
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

export default HorizontalSliderDefault;
