import React, { useCallback, useEffect, useState } from "react";
// import { useTranslation } from "next-i18next";
import type { EmblaOptionsType } from "embla-carousel-react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { flushSync } from "react-dom";
import Button from "@/modules/common/components/button";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/modules/common/components/carousel/next-prev-btn";
import SectionHeader from "@/modules/common/components/section-header";

const OPTIONS: EmblaOptionsType = { loop: true };
const OPTIONS_MOBILE: EmblaOptionsType = {
  align: "start",
  containScroll: false,
  loop: true,
};

const TWEEN_FACTOR = 4.2;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const IndustrySection: React.FC = () => {
  // const { t } = useTranslation();
  const sampleIndustryList = [
    {
      title: "Automotive",
      description:
        "Innovative design for beauty product storage and easy access",
      image: require("@/assets/images/common/img_example_tools.png"),
    },
    {
      title: "Automotive",
      description:
        "Innovative design for beauty product storage and easy access",
      image: require("@/assets/images/common/img_example_tools.png"),
    },
    {
      title: "Automotive",
      description:
        "Innovative design for beauty product storage and easy access",
      image: require("@/assets/images/common/img_example_tools.png"),
    },
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [emblaRefMob, emblaApiMob] = useEmblaCarousel(OPTIONS_MOBILE);
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

  const basedOnScreenSize = screenWidth > 1279 ? emblaApi : emblaApiMob;
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(basedOnScreenSize);

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
    <div className="flex flex-col my-10 medium:my-32.5">
      <SectionHeader
        desc="Provider of services for making trays, inserts, workpiece containers, lids, etc. for industry according to our wishes"
        intro="Industry Service"
        title="Choose Your Needs"
      />
      <div className="relative mx-6 medium:mx-0 mt-10">
        <div className={`${screenWidth > 1279 ? "embla_industry" : "embla"}`}>
          <div
            className="embla__viewport"
            ref={screenWidth > 1279 ? emblaRef : emblaRefMob}
          >
            <div className="embla__container">
              {sampleIndustryList.map((val, index) => (
                <div
                  className="embla__slide"
                  key={index}
                  style={{
                    ...(screenWidth > 1279
                      ? tweenValues.length && { opacity: tweenValues[index] }
                      : null),
                  }}
                >
                  <div className="px-0 medium:px-12">
                    <div className="flex flex-col justify-center items-center bg-gray-50 rounded-3xl p-6">
                      <div className="flex justify-center items-center p-3 medium:p-10 rounded-full w-fit bg-white mt-3 mb-4">
                        <Image
                          alt="ex-icon-industry"
                          className="w-8 medium:w-24"
                          src={val.image}
                        />
                      </div>
                      <div className="typo-h4">{val.title}</div>
                      <div className="typo-copy-normal text-gray-400 text-center medium:text-start">
                        {val.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="embla__buttons hidden medium:flex absolute items-center justify-center top-0 bottom-0 left-0 right-[650px]">
          <PrevButton disabled={prevBtnDisabled} onClick={onPrevButtonClick} />
        </div>
        <div className="embla__buttons hidden medium:flex absolute items-center justify-center top-0 bottom-0 left-[650px] right-0">
          <NextButton disabled={nextBtnDisabled} onClick={onNextButtonClick} />
        </div>
      </div>
      <div className="embla__buttons flex medium:hidden justify-center gap-3 w-full mt-5">
        <PrevButton disabled={prevBtnDisabled} onClick={onPrevButtonClick} />
        <NextButton disabled={nextBtnDisabled} onClick={onNextButtonClick} />
      </div>
      <div className="hidden medium:flex justify-center mt-10">
        <Button size="medium" variant="secondary">
          <span className="">Contact Us</span>
        </Button>
      </div>
    </div>
  );
};

export default IndustrySection;
