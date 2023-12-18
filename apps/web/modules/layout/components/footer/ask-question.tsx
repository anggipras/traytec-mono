/* eslint-disable jsx-a11y/label-has-associated-control -- disable label associated control for input */
import Image from "next/image";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel-react";
import { usePrevNextButtons } from "@/modules/common/components/carousel/next-prev-btn";
import {
  Enum_Componentutilsbutton_Variante,
  type ComponentIntegrationenFormular,
} from "@/generated/graphql";
import Button from "@/modules/common/components/button";

interface ComponentProps {
  data: ComponentIntegrationenFormular;
}

const OPTIONS: EmblaOptionsType = { align: "start", containScroll: false };

const AskQuestion = ({ data }: ComponentProps) => {
  const [activeFooter, setActiveFooter] = useState(-1);
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const initialFooter = [
    {
      icon: require("@/assets/images/icons/ic_setting.png"),
      title: "Integration",
      desc: "Contact us for further and clearer information, about our company and others",
    },
    {
      icon: require("@/assets/images/icons/ic_career.png"),
      title: "Career",
      desc: "Contact us for more specific and clearer careers",
    },
  ];
  const embaCarouselList = [[], data.formular?.data?.attributes?.Fragen];

  const { onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className="flex flex-col items-center text-center max-w-[874px] mx-6 my-10 medium:my-15 z-10">
      <div className="embla_main">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {embaCarouselList.map((footerVal, idx) =>
              idx === 0 ? (
                <div className="embla__slide" key={idx}>
                  <div className="typo-h2 mb-4 medium:mb-5">
                    {data.formular?.data?.attributes?.ueberschrift?.heading}
                  </div>
                  <div className="typo-copy-normal">
                    {data.formular?.data?.attributes?.ueberschrift?.text}
                  </div>
                  <div className="flex flex-col medium:flex-row mt-6 medium:mt-10 gap-4 medium:gap-5">
                    {initialFooter.map((val, idxInitial) => {
                      return (
                        <div
                          className={`${
                            activeFooter === idxInitial
                              ? "bg-primary-800"
                              : "bg-primary-950"
                          } medium:flex-1 cursor-pointer rounded-2xl medium:rounded-3xl px-6 py-[50px] medium:px-8 medium:py-[88px]`}
                          key={idxInitial}
                          onClick={() => {
                            setActiveFooter(idxInitial);
                          }}
                          onKeyUp={() => {
                            setActiveFooter(idxInitial);
                          }}
                          role="button"
                          tabIndex={idxInitial}
                        >
                          <div className="flex justify-start items-center mb-4.5 medium:mb-6">
                            <Image
                              alt="footer_selection"
                              className="w-12 mr-3"
                              src={val.icon}
                            />
                            <div className="typo-h5">{val.title}</div>
                          </div>
                          <div className="text-start typo-copy-normal leading-6.5">
                            {val.desc}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center mt-10">
                    <Button
                      onClick={onNextButtonClick}
                      size="medium"
                      variant={Enum_Componentutilsbutton_Variante.Secondary}
                      width="w-fit"
                    >
                      <span>Continue</span>
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  {footerVal?.map((intFormular, idxForm: number) => (
                    <div className="embla__slide" key={idxForm}>
                      {intFormular?.__typename === "ComponentFormTextForm" ? (
                        <div className="flex flex-col items-start">
                          <div className="mb-6">{intFormular.frage}</div>
                          <div className="relative w-full mt-6">
                            <input
                              className="peer h-full w-full border-b border-gray-400 bg-transparent py-4 text-white outline outline-0 transition-all placeholder-shown:border-gray-400 focus:border-white focus:outline-0 placeholder:opacity-0"
                              placeholder="Your Name"
                            />
                            <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-400 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-400 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white">
                              Your Name
                            </label>
                          </div>
                          <div className="flex justify-end mt-6 w-full">
                            <Button
                              onClick={onNextButtonClick}
                              size="medium"
                              variant={
                                Enum_Componentutilsbutton_Variante.Secondary
                              }
                              width="w-fit"
                            >
                              <span>Continue</span>
                            </Button>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
