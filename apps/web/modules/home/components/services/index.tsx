import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/modules/common/components/carousel/next-prev-btn";

const OPTIONS: EmblaOptionsType = { align: "start", containScroll: false };
const SLIDE_COUNT = 7;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const ServicesSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="flex flex-col mx-6 medium:ml-15 medium:mr-0 my-32.5">
      <div className="w-fit px-3.5 py-2 bg-pink-100 rounded-[50px] text-rose-800">
        How to order procces
      </div>
      <div className="typo-h2 mb-6 mt-4">How it work</div>
      <div className="flex justify-between">
        <div className="typo-copy-normal max-w-[670px]">
          Service Provider Manufacturing Trays, inserts, workpiece containers,
          lids and more from a variety of plastics for all applications
        </div>
        <div>
          <div className="embla__buttons">
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
      <div className="embla_services">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {SLIDES.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="rounded-3xl border border-gray-200 p-6 max-w-md">
                  <div className="typo-h1 text-gray-200">0{index + 1}</div>
                  <div className="flex items-center mt-1 mb-6">
                    <div className="flex p-3 mr-3 rounded-[50px] border border-gray-200">
                      <Image
                        alt="ex-icon-service"
                        className="w-6"
                        src={require("@/assets/images/common/img_example_book.png")}
                      />
                    </div>
                    <div className="typo-h5">Production Scheduling</div>
                  </div>
                  <div className="typo-copy-normal text-gray-500">
                    Planning & control taking into account material availability
                    and resource capacities
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
