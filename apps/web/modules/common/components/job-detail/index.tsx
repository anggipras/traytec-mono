import React from "react";
// import Image from "next/image";
// import { clsx } from "clsx";
import RenderHtml from "../render-html";
import Button from "@/modules/common/components/button";
import type { JobEntity } from "@/generated/graphql";
import {
  Enum_Componentutilsbutton_Variante,
  Enum_Job_Art,
} from "@/generated/graphql";
import { convertISOStringToCustomFormat } from "@/lib/util/date";

interface JobDetailProps {
  data: JobEntity;
}

const JobDetail = ({ data }: JobDetailProps) => {
  // const appCardIcon = (property: string, val: string) => {
  //   if (property === "job_position") {
  //     return require("@/assets/images/icons/ic_clock.svg");
  //   } else if (property === "salary") {
  //     return require("@/assets/images/icons/ic_dollar.svg");
  //   } else if (property === "vacant") {
  //     if (val === "open") {
  //       return require("@/assets/images/icons/ic_check_green.svg");
  //     }
  //     return require("@/assets/images/icons/ic_close.svg");
  //   }
  // };

  return (
    <div className="flex flex-col medium:flex-row justify-between mx-6 my-10 medium:mx-15 medium:mt-10 medium:mb-32.5 gap-20 medium:gap-5">
      <div className="flex flex-col w-full">
        <div className="typo-h2 mb-3 medium:mb-5">{data.attributes?.titel}</div>
        {/* <div className="flex gap-5 my-6 medium:my-5">
            {Object.entries(props.detail).map(([property, val]) => (
              <div className="flex items-center" key={property}>
                <div>
                  <Image
                    alt="ic-career-detail-card"
                    className="w-full h-full"
                    src={appCardIcon(property, val)}
                  />
                </div>
                <div className="typo-copy-normal text-gray-500 capitalize ml-2">
                  {val}
                </div>
              </div>
            ))}
          </div> */}
        {data.attributes ? (
          <div className="typo-copy-normal text-gray-500">
            {convertISOStringToCustomFormat(data.attributes?.publishedAt)}
          </div>
        ) : null}
        <div className="border border-gray-100 w-full my-6" />
        <RenderHtml
          className="text-gray-400"
          html={data.attributes?.beschreibung || ""}
        />
      </div>
      <div className="flex flex-col px-10 py-6 bg-gray-50 rounded-3xl w-full medium:max-w-lg h-fit">
        <div className="typo-h4">
          Interested to{" "}
          {data.attributes?.art === Enum_Job_Art.Ausbildung ? "intern" : "work"}{" "}
          with us ?
        </div>
        <div className="typo-copy-normal text-gray-400 mt-4 mb-6">
          provide your complete application documents and click apply
        </div>
        <Button
          size="small"
          variant={Enum_Componentutilsbutton_Variante.Secondary}
          width="w-full"
        >
          <span>Apply Now</span>
        </Button>
      </div>
    </div>
  );
};

export default JobDetail;
