import type { PropsWithChildren } from "react";
import React, { useCallback, useEffect, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel-react";
import Image from "next/image";

interface UsePrevNextButtonsType {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  countSlider: number;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  dataLength?: number,
  optionLoop?: boolean
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [countSlider, setCountSlider] = useState(0);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();

    if (optionLoop) {
      setCountSlider(
        countSlider === 0 && dataLength ? dataLength - 1 : countSlider - 1
      );
    } else {
      setCountSlider(countSlider - 1);
    }
  }, [countSlider, dataLength, emblaApi, optionLoop]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();

    if (optionLoop) {
      setCountSlider(
        dataLength && countSlider === dataLength - 1 ? 0 : countSlider + 1
      );
    } else {
      setCountSlider(countSlider + 1);
    }
  }, [countSlider, dataLength, emblaApi, optionLoop]);

  const onSelect = useCallback((emblaApiCallback: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApiCallback.canScrollPrev());
    setNextBtnDisabled(!emblaApiCallback.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    countSlider,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <Image
        alt="carousel-prev-btn"
        className="max-h-15"
        src={require("@/assets/images/icons/ic_arrow_left.png")}
      />
      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <Image
        alt="carousel-next-btn"
        className="max-h-15"
        src={require("@/assets/images/icons/ic_arrow_right.png")}
      />
      {children}
    </button>
  );
};
