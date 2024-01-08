import React from "react";
import { useTranslation } from "next-i18next";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/modules/common/components/carousel/next-prev-btn";
import type { ComponentSliderHorizontalerSlider } from "@/generated/graphql";
import { serverBaseUrl } from "@/client.config";

interface ComponentProps {
  data: ComponentSliderHorizontalerSlider;
}

const OPTIONS: EmblaOptionsType = { align: "start" };

const HorizontalSlider = ({ data }: ComponentProps) => {
  // const [screenWidth, setScreenWidth] = useState(0);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth);
  //   };
  //   handleResize();
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="flex flex-col mx-6 medium:mx-15 py-10 medium:pb-0 medium:pt-32.5">
      <div className="flex flex-col text-center medium:text-start items-center medium:items-stretch">
        <div className="w-fit px-3.5 py-2 bg-pink-100 rounded-full text-rose-800">
          {t("PAGES.HOME_PAGE.PROCESS.INTRO", {
            processIntro: data.uberschrift?.topline,
          })}
        </div>
        <div className="typo-h2 mb-6 mt-4 max-w-xl">
          {t("PAGES.HOME_PAGE.PROCESS.TITLE", {
            processTitle: data.uberschrift?.heading,
          })}
        </div>
        <div className="flex justify-between items-center">
          <div className="typo-copy-normal text-gray-400 max-w-[670px]">
            {t("PAGES.HOME_PAGE.PROCESS.SUBTITLE", {
              processSubtitle: data.uberschrift?.text,
            })}
          </div>
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
      {data.cards?.length && (
        <>
          <div className="embla_nowrap pt-6 pb-4 medium:pt-10 medium:pb-0">
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
                            src={
                              `${serverBaseUrl?.replace("/api", "")}${val?.icon
                                ?.data?.attributes?.url}` || ""
                            }
                            width={24}
                          />
                        </div>
                        <div className="typo-h5">
                          {t("PAGES.HOME_PAGE.PROCESS.LIST.TITLE", {
                            listTitle: val?.ueberschrift,
                          })}
                        </div>
                      </div>
                      <div className="typo-copy-normal text-gray-400">
                        {t("PAGES.HOME_PAGE.PROCESS.LIST.DESCRIPTION", {
                          listDesc: val?.text,
                        })}
                      </div>
                    </div>
                  </div>
                  // <div className="embla__slide" key={index}>
                  //   <div className="flex flex-col h-full justify-between rounded-3xl border border-gray-200 px-6 py-12">
                  //     <div className="typo-copy-normal text-gray-400">
                  //       {val?.text}
                  //     </div>
                  //     <div className="flex items-center mt-6">
                  //       <div className="flex p-3 mr-3 rounded-full border border-gray-200">
                  //         {val?.icon?.data?.attributes?.url ? (
                  //           <Image
                  //             alt="icon-horizontal"
                  //             height={48}
                  //             src={
                  //               `${serverBaseUrl}${val?.icon?.data?.attributes?.url}` ||
                  //               ""
                  //             }
                  //             width={48}
                  //           />
                  //         ) : null}
                  //       </div>
                  //       <div className="typo-h4">{val?.ueberschrift}</div>
                  //     </div>
                  //   </div>
                  // </div>
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
