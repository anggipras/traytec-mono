/* eslint-disable @typescript-eslint/ban-types -- disable ban types */
import React from "react";
import dynamic from "next/dynamic";
import SalesFormMultipleChoice from "./sales-form-multiple-choice";
import type { FormularFragenDynamicZone, Maybe } from "@/generated/graphql";

const SalesFormInput = dynamic(() => import("./sales-form-input"), {
  ssr: false,
});

interface StepFormProps {
  formValue?: Maybe<FormularFragenDynamicZone>;
  scrollPrev: Function;
  scrollNext: Function;
  formIdx: number;
}

const SalesFormContainer = ({
  formValue,
  scrollPrev,
  scrollNext,
  formIdx,
}: StepFormProps) => {
  const __typename = formValue?.__typename;
  let item: React.ReactNode;
  if (__typename === "ComponentFormMultipleChoice") {
    item = (
      <SalesFormMultipleChoice
        formIdx={formIdx}
        formValue={formValue}
        scrollNext={scrollNext}
        scrollPrev={scrollPrev}
      />
    );
  } else if (
    __typename === "ComponentFormLongText" ||
    __typename === "ComponentFormDatumUhrzeit" ||
    __typename === "ComponentFormTextForm" ||
    __typename === "ComponentFormDatum" ||
    __typename === "ComponentFormUhrzeit" ||
    __typename === "ComponentFormDaten"
  ) {
    item = (
      <SalesFormInput
        formIdx={formIdx}
        formValue={formValue}
        scrollNext={scrollNext}
        scrollPrev={scrollPrev}
      />
    );
  } else {
    console.log("No component found for: ", __typename);
    item = null;
  }

  return item;
};

export default SalesFormContainer;
