// import Image from "next/image";
import Image from "next/image";
import React from "react";
import SectionHeader from "@/modules/common/components/section-header";

interface TimelineItemData {
  image: string;
  date: string;
  title: string;
  description: string;
}

const CompanyMilestone = () => {
  const timelineData: TimelineItemData[] = [
    {
      title: "Started working on the app-ideas repository",
      description: "Started working on the app-ideas repository",
      date: "February 25 2019",
      image: require("@/assets/images/common/img_example_news.png"),
    },
    {
      title: "Started working on the app-ideas repository",
      description: "Started working on the app-ideas repository",
      date: "February 25 2019",
      image: require("@/assets/images/common/img_example_news.png"),
    },
    {
      title: "Started working on the app-ideas repository",
      description: "Started working on the app-ideas repository",
      date: "February 25 2019",
      image: require("@/assets/images/common/img_example_news.png"),
    },
    {
      title: "Started working on the app-ideas repository",
      description: "Started working on the app-ideas repository",
      date: "February 25 2019",
      image: require("@/assets/images/common/img_example_news.png"),
    },
    {
      title: "Started working on the app-ideas repository",
      description: "Started working on the app-ideas repository",
      date: "February 25 2019",
      image: require("@/assets/images/common/img_example_news.png"),
    },
  ];

  const timelineItem = () =>
    timelineData.map((data, idx) => (
      <div
        className="flex justify-start medium:justify-end medium:pr-7 relative my-2.5 medium:w-1/2 medium:odd:self-end medium:odd:justify-start pl-7 medium:odd:pl-7 medium:odd:pr-0"
        key={idx}
      >
        <div className="flex flex-col items-end relative w-full text-right odd:text-left odd:items-start">
          <div className="rounded-3xl border border-gray-200 overflow-hidden">
            <div className="overflow-hidden max-h-[150px] w-full">
              <Image
                alt="company_milestone"
                className="h-full w-full"
                objectFit="cover"
                objectPosition="center"
                src={data.image}
              />
            </div>
            <div className="p-4 medium:p-6">
              <div className="typo-copy-normal text-gray-400">{data.date}</div>
              <div className="mt-4 mb-4 typo-h4">{data.title}</div>
              <div className="typo-copy-normal text-gray-400">
                {data.description}
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
    <div className="mt-20 medium:my-40">
      <SectionHeader
        desc="The important turning points or turning points in our development."
        title="Company milestones"
      />
      <div className="flex flex-col relative mt-6 medium:mt-24">
        {timelineItem()}
        <div className="absolute medium:left-1/2 w-1 my-2.5 h-full border-l-2 border-dashed border-gray-500" />
      </div>
    </div>
  );
};

export default CompanyMilestone;
