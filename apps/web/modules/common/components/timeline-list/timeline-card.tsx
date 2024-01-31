/* eslint-disable @typescript-eslint/no-redundant-type-constituents -- disable redundant type constituents*/
import Image from "next/image";
import React, { useRef } from "react";
import RenderHtml from "../render-html";
import { useIntersectionObs } from "@/lib/hooks/use-intersection-obs";
import { serverBaseUrl } from "@/client.config";
import type { ComponentUtilsTimelineKarte } from "@/generated/graphql";
import { formatDate } from "@/lib/util/date";

interface TimelineCardProps {
  data: ComponentUtilsTimelineKarte | null;
  idxprops: number;
}

const TimelineCard = ({ data, idxprops }: TimelineCardProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObs(timelineRef);
  if (isIntersecting) {
    if (idxprops % 2 === 0) {
      timelineRef.current?.classList.remove("translate-x-[1rem]");
    } else {
      timelineRef.current?.classList.remove("translate-x-[-1rem]");
    }
    timelineRef.current?.classList.add(
      "translate-x-0",
      "opacity-100",
      "duration-1000"
    );
  }
  return (
    <div
      className={`rounded-3xl border border-gray-200 overflow-hidden w-full opacity-0 ${idxprops % 2 === 0 ? "translate-x-[1rem]" : "translate-x-[-1rem]"}`}
      ref={timelineRef}
    >
      {data?.media && (
        <div className="overflow-hidden max-h-[150px] w-full">
          <Image
            alt="company_milestone"
            className="w-full"
            height="0"
            sizes="100%"
            src={
              data?.media?.data?.attributes?.url
                ? `${serverBaseUrl?.replace("/api", "")}${
                    data?.media?.data?.attributes?.url
                  }`
                : ""
            }
            style={{ objectFit: "cover", objectPosition: "center" }}
            width="0"
          />
        </div>
      )}
      <div className="p-4 medium:p-6">
        {data?.zeitpunkt && (
          <div className="typo-copy-normal text-gray-400">
            {formatDate(data?.zeitpunkt)}
          </div>
        )}
        <div className="mt-4 mb-4 typo-h4">{data?.titel}</div>
        <RenderHtml className="text-gray-400" html={data?.beschreibung || ""} />
      </div>
    </div>
  );
};

export default TimelineCard;
