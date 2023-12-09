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

const NewsList: React.FC<NewsData> = ({ newsData }) => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-3 gap-6 mb-12">
      {newsData
        .filter((_, idx) => idx > 4)
        .map((val, idx) => {
          return (
            <div key={idx}>
              <Card
                cursor="cursor-pointer"
                image={val.image}
                imgClass="px-0 mb-6"
                imgStyle="rounded-3xl"
                onClick={() => {
                  router.push(`/news/${val.slug}`);
                }}
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

export default NewsList;
