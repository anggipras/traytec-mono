/* eslint-disable react-hooks/exhaustive-deps -- disable form exhaustive deps on lifecylce */
import React, { useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import SalesFormContainer from "./sales-form-container";
import type { FormularEntityResponseCollection } from "@/generated/graphql";
import { useData } from "@/lib/hooks/use-data-context";

interface SalesFormProps {
  salesform: FormularEntityResponseCollection;
}

interface MultipleChoiceCheckProps {
  id?: string | null;
  answer?: string | null;
  checked: boolean;
}

const SalesForm = ({ salesform }: SalesFormProps) => {
  const { formData, setSharedFormData } = useData();

  useEffect(() => {
    const fragenData: {
      _typename: string | undefined;
      formDataValue: any;
    }[] = [];
    salesform.data[0].attributes?.Fragen.forEach((valFrage) => {
      if (valFrage?.__typename === "ComponentFormMultipleChoice") {
        const formMultipleChoiceData: MultipleChoiceCheckProps[] = [];
        valFrage.moeglichkeit?.forEach((valFrageData) => {
          formMultipleChoiceData.push({
            id: valFrageData?.id,
            answer: valFrageData?.antwort,
            checked: false,
          });
        });
        fragenData.push({
          _typename: valFrage?.__typename,
          formDataValue: formMultipleChoiceData,
        });
      } else if (
        valFrage?.__typename === "ComponentFormTextForm" ||
        valFrage?.__typename === "ComponentFormLongText" ||
        valFrage?.__typename === "ComponentFormDatumUhrzeit" ||
        valFrage?.__typename === "ComponentFormDatum" ||
        valFrage?.__typename === "ComponentFormUhrzeit"
      ) {
        fragenData.push({
          _typename: valFrage?.__typename,
          formDataValue: "",
        });
      }
    });
    setSharedFormData(fragenData);
  }, [salesform.data]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
  });
  const scrollPrev = useCallback(() => {
    if (emblaApi && emblaApi.canScrollPrev()) {
      emblaApi.scrollPrev();
    }
    scrollIntoTop();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi && emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
    } else {
      console.log("submitData", formData);
    }
    scrollIntoTop();
  }, [emblaApi]);

  const scrollIntoTop = () => {
    const inquiryElement = document.getElementById("sales-form-id");
    if (inquiryElement)
      inquiryElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

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
      <div className="mx-auto max-w-desktop w-full" id="sales-form-id">
        <div className="text-white z-10">
          <div className="flex flex-col m-auto items-center text-center max-w-[874px] px-6 pt-10 medium:pt-15">
            <div className="typo-h2 mb-4 medium:mb-5">
              {salesform.data[0].attributes?.ueberschrift?.heading}
            </div>
            <div className="typo-copy-normal">
              {salesform.data[0].attributes?.ueberschrift?.text}
            </div>
          </div>
          <div className="m-auto max-w-[874px] px-6 py-10 medium:py-15">
            <div className="embla_main">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  {salesform.data[0].attributes?.Fragen.map((val, idx) => (
                    <div className="embla__slide" key={idx}>
                      <SalesFormContainer
                        formIdx={idx}
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
