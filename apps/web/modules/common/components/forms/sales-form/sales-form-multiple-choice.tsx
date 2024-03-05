/* eslint-disable @typescript-eslint/ban-types -- disable ban types */
import React, { useEffect, useState } from "react";
import compact from "lodash/compact";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Button from "../../button";
import RenderHtml from "../../render-html";
import type {
  ComponentFormMultipleChoice,
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

interface MultipleChoiceCheckProps {
  id?: string | null;
  answer?: string | null;
  email?: string | null;
  checked: boolean;
}

const SalesFormMultipleChoice = ({
  formValue,
  scrollNext,
  scrollPrev,
  formIdx,
}: FormProps) => {
  const { t } = useTranslation("common");
  const multipleChoiceFormValue = formValue as ComponentFormMultipleChoice;
  const [multipleChoiceCheckValue, setMultipleChoiceCheckValue] = useState<
    MultipleChoiceCheckProps[]
  >([
    {
      id: null,
      answer: null,
      email: null,
      checked: false,
    },
  ]);
  const [disabledBtn, setDisabledBtn] = useState<Boolean>(false);
  const { formData, setSharedFormData } = useData();

  useEffect(() => {
    const multipleChoiceCheck: MultipleChoiceCheckProps[] = [];
    multipleChoiceFormValue.moeglichkeit?.forEach((val) => {
      multipleChoiceCheck.push({
        id: val?.id,
        answer: val?.antwort,
        email: val?.overwrite_email,
        checked: false,
      });
    });
    setMultipleChoiceCheckValue(multipleChoiceCheck);
  }, [multipleChoiceFormValue.moeglichkeit]);

  const handleOnClickMultipleChoice = (
    e: React.MouseEvent<HTMLDivElement>,
    idx: number
  ) => {
    e.preventDefault();
    const _allChoices = [...multipleChoiceCheckValue];
    _allChoices[idx].checked = !_allChoices[idx].checked;
    const findChecked = compact(
      _allChoices.map((choiceVal) => choiceVal.checked)
    );

    const spreadOutFromData = [...formData];
    spreadOutFromData[formIdx].formDataValue[idx].checked =
      !spreadOutFromData[formIdx].formDataValue[idx].checked;
    setSharedFormData(spreadOutFromData);

    setDisabledBtn(Boolean(findChecked.length));
    setMultipleChoiceCheckValue(_allChoices);
  };

  return (
    <div>
      <div className="flex mb-10">
        <div className="mr-3">{formIdx + 1}.</div>
        <RenderHtml html={multipleChoiceFormValue.frage || ""} />
      </div>
      <div className="grid medium:grid-cols-2 gap-4 medium:gap-5">
        {multipleChoiceFormValue.moeglichkeit?.length &&
          multipleChoiceFormValue.moeglichkeit.map((val, idx) => (
            <div
              aria-hidden
              className={`${
                !multipleChoiceCheckValue[idx]?.checked
                  ? "bg-gray-900/20 border-primary-200"
                  : "bg-gray-700/70 border-gray-400 hover:border-primary-200"
              } group transition-colors cursor-pointer rounded-2xl medium:rounded-3xl px-6 py-12 medium:px-8 border`}
              key={idx}
              onClick={(e) => {
                handleOnClickMultipleChoice(e, idx);
              }}
              role="button"
            >
              <div className="flex justify-start items-center mb-4.5 medium:mb-6">
                <Image
                  alt={
                    val?.icon?.data?.attributes?.alternativeText ??
                    "ic_footer_form"
                  }
                  className="w-5"
                  height="0"
                  sizes="100%"
                  src={val?.icon?.data?.attributes?.url ?? ""}
                  width="0"
                />
                <div
                  className={`${
                    !multipleChoiceCheckValue[idx]?.checked
                      ? "text-white"
                      : "text-white group-hover:text-white"
                  } transition-colors ml-3 typo-h5`}
                >
                  {val?.icon?.data?.attributes?.caption}
                </div>
              </div>
              <RenderHtml
                className={`${
                  !multipleChoiceCheckValue[idx]?.checked
                    ? "text-primary-100"
                    : "text-gray-100 group-hover:text-gray-200"
                } transition-colors text-start leading-6.5`}
                html={val?.antwort || ""}
              />
            </div>
          ))}
      </div>
      <div className="flex justify-center mt-10 gap-4">
        {formIdx !== 0 && (
          <Button
            onMouseClick={(e: MouseEvent) => scrollPrev(e)}
            size="medium"
            typebtn="event"
            variant={Enum_Componentutilsbutton_Variante.Secondary}
            width="w-fit"
          >
            {/* <span>{t("FORM_BUTTON.BACK")}</span> */}
            Zurück
          </Button>
        )}
        <Button
          disabled={multipleChoiceFormValue.notwendig ? !disabledBtn : false}
          onMouseClick={(e: MouseEvent) => scrollNext(e)}
          size="medium"
          typebtn="event"
          variant={Enum_Componentutilsbutton_Variante.Secondary}
          width="w-fit"
        >
          <span>
            {formData.length - 1 === formIdx
              ? // ? t("FORM_BUTTON.SUBMIT")
                // : t("FORM_BUTTON.NEXT")}
                "Absenden"
              : "Weiter"}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default SalesFormMultipleChoice;
