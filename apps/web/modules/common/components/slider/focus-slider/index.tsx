import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { flushSync } from "react-dom";
import Link from "next/link";
import RenderHtml from "../../render-html";
import Button from "@/modules/common/components/button";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/modules/common/components/carousel/next-prev-btn";
import SectionHeader from "@/modules/common/components/section-header";
import type { ComponentSliderHorizontalerSliderFokus } from "@/generated/graphql";
import { serverBaseUrl } from "@/client.config";

interface ComponentProps {
  data: ComponentSliderHorizontalerSliderFokus;
}

const TWEEN_FACTOR = 2.5;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const FocusSlider = ({ data }: ComponentProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [emblaRefMob, emblaApiMob] = useEmblaCarousel({
    align: "start",
    containScroll: false,
    loop: true,
  });
  const [emblaRefProduct, emblaApiProduct] = useEmblaCarousel({
    align: "start",
    containScroll: false,
    loop: true,
  });
  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const [screenWidth, setScreenWidth] = useState(0);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => {
        onScroll();
      });
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  let basedOnDesign: any;
  if (!data.background_anzeigen || !data.karten_ausserhalb_anzeigen) {
    basedOnDesign = emblaApiProduct;
  } else if (screenWidth > 1279) {
    basedOnDesign = emblaApi;
  } else {
    basedOnDesign = emblaApiMob;
  }

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    countSlider,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(basedOnDesign, data.cards?.length, true);

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

  return (
    <div className="flex flex-col py-10 medium:pb-0 medium:pt-32.5">
      {data.ueberschrift && (
        <SectionHeader
          desc={data.ueberschrift?.text}
          intro={data.ueberschrift?.topline}
          title={data.ueberschrift?.heading}
        />
      )}
      {!data.background_anzeigen || !data.karten_ausserhalb_anzeigen ? (
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
                <div className="embla__buttons flex medium:hidden absolute items-center justify-center left-0 right-0 top-[70%] max-xsmall:top-[65%] gap-3 w-full">
                  <PrevButton
                    disabled={prevBtnDisabled}
                    onClick={onPrevButtonClick}
                  />
                  <NextButton
                    disabled={nextBtnDisabled}
                    onClick={onNextButtonClick}
                  />
                </div>
                <div className="embla__viewport" ref={emblaRefProduct}>
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
                              src={
                                dt?.image?.data?.attributes?.url
                                  ? `${serverBaseUrl?.replace("/api", "")}${dt
                                      ?.image?.data?.attributes?.url}`
                                  : ""
                              }
                              width="0"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {data.cards[countSlider]?.vorteile && (
                <div className="flex flex-col medium:flex-row medium:flex-wrap justify-start medium:justify-center mt-20 medium:mt-0 gap-4">
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
          )}
          <div className="embla__buttons hidden medium:flex absolute items-center justify-center top-4 bottom-0 left-0 right-[730px]">
            <PrevButton
              disabled={prevBtnDisabled}
              onClick={onPrevButtonClick}
            />
          </div>
          <div className="embla__buttons hidden medium:flex absolute items-center justify-center top-4 bottom-0 left-[730px] right-0">
            <NextButton
              disabled={nextBtnDisabled}
              onClick={onNextButtonClick}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="relative mx-6 medium:mx-0 mt-5 medium:mt-10">
            <div
              className={screenWidth > 1279 ? "embla_industry" : "embla_main"}
            >
              <div
                className="embla__viewport"
                ref={screenWidth > 1279 ? emblaRef : emblaRefMob}
              >
                <div className="embla__container">
                  {data.cards?.map((val, index) => (
                    <div
                      className="embla__slide"
                      key={index}
                      style={{
                        ...(screenWidth > 1279
                          ? tweenValues.length && {
                              opacity: tweenValues[index],
                            }
                          : null),
                      }}
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
                                src={
                                  `${serverBaseUrl?.replace("/api", "")}${val
                                    ?.image?.data?.attributes?.url}` || ""
                                }
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
            <div className="embla__buttons hidden medium:flex absolute items-center justify-center top-0 bottom-0 left-0 right-[650px]">
              <PrevButton
                disabled={prevBtnDisabled}
                onClick={onPrevButtonClick}
              />
            </div>
            <div className="embla__buttons hidden medium:flex absolute items-center justify-center top-0 bottom-0 left-[650px] right-0">
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
            <Link className="mt-10" href={data.button.url}>
              <div className="flex justify-center">
                <Button size="medium" variant={data.button.variante}>
                  <span className="">{data.button.text}</span>
                </Button>
              </div>
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default FocusSlider;
