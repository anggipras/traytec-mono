import React, { useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/modules/common/components/carousel/next-prev-btn";

const OPTIONS: EmblaOptionsType = {
  align: "start",
  containScroll: false,
  loop: true,
};

const ProductPreview: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const productData = useMemo(
    () => [
      {
        title: "Customer frame system 001",
        description:
          "Frame stacking trays are innovatively crafted with a frame system, allowing for the efficient storage of a greater number of workpieces within a limited footprint. This design optimizes space utilization, providing a practical solution for organizing and maximizing storage capacity in various settings.",
        image: require("@/assets/images/common/img_example_product.png"),
        detail: [
          "These are stackable",
          "protects from dust",
          "Protect sensitive workpieces",
          "Protect sensitive workpieces",
          "protects from pollution",
        ],
      },
      {
        title: "Customer frame system 002",
        description:
          "Frame stacking trays are innovatively crafted with a frame system, allowing for the efficient storage of a greater number of workpieces within a limited footprint. This design optimizes space utilization, providing a practical solution for organizing and maximizing storage capacity in various settings.",
        image: require("@/assets/images/common/img_example_product.png"),
        detail: [
          "These are stackable 2",
          "protects from dust 2",
          "Protect sensitive workpieces 2",
          "Protect sensitive workpieces 2",
          "protects from pollution 2",
        ],
      },
      {
        title: "Customer frame system 003",
        description:
          "Frame stacking trays are innovatively crafted with a frame system, allowing for the efficient storage of a greater number of workpieces within a limited footprint. This design optimizes space utilization, providing a practical solution for organizing and maximizing storage capacity in various settings.",
        image: require("@/assets/images/common/img_example_product.png"),
        detail: [
          "These are stackable 3",
          "protects from dust 3",
          "Protect sensitive workpieces 3",
          "Protect sensitive workpieces 3",
          "protects from pollution 3",
        ],
      },
    ],
    []
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <div className="flex relative justify-center px-6 py-10 medium:p-0">
      <div className="hidden medium:flex absolute medium:inset-y-0 medium:left-0">
        <Image
          alt="bg_linear"
          className="w-full h-full"
          objectFit="cover"
          src={require("@/assets/images/common/img_bg_linear.svg")}
        />
      </div>
      <div className="embla max-w-[670px] pt-0 medium:pt-16">
        <div className="embla__buttons flex medium:hidden absolute items-center justify-center left-0 right-0 top-[70%] max-xsmall:top-[62%] gap-3 w-full">
          <PrevButton disabled={prevBtnDisabled} onClick={onPrevButtonClick} />
          <NextButton disabled={nextBtnDisabled} onClick={onNextButtonClick} />
        </div>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {productData.map((product, idx) => {
              return (
                <div className="embla__slide text-center" key={idx}>
                  <div className="typo-h3 mb-5">{product.title}</div>
                  <div className="typo-copy-normal mb-10 text-gray-400">
                    {product.description}
                  </div>
                  <div className="px-0 medium:px-10">
                    <Image
                      alt="img-ex-product"
                      className="w-full"
                      src={product.image}
                    />
                  </div>
                  <div className="flex flex-col medium:flex-row medium:flex-wrap justify-start medium:justify-center mt-20 medium:mt-0 gap-4">
                    {product.detail.map((det, idxDetail) => {
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="embla__buttons hidden medium:flex absolute items-center justify-center top-16 bottom-0 left-0 right-[730px]">
        <PrevButton disabled={prevBtnDisabled} onClick={onPrevButtonClick} />
      </div>
      <div className="embla__buttons hidden medium:flex absolute items-center justify-center top-16 bottom-0 left-[730px] right-0">
        <NextButton disabled={nextBtnDisabled} onClick={onNextButtonClick} />
      </div>
    </div>
  );
};

export default ProductPreview;
