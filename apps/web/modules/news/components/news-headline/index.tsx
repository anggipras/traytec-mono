import React from "react";
// import { useRouter } from "next/navigation";
// import Card from "@/modules/common/components/card";

interface NewsData {
  newsData: {
    title: string;
    smallContent?: string;
    desc: string;
    image: string;
    slug: string;
  }[];
}

const NewsHeadline: React.FC<NewsData> = () => {
  // const router = useRouter();

  return (
    <div className="grid medium:grid-flow-col grid-cols-1 medium:grid-cols-4 medium:grid-rows-2 gap-5 mt-6 medium:mt-10">
      {/* {newsData
        .filter((_, idx) => idx < 5)
        .map((val, idx) => {
          return (
            <div
              className={`${
                idx === 0
                  ? "medium:col-span-2 medium:row-span-2"
                  : "medium:col-span-1"
              }`}
              key={idx}
            >
              <Card
                additionalclass={`${
                  idx > 0 ? "flex-row gap-6" : "flex-col"
                } medium:flex-col`}
                cursor="cursor-pointer"
                image={val.image}
                imgclass="px-0 mb-6"
                imgstyle={`rounded-xl medium:rounded-3xl ${
                  idx > 0 ? "max-w-[150px]" : "w-full"
                } medium:max-w-full`}
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
        })} */}
    </div>
  );
};

export default NewsHeadline;
