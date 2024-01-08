/* eslint-disable no-nested-ternary -- disable nested ternary on jsx */
/* eslint-disable @typescript-eslint/ban-types -- disable ban types */
import React, { useEffect, useState } from "react";
import Button from "../../button";
import type {
  ComponentFormDatumUhrzeit,
  ComponentFormLongText,
  ComponentFormTextForm,
  FormularFragenDynamicZone,
  Maybe,
} from "@/generated/graphql";
import { Enum_Componentutilsbutton_Variante } from "@/generated/graphql";
import { useData } from "@/lib/hooks/use-data-context";

interface FormProps {
  formValue?: Maybe<FormularFragenDynamicZone>;
  scrollNext: Function;
  scrollPrev: Function;
  formIdx: number;
}

const SalesFormInput = ({
  formValue,
  scrollNext,
  scrollPrev,
  formIdx,
}: FormProps) => {
  const __typename = formValue?.__typename;
  const [formInputValue, setFormInputValue] = useState<string>("");
  const [reqField, setReqField] = useState(false);
  const { formData, setSharedFormData } = useData();

  useEffect(() => {
    if (__typename === "ComponentFormTextForm") {
      const textShortFormValue = formValue as ComponentFormTextForm;
      setReqField(textShortFormValue.notwendig || false);
    } else if (__typename === "ComponentFormLongText") {
      const textLongFormValue = formValue as ComponentFormLongText;
      setReqField(textLongFormValue.notwendig || false);
    } else if (
      __typename === "ComponentFormDatumUhrzeit" ||
      __typename === "ComponentFormDatum" ||
      __typename === "ComponentFormUhrzeit"
    ) {
      const dateTimeFormValue = formValue as ComponentFormDatumUhrzeit;
      setReqField(dateTimeFormValue.notwendig || false);
    }
  }, [__typename, formValue]);

  const setFormValue = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormInputValue(e.target.value);
    const spreadOutFromData = [...formData];
    spreadOutFromData[formIdx].formDataValue = e.target.value;
    setSharedFormData(spreadOutFromData);
  };

  const formInputComponent = () => {
    if (__typename === "ComponentFormTextForm") {
      const textShortFormValue = formValue as ComponentFormTextForm;
      return (
        <>
          <div className="mb-6">{textShortFormValue.frage}</div>
          <div className="relative w-full">
            {!textShortFormValue.notwendig ? (
              <div className="typo-copy-normal text-gray-400 text-start">
                Optional
              </div>
            ) : null}
            <input
              className="peer h-full w-full border-b border-gray-400 bg-transparent py-4 text-white outline outline-0 transition-all placeholder-shown:border-gray-400 focus:border-white focus:outline-0"
              onChange={(e) => {
                setFormValue(e);
              }}
              placeholder={textShortFormValue.frage || ""}
            />
          </div>
        </>
      );
    } else if (__typename === "ComponentFormLongText") {
      const textLongFormValue = formValue as ComponentFormLongText;
      return (
        <>
          <div className="mb-6">{textLongFormValue.frage}</div>
          <div className="relative w-full">
            {!textLongFormValue.notwendig ? (
              <div className="typo-copy-normal text-gray-400 text-start">
                Optional
              </div>
            ) : null}
            <textarea
              className="h-full w-full border-b border-gray-400 bg-transparent py-4 text-white outline outline-0 transition-all focus:border-white focus-visible:ring-0"
              onChange={(e) => {
                setFormValue(e);
              }}
              placeholder={textLongFormValue.frage || ""}
              rows={10}
            />
          </div>
        </>
      );
    } else if (
      __typename === "ComponentFormDatumUhrzeit" ||
      __typename === "ComponentFormDatum" ||
      __typename === "ComponentFormUhrzeit"
    ) {
      const dateTimeFormValue = formValue as ComponentFormDatumUhrzeit;
      const getCurrentDateTime = () => new Date().toISOString().slice(0, -8);
      return (
        <>
          <div className="mb-6">{dateTimeFormValue.frage}</div>
          <div className="relative w-full">
            {!dateTimeFormValue.notwendig ? (
              <div className="typo-copy-normal text-gray-400 text-start">
                Optional
              </div>
            ) : null}
            <input
              className="text-black"
              id="dateTimePicker"
              min={getCurrentDateTime()}
              onChange={(e) => {
                setFormValue(e);
              }}
              type={
                __typename === "ComponentFormDatumUhrzeit"
                  ? "datetime-local"
                  : __typename === "ComponentFormUhrzeit"
                    ? "time"
                    : "date"
              }
              value={formInputValue}
            />
            <div>{formInputValue}</div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="flex flex-col items-start">
      {formInputComponent()}
      <div className="flex justify-end mt-6 w-full gap-4">
        <Button
          onMouseClick={(e: MouseEvent) => scrollPrev(e)}
          size="medium"
          typebtn="event"
          variant={Enum_Componentutilsbutton_Variante.Secondary}
          width="w-fit"
        >
          <span>Back</span>
        </Button>
        <Button
          disabled={
            formData.length - 1 === formIdx
              ? false
              : reqField
                ? !formInputValue
                : false
          }
          onMouseClick={(e: MouseEvent) => scrollNext(e)}
          size="medium"
          typebtn="event"
          variant={Enum_Componentutilsbutton_Variante.Secondary}
          width="w-fit"
        >
          <span>{formData.length - 1 === formIdx ? "Submit" : "Continue"}</span>
        </Button>
      </div>
    </div>
  );
};

export default SalesFormInput;
