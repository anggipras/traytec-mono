import React from "react";
import { useTranslation } from "next-i18next";
import type { Maybe } from "graphql/jsutils/Maybe";
import RenderHtml from "../render-html";

interface SectionHeaderProps {
  intro?: Maybe<string>;
  title: Maybe<string>;
  desc?: Maybe<string>;
}

const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center mx-auto">
      {props.intro && (
        <div className="w-fit px-3.5 py-2 mb-4 bg-pink-100 rounded-full text-rose-800">
          {t("COMPONENTS.SECTION_HEADING.INTRO", {
            sectionHeadingIntro: props.intro,
          })}
        </div>
      )}
      <div className="typo-h2 px-6 medium:px-0 text-center">
        {t("COMPONENTS.SECTION_HEADING.TITLE", {
          sectionHeadingTitle: props.title,
        })}
      </div>
      {props.desc && (
        <RenderHtml
          className="max-w-2xl mt-5 text-gray-400 px-6 medium:px-0 text-center"
          html={props.desc || ""}
        />
      )}
    </div>
  );
};

export default SectionHeader;
