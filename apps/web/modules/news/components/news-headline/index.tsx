import React from "react";
import Card from "@/modules/common/components/card";

interface NewsData {
  newsData: {
    title: string;
    smallContent?: string;
    desc: string;
    image: string;
  }[];
}

const NewsHeadline: React.FC<NewsData> = ({ newsData }) => {
  return (
    <div className="grid grid-flow-col grid-cols-4 grid-rows-2 gap-5">
      {newsData
        .filter((_, idx) => idx < 5)
        .map((val, idx) => {
          return (
            <div
              className={`${
                idx === 0 ? "col-span-2 row-span-2" : "col-span-1"
              }`}
              key={idx}
            >
              <Card
                image={val.image}
                imgClass="px-0 mb-6"
                imgStyle="rounded-3xl"
                smallContent={val.smallContent ?? ""}
                subcontent={val.desc}
                title={val.title}
                titleClass="typo-h4"
              />
            </div>
          );
        })}
    </div>
  );
};

export default NewsHeadline;
