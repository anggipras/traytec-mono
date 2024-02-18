/* eslint-disable no-nested-ternary -- disable no nested ternary */
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
    "flex flex-col relative items-center justify-center z-10":
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
            {data.bild?.data && (
              <div className="mb-6 w-15 medium:w-24">
                <Image
                  alt="ic_minimalist_header"
                  className="w-full h-full"
                  height="0"
                  sizes="100%"
                  src={data.bild?.data?.attributes?.url ?? ""}
                  width="0"
                />
              </div>
            )}
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
          {data.bild?.data &&
          data.ausrichtung ===
            Enum_Componentheadingsheadingminimalistisch_Ausrichtung.Zentriert ? (
            <>
              <div className="absolute top-0 bottom-0 -right-32 medium:right-0 medium:bottom-auto">
                <Image
                  alt="bg_subheader"
                  className="w-full h-full"
                  src={require("@/assets/images/common/img_bg_header_right.svg")}
                />
              </div>
              <div className="absolute top-0 bottom-0 -left-32 medium:left-0 medium:bottom-auto">
                <Image
                  alt="bg_subheader"
                  className="w-full h-full"
                  src={require("@/assets/images/common/img_bg_header_left.svg")}
                />
              </div>
            </>
          ) : data.dekoration_anzeigen ? (
            <div className="absolute top-0 -bottom-20 medium:-bottom-40 -right-10 medium:right-0">
              <Image
                alt="bg_subheader"
                className="w-full h-full"
                src={require("@/assets/images/common/img_bg_header_right.svg")}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
