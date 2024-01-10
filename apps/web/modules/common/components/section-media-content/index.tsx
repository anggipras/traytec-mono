import { clsx } from "clsx";
import Image from "next/image";
import React from "react";
import RenderHtml from "../render-html";
import {
  Enum_Componentutilsheading_Typ,
  type ComponentSektionenInhaltMitMedia,
} from "@/generated/graphql";
import { serverBaseUrl } from "@/client.config";

interface SectionContentMediaProps {
  data: ComponentSektionenInhaltMitMedia;
}

const SectionContentMedia = ({ data }: SectionContentMediaProps) => {
  const titleClass = clsx({
    "typo-h2": data.ueberschrift?.typ === Enum_Componentutilsheading_Typ.H1,
    "typo-h4": data.ueberschrift?.typ === Enum_Componentutilsheading_Typ.H2,
  });

  return (
    <div className="flex flex-col medium:flex-row px-6 medium:px-15 py-10 medium:pb-0 medium:pt-20 justify-between items-center w-full gap-6 medium:gap-16">
      <div className="max-w-2xl w-full max-medium:text-center">
        <div className={clsx("mb-5", titleClass)}>
          {data.ueberschrift?.heading}
        </div>
        {data.ueberschrift?.text && (
          <RenderHtml
            className="text-gray-400 medium:text-justify"
            html={data.ueberschrift?.text || ""}
          />
        )}
      </div>
      {data.media.data ? (
        <div className="relative w-full">
          <div className="absolute top-0 bottom-0 bg-gray-200 rounded-3xl -rotate-3 w-full" />
          <div className="absolute top-0 bottom-0 bg-gray-200 rounded-3xl rotate-3 w-full" />
          <div className="relative">
            <Image
              alt="img_description_heading"
              className="w-full rounded-3xl"
              height="0"
              sizes="100%"
              src={
                data.media.data?.attributes?.url
                  ? `${serverBaseUrl?.replace("/api", "")}${data.media.data
                      ?.attributes?.url}`
                  : ""
              }
              width="0"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SectionContentMedia;
