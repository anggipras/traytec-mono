import React from "react";
import RenderHtml from "../render-html";
import type { ComponentUtilsText, Maybe, Scalars } from "@/generated/graphql";

interface ComponentProps {
  data: ComponentUtilsText;
}

interface ComponentGeneralText {
  __typename?: "ComponentUtilsText";
  id: Scalars["ID"];
  text_content?: Maybe<string>;
}

const GeneralContent = ({ data }: ComponentProps) => {
  const mappedUtilsTextData: ComponentGeneralText = {
    ...data,
  };

  return (
    <RenderHtml
      className="px-6 py-10 medium:pt-32.5"
      html={mappedUtilsTextData.text_content || ""}
    />
  );
};

export default GeneralContent;
