import Image from "next/image";
import React from "react";
import SectionHeader from "@/modules/common/components/section-header";
import type { ComponentListenTimelineListe } from "@/generated/graphql";
import { serverBaseUrl } from "@/client.config";
import { formatDate } from "@/lib/util/date";

interface TimelineItemData {
  data: ComponentListenTimelineListe;
}

const TimelineList = ({ data }: TimelineItemData) => {
  const timelineItem = () =>
    data.timeline_karten?.map((dt, idx) => (
      <div
        className="flex justify-start medium:justify-end medium:pr-7 relative my-2.5 medium:w-1/2 medium:odd:self-end medium:odd:justify-start pl-7 medium:odd:pl-7 medium:odd:pr-0"
        key={idx}
      >
        <div className="flex flex-col items-end relative w-full text-right odd:text-left odd:items-start">
          <div className="rounded-3xl border border-gray-200 overflow-hidden w-full">
            {dt?.media ? (
              <div className="overflow-hidden max-h-[150px] w-full">
                <Image
                  alt="company_milestone"
                  className="w-full"
                  height="0"
                  objectFit="cover"
                  objectPosition="center"
                  sizes="100%"
                  src={
                    dt?.media?.data?.attributes?.url
                      ? `${serverBaseUrl?.replace("/api", "")}${dt?.media?.data
                          ?.attributes?.url}`
                      : ""
                  }
                  width="0"
                />
              </div>
            ) : null}
            <div className="p-4 medium:p-6">
              {dt?.zeitpunkt ? (
                <div className="typo-copy-normal text-gray-400">
                  {formatDate(dt?.zeitpunkt)}
                </div>
              ) : null}
              <div className="mt-4 mb-4 typo-h4">{dt?.titel}</div>
              <div className="typo-copy-normal text-gray-400">
                {dt?.beschreibung}
              </div>
            </div>
          </div>
          <span
            className={`bg-red-900 rounded-full absolute top-1/2 w-6 h-6 z-10 max-xl:-left-10 ${
              idx % 2 === 0 ? "-left-10" : "medium:-right-10"
            }`}
          />
          <div className="odd:right-auto odd:left-2" />
        </div>
      </div>
    ));

  return (
    <div className="px-6 medium:px-0 py-10 medium:pb-0 medium:pt-32.5">
      <SectionHeader
        desc={data.ueberschrift?.text}
        title={data.ueberschrift?.heading}
      />
      {data.timeline_karten?.length && (
        <div className="flex flex-col relative mt-6 medium:mt-24">
          {timelineItem()}
          <div className="absolute medium:left-1/2 w-1 my-2.5 h-full border-l-2 border-dashed border-gray-500" />
        </div>
      )}
    </div>
  );
};

export default TimelineList;
