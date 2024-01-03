/* eslint-disable @typescript-eslint/ban-types -- test */
import React from "react";
import SalesFormMultipleChoice from "./sales-form-multiple-choice";
import SalesFormInput from "./sales-form-input";
import {
  type FormularFragenDynamicZone,
  type Maybe,
} from "@/generated/graphql";

interface StepFormProps {
  formValue?: Maybe<FormularFragenDynamicZone>;
  scrollPrev: Function;
  scrollNext: Function;
}

const SalesFormContainer = ({
  formValue,
  //   scrollPrev,
  scrollNext,
}: StepFormProps) => {
  const __typename = formValue?.__typename;
  let item: React.ReactNode;
  if (__typename === "ComponentFormMultipleChoice") {
    item = (
      <SalesFormMultipleChoice formValue={formValue} scrollNext={scrollNext} />
    );
  } else if (
    __typename === "ComponentFormLongText" ||
    __typename === "ComponentFormDatumUhrzeit" ||
    __typename === "ComponentFormTextForm"
  ) {
    item = <SalesFormInput formValue={formValue} scrollNext={scrollNext} />;
  } else {
    console.log("No component found for: ", __typename);
    item = null;
  }
  //   switch (__typename) {
  //     case "ComponentFormMultipleChoice":
  //     case "ComponentFormLongText" | "ComponentFormDatumUhrzeit":
  //       item = (
  //         <SalesFormInput formValue={formValue} scrollNext={scrollNext} />
  //       );
  //       break;
  //     default:
  //       console.log("No component found for: ", __typename);
  //       return null;
  //   }

  return item;
};

export default SalesFormContainer;
