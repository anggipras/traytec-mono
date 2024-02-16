/* eslint-disable @typescript-eslint/no-redundant-type-constituents -- disable redundant type constituents */
/* eslint-disable no-nested-ternary -- disable nested ternary on jsx */
/* eslint-disable @typescript-eslint/ban-types -- disable ban types */
import React, { useState } from "react";
import Button from "../../button";
import RenderHtml from "../../render-html";
import type {
  ComponentFormDaten,
  ComponentFormDatum,
  ComponentFormDatumUhrzeit,
  ComponentFormLongText,
  ComponentFormTextForm,
  ComponentFormUhrzeit,
} from "@/generated/graphql";
import { Enum_Componentutilsbutton_Variante } from "@/generated/graphql";
import { useData } from "@/lib/hooks/use-data-context";

interface FormProps {
  formValue?:
    | ComponentFormDatum
    | ComponentFormDatumUhrzeit
    | ComponentFormLongText
    | ComponentFormTextForm
    | ComponentFormUhrzeit
    | ComponentFormDaten
    | null
    | undefined;
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
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const reqField = formValue?.notwendig || false;
  const { formData, setSharedFormData } = useData();

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

  const setInputFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
    const spreadOutFromData = [...formData];
    spreadOutFromData[formIdx].formDataValue = e.target.files;
    setSharedFormData(spreadOutFromData);
  };

  const renderFormInputType = () => {
    if (__typename === "ComponentFormTextForm") {
      return (
        <input
          className="peer h-full w-full border-b border-gray-400 bg-transparent py-4 text-white outline outline-0 transition-all placeholder-shown:border-gray-400 focus:border-white focus:outline-0"
          onChange={(e) => {
            setFormValue(e);
          }}
        />
      );
    } else if (__typename === "ComponentFormLongText") {
      return (
        <textarea
          className="h-full w-full border-b border-gray-400 bg-transparent py-4 text-white outline outline-0 transition-all focus:border-white focus-visible:ring-0"
          onChange={(e) => {
            setFormValue(e);
          }}
          rows={10}
        />
      );
    } else if (__typename === "ComponentFormDaten") {
      return (
        <input
          className="block mt-2 w-fit text-sm text-white
          file:mr-4 file:py-2 file:px-4 file:rounded-md
          file:border-0 file:text-sm file:font-semibold
          file:bg-primary-50 file:text-primary-900
          hover:file:bg-primary-100 hover:file:cursor-pointer"
          id="multiple_files"
          multiple
          onChange={(e) => {
            setInputFiles(e);
          }}
          type="file"
        />
      );
    }
    return (
      <input
        className="text-black"
        id="dateTimePicker"
        min={new Date().toISOString().slice(0, -8)}
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
    );
  };

  const formInputComponent = () => {
    return (
      <>
        <div className="flex">
          <div className="mr-3">{formIdx + 1}.</div>
          <RenderHtml className="mb-6" html={formValue?.frage} />
        </div>
        <div className="relative w-full">
          {!formValue?.notwendig && (
            <div className="typo-copy-normal text-gray-400 text-start">
              Optional
            </div>
          )}
          {renderFormInputType()}
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-col items-start">
      {formInputComponent()}
      <div className="flex justify-end mt-6 w-full gap-4">
        {formIdx !== 0 && (
          <Button
            onMouseClick={(e: MouseEvent) => scrollPrev(e)}
            size="medium"
            typebtn="event"
            variant={Enum_Componentutilsbutton_Variante.Secondary}
            width="w-fit"
          >
            <span>Back</span>
          </Button>
        )}
        <Button
          disabled={
            formData.length - 1 === formIdx
              ? false
              : reqField
                ? selectedFiles
                  ? !(selectedFiles.length > 0)
                  : !formInputValue
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
