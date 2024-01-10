import Image from "next/image";
import React from "react";
import { clsx } from "clsx";
import RenderHtml from "../render-html";
import {
  Enum_Componentheadingsheadingminimalistisch_Ausrichtung,
  type ComponentHeadingsHeadingMinimalistisch,
} from "@/generated/graphql";

interface SubHeaderProps {
  data: ComponentHeadingsHeadingMinimalistisch;
}

const SubHeader: React.FC<SubHeaderProps> = ({ data }) => {
  const textAlignment = clsx({
    "text-center":
      data.ausrichtung ===
      Enum_Componentheadingsheadingminimalistisch_Ausrichtung.Zentriert,
    "text-start":
      data.ausrichtung ===
      Enum_Componentheadingsheadingminimalistisch_Ausrichtung.Links,
  });

  const flexAlignment = clsx({
    "flex flex-col items-center justify-center":
      data.ausrichtung ===
      Enum_Componentheadingsheadingminimalistisch_Ausrichtung.Zentriert,
    "flex flex-col":
      data.ausrichtung ===
      Enum_Componentheadingsheadingminimalistisch_Ausrichtung.Links,
  });

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-desktop w-full">
        <div className="relative px-6 py-10 medium:p-15 w-full overflow-hidden">
          <div className={clsx(flexAlignment)}>
            <div className={clsx("typo-h2", textAlignment)}>{data.titel}</div>
            <div
              className={clsx(
                "text-gray-400 mt-5 medium:max-w-4xl",
                textAlignment
              )}
            >
              <RenderHtml html={data.beschreibung || ""} />
            </div>
          </div>
          {data.dekoration_anzeigen ? (
            <div className="absolute top-0 bottom-0 -right-10 medium:right-0">
              <Image
                alt="bg_subheader"
                className="w-full h-full"
                src={require("@/assets/images/common/img_bg_subheader.svg")}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
