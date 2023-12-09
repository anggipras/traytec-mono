import React from "react";
import { useRouter } from "next/navigation";
import Card from "@/modules/common/components/card";

interface NewsData {
  newsData: {
    title: string;
    smallContent?: string;
    desc: string;
    image: string;
    slug: string;
  }[];
}

const NewsHeadline: React.FC<NewsData> = ({ newsData }) => {
  const router = useRouter();

  return (
    <div className="grid grid-flow-col grid-cols-4 grid-rows-2 gap-5 mt-10">
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
                cursor="cursor-pointer"
                image={val.image}
                imgclass="px-0 mb-6"
                imgstyle="rounded-3xl"
                onClick={() => {
                  router.push(`/news/${val.slug}`);
                }}
                smallcontent={val.smallContent ?? ""}
                subcontent={val.desc}
                title={val.title}
                titleclass="typo-h4"
              />
            </div>
          );
        })}
    </div>
  );
};

export default NewsHeadline;
