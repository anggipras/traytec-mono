/* eslint-disable @typescript-eslint/ban-types -- test */
import React from "react";
import SalesFormMultipleChoice from "./sales-form-multiple-choice";
import SalesFormInput from "./sales-form-input";
import type {
  ComponentUtilsFormButton,
  FormularFragenDynamicZone,
  Maybe,
} from "@/generated/graphql";

interface StepFormProps {
  formBtn?: Maybe<ComponentUtilsFormButton>;
  formValue?: Maybe<FormularFragenDynamicZone>;
  scrollPrev: Function;
  scrollNext: Function;
  formIdx: number;
}

const SalesFormContainer = ({
  formBtn,
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
        formBtn={formBtn}
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
        formBtn={formBtn}
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
