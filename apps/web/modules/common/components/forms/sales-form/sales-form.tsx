/* eslint-disable react-hooks/exhaustive-deps -- disable form exhaustive deps on lifecycle */
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import RenderHtml from "../../render-html";
import CircleStep from "../../step/circle";
import SalesFormContainer from "./sales-form-container";
import type {
  ComponentIntegrationenFormular,
  Formular,
} from "@/generated/graphql";
import { useData } from "@/lib/hooks/use-data-context";

interface SalesFormProps {
  salesform: ComponentIntegrationenFormular;
}

interface MultipleChoiceCheckProps {
  id?: string | null;
  answer?: string | null;
  email?: string | null;
  checked: boolean;
}

interface FormStep {
  status: "complete" | "current" | "upcoming";
}

const SalesForm = ({ salesform }: SalesFormProps) => {
  const { formData, setSharedFormData } = useData();
  const [stepQ, setStepQ] = useState<FormStep[]>();
  const formResponseData = salesform.formular?.data?.attributes as Formular;

  useEffect(() => {
    const fragenData: {
      _typename: string | undefined;
      formDataValue: any;
    }[] = [];
    const formStep: FormStep[] = [];
    formResponseData.Fragen.forEach((valFrage, idx) => {
      if (valFrage?.__typename === "ComponentFormMultipleChoice") {
        const formMultipleChoiceData: MultipleChoiceCheckProps[] = [];
        valFrage.moeglichkeit?.forEach((valFrageData) => {
          formMultipleChoiceData.push({
            id: valFrageData?.id,
            answer: valFrageData?.antwort,
            email: valFrageData?.overwrite_email,
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
      if (idx === 0) {
        formStep.push({ status: "current" });
      } else {
        formStep.push({ status: "upcoming" });
      }
    });
    setStepQ(formStep);
    setSharedFormData(fragenData);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    watchDrag: false,
  });
  const scrollPrev = useCallback(() => {
    if (emblaApi && emblaApi.canScrollPrev()) {
      emblaApi.scrollPrev();
      if (stepQ?.length) {
        const stepFormData = [...stepQ];
        stepFormData[emblaApi.selectedScrollSnap()].status = "current";
        stepFormData[emblaApi.selectedScrollSnap() + 1].status = "upcoming";
        setStepQ(stepFormData);
      }
    }
    scrollIntoTop();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi && emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
      if (stepQ?.length) {
        const stepFormData = [...stepQ];
        stepFormData[emblaApi.selectedScrollSnap() - 1].status = "complete";
        setStepQ(stepFormData);
      }
    } else {
      console.log("submitData", formData);
    }
    scrollIntoTop();
  }, [emblaApi]);

  const scrollIntoTop = () => {
    const inquiryElement = document.getElementById(
      `#${salesform.formular?.data?.attributes?.titel
        ?.toLowerCase()
        .replace(" ", "-")}`
    );
    if (inquiryElement)
      inquiryElement.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div
      className="relative bg-primary-900 medium:mb-[-135px] medium:mt-32.5"
      id={`#${salesform.formular?.data?.attributes?.titel
        ?.toLowerCase()
        .replace(" ", "-")}`}
    >
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
      <div className="mx-auto w-full">
        <div className="pt-10">
          <CircleStep data={stepQ} />
        </div>
        <div className="text-white z-10">
          {formResponseData.ueberschrift && (
            <div className="flex flex-col m-auto items-center text-center max-w-3xl px-6 pt-10 medium:pt-15">
              {formResponseData.ueberschrift?.heading && (
                <div className="typo-h2 mb-4 medium:mb-5">
                  {formResponseData.ueberschrift?.heading}
                </div>
              )}
              {formResponseData.ueberschrift?.text && (
                <RenderHtml html={formResponseData.ueberschrift?.text || ""} />
              )}
            </div>
          )}
          <div className="m-auto px-6 py-10 medium:py-15">
            <div className="embla_main">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  {formResponseData.Fragen.map((val, idx) => (
                    <div className="embla__slide" key={idx}>
                      <div className="mx-auto max-w-3xl">
                        <SalesFormContainer
                          formIdx={idx}
                          formValue={val}
                          scrollNext={scrollNext}
                          scrollPrev={scrollPrev}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-desktop w-full">
            <hr className="text-white h-2 mx-6 medium:mx-15" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesForm;
