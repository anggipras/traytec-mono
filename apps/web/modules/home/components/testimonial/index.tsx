import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/modules/common/components/carousel/next-prev-btn";

const OPTIONS: EmblaOptionsType = { align: "start", containScroll: false };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const TestimonialSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
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

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    // countSlider,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const slideComponent = () => {
    return (
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {SLIDES.map((index) => {
            return (
              <div className="embla__slide" key={index}>
                <div className="rounded-3xl border border-gray-200 px-6 py-12 max-w-lg">
                  <div className="typo-copy-normal text-gray-400">
                    “ I am very happy with the quality of the plastic products
                    offered by this company. I have been using their
                    Manufacturing Trays, inserts, workpiece containers, and lids
                    for several months now, and they have proven to be very
                    durable and reliable “
                  </div>
                  <div className="flex items-center mt-6">
                    <Image
                      alt="ex-icon-service"
                      className="w-12 rounded-full mr-3"
                      src={require("@/assets/images/common/img_example_avatar.png")}
                    />
                    <div className="typo-h4">Arlene McCoy</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col mx-6 medium:mx-15 my-10 medium:my-32.5">
      <div className="flex flex-col text-center medium:text-start items-center medium:items-stretch">
        <div className="w-fit px-3.5 py-2 bg-pink-100 rounded-full text-rose-800">
          Testimonial
        </div>
        <div className="typo-h2 mb-6 mt-4 max-w-xl">
          What people say about our products
        </div>
        <div className="flex justify-between items-center">
          <div className="typo-copy-normal text-gray-400 max-w-[670px]">
            What people say about our products
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
      <div
        className={`${
          screenWidth > 1279 ? `embla_testimonial_desktop` : `embla`
        } pt-6 pb-4 medium:pt-10 medium:pb-0`}
      >
        {slideComponent()}
      </div>
      <div className="embla__buttons flex medium:hidden justify-center gap-3 w-full">
        <PrevButton disabled={prevBtnDisabled} onClick={onPrevButtonClick} />
        <NextButton disabled={nextBtnDisabled} onClick={onNextButtonClick} />
      </div>
    </div>
  );
};

export default TestimonialSection;
