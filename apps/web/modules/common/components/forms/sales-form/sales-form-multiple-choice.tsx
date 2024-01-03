/* eslint-disable @typescript-eslint/ban-types -- disable ban types */
import React, { useEffect, useState } from "react";
import Button from "../../button";
import type {
  ComponentFormMultipleChoice,
  FormularFragenDynamicZone,
  Maybe,
} from "@/generated/graphql";
import { Enum_Componentutilsbutton_Variante } from "@/generated/graphql";

interface FormProps {
  formValue?: Maybe<FormularFragenDynamicZone>;
  scrollNext: Function;
}

interface MultipleChoiceCheckProps {
  id?: string | null;
  answer?: string | null;
  checked: boolean;
}

const SalesFormMultipleChoice = ({ formValue, scrollNext }: FormProps) => {
  const multipleChoiceFormValue = formValue as ComponentFormMultipleChoice;
  const [multipleChoiceCheckValue, setMultipleChoiceCheckValue] = useState<
    MultipleChoiceCheckProps[]
  >([
    {
      id: null,
      answer: null,
      checked: false,
    },
  ]);

  useEffect(() => {
    const multipleChoiceCheck: MultipleChoiceCheckProps[] = [];
    multipleChoiceFormValue.moeglichkeit?.forEach((val) => {
      multipleChoiceCheck.push({
        id: val?.id,
        answer: val?.antwort,
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
    setMultipleChoiceCheckValue(_allChoices);
  };

  return (
    <>
      <div className="grid medium:grid-cols-2 gap-4 medium:gap-5">
        {multipleChoiceFormValue.moeglichkeit?.length
          ? multipleChoiceFormValue.moeglichkeit.map((val, idx) => (
              <div
                aria-hidden
                className={`${
                  multipleChoiceCheckValue[idx]?.checked
                    ? "bg-primary-800"
                    : "bg-primary-950"
                } cursor-pointer rounded-2xl medium:rounded-3xl px-6 py-12 medium:px-8 medium:py-20`}
                key={idx}
                onClick={(e) => {
                  handleOnClickMultipleChoice(e, idx);
                }}
                role="button"
              >
                {/* <div className="flex justify-start items-center mb-4.5 medium:mb-6">
                  <Image
                    alt="footer_selection"
                    className="w-12 mr-3"
                    src={val.icon}
                  />
                  <div className="typo-h5">{val.title}</div>
                </div> */}
                <div className="text-start typo-copy-normal leading-6.5">
                  {val?.antwort}
                </div>
              </div>
            ))
          : null}
      </div>
      <div className="flex justify-center mt-10">
        <Button
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
};

export default SalesFormMultipleChoice;
