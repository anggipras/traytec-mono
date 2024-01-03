import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import SalesFormContainer from "./sales-form-container";
import type { FormularEntityResponseCollection } from "@/generated/graphql";

interface SalesFormProps {
  salesform: FormularEntityResponseCollection;
}

const SalesForm = ({ salesform }: SalesFormProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
  });
  const scrollPrev = useCallback(() => {
    if (emblaApi && emblaApi.canScrollPrev()) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi && emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  return (
    <>
      <div className="absolute left-0 top-0">
        <Image
          alt="bg_footer_left"
          className="max-w-full h-auto"
          src={require("@/assets/images/common/img_bg_footer_left.svg")}
        />
      </div>
      <div className="absolute right-0 top-0">
        <Image
          alt="bg_footer_right"
          className="max-w-full h-auto"
          src={require("@/assets/images/common/img_bg_footer_right.svg")}
        />
      </div>
      <div className="mx-auto max-w-desktop w-full">
        <div className="flex flex-col relative justify-center items-center w-full text-white">
          <div className="flex flex-col items-center text-center max-w-[874px] mx-6 my-10 medium:my-15 z-10">
            <div className="typo-h2 mb-4 medium:mb-5">
              {salesform.data[0].attributes?.ueberschrift?.heading}
            </div>
            <div className="typo-copy-normal mb-6 medium:mb-10">
              {salesform.data[0].attributes?.ueberschrift?.text}
            </div>
            <div className="embla_main">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  {salesform.data[0].attributes?.Fragen.map((val, idx) => (
                    <div className="embla__slide" key={idx}>
                      <SalesFormContainer
                        formValue={val}
                        scrollNext={scrollNext}
                        scrollPrev={scrollPrev}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <hr className="text-white h-2 mx-6 medium:mx-15" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesForm;
