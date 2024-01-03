/* eslint-disable no-nested-ternary -- disable nested ternary on jsx */
/* eslint-disable @typescript-eslint/ban-types -- disable ban types */
import React, { useState } from "react";
import Button from "../../button";
import type {
  ComponentFormDatumUhrzeit,
  ComponentFormLongText,
  ComponentFormTextForm,
  FormularFragenDynamicZone,
  Maybe,
} from "@/generated/graphql";
import { Enum_Componentutilsbutton_Variante } from "@/generated/graphql";

interface FormProps {
  formValue?: Maybe<FormularFragenDynamicZone>;
  scrollNext: Function;
}

const SalesFormInput = ({ formValue, scrollNext }: FormProps) => {
  const __typename = formValue?.__typename;
  const [formInputValue, setFormInputValue] = useState<string>();
  const [selectedDateTime, setSelectedDateTime] = useState<string>("");

  const formInputComponent = () => {
    if (__typename === "ComponentFormLongText") {
      const textShortFormValue = formValue as ComponentFormLongText;

      const setFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormInputValue(e.target.value);
      };

      return (
        <>
          <div className="mb-6">{textShortFormValue.frage}</div>
          <div className="relative w-full mt-6">
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
          <div className="flex justify-end mt-6 w-full">
            <Button
              disabled={textShortFormValue.notwendig ? !formInputValue : false}
              onMouseClick={(e: MouseEvent) => scrollNext(e)}
              size="medium"
              typebtn="event"
              variant={Enum_Componentutilsbutton_Variante.Secondary}
              width="w-fit"
            >
              <span>Continue</span>
            </Button>
          </div>
        </>
      );
    } else if (__typename === "ComponentFormTextForm") {
      const textLongFormValue = formValue as ComponentFormTextForm;
      return (
        <>
          <div className="mb-6">{textLongFormValue.frage}</div>
          <div className="relative w-full mt-6">
            {!textLongFormValue.notwendig ? (
              <div className="typo-copy-normal text-gray-400 text-start">
                Optional
              </div>
            ) : null}
            <textarea
              className="h-full w-full border-b border-gray-400 bg-transparent py-4 text-white outline outline-0 transition-all focus:border-white focus-visible:ring-0"
              placeholder={textLongFormValue.frage || ""}
              rows={10}
            />
          </div>
          <div className="flex justify-end mt-6 w-full">
            <Button
              disabled={textLongFormValue.notwendig ? !formInputValue : false}
              onMouseClick={(e: MouseEvent) => scrollNext(e)}
              size="medium"
              typebtn="event"
              variant={Enum_Componentutilsbutton_Variante.Secondary}
              width="w-fit"
            >
              <span>Continue</span>
            </Button>
          </div>
        </>
      );
    } else if (
      __typename === "ComponentFormDatumUhrzeit" ||
      __typename === "ComponentFormDatum" ||
      __typename === "ComponentFormUhrzeit"
    ) {
      const dateTimeFormValue = formValue as ComponentFormDatumUhrzeit;
      const handleDateTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDateTime(e.target.value);
      };
      const getCurrentDateTime = () => new Date().toISOString().slice(0, -8);
      return (
        <>
          <div className="mb-6">{dateTimeFormValue.frage}</div>
          <div className="relative w-full mt-6">
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
                handleDateTimeChange(e);
              }}
              type={
                __typename === "ComponentFormDatumUhrzeit"
                  ? "datetime-local"
                  : __typename === "ComponentFormUhrzeit"
                    ? "time"
                    : "date"
              }
              value={selectedDateTime}
            />
            <div>{selectedDateTime}</div>
          </div>
          <div className="flex justify-end mt-6 w-full">
            <Button
              disabled={dateTimeFormValue.notwendig ? !selectedDateTime : false}
              onMouseClick={(e: MouseEvent) => scrollNext(e)}
              size="medium"
              typebtn="event"
              variant={Enum_Componentutilsbutton_Variante.Secondary}
              width="w-fit"
            >
              <span>Continue</span>
            </Button>
          </div>
        </>
      );
    }
  };

  return (
    <div className="flex flex-col items-start">{formInputComponent()}</div>
  );
};

export default SalesFormInput;
