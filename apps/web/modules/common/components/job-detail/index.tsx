import React from "react";
import Image from "next/image";
import RenderHtml from "../render-html";
import Button from "@/modules/common/components/button";
import type { JobEntity } from "@/generated/graphql";
import {
  Enum_Componentutilsbutton_Variante,
  Enum_Job_Art,
} from "@/generated/graphql";
import { convertISOStringToCustomFormat } from "@/lib/util/date";
import { serverBaseUrl } from "@/client.config";

interface JobDetailProps {
  data: JobEntity;
}

const JobDetail = ({ data }: JobDetailProps) => {
  return (
    <div className="flex flex-col medium:flex-row justify-between mx-6 my-10 medium:mx-15 medium:mt-10 medium:mb-32.5 gap-20 medium:gap-5">
      <div className="flex flex-col w-full">
        <div className="typo-h2 mb-3 medium:mb-5">{data.attributes?.titel}</div>
        {data.attributes?.badges?.length ? (
          <div className="flex gap-5 mb-6 medium:mb-5">
            {data.attributes.badges.map((badg, idx) => (
              <div className="flex items-center" key={idx}>
                <div>
                  <Image
                    alt="ic-job-detail"
                    className="w-full h-full"
                    height="0"
                    sizes="100%"
                    src={
                      badg?.icon?.data?.attributes?.url
                        ? `${serverBaseUrl?.replace("/api", "")}${badg?.icon
                            ?.data?.attributes?.url}`
                        : ""
                    }
                    width="0"
                  />
                </div>
                <div className="typo-copy-normal text-gray-500 capitalize ml-2">
                  {badg?.text}
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {data.attributes && (
          <div className="typo-copy-normal text-gray-500">
            {convertISOStringToCustomFormat(data.attributes?.publishedAt)}
          </div>
        )}
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
