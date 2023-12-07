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

const NewsList: React.FC<NewsData> = ({ newsData }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {newsData
        .filter((_, idx) => idx > 4)
        .map((val, idx) => {
          return (
            <div key={idx}>
              <Card
                image={val.image}
                imgClass="px-0 mb-6"
                imgStyle="rounded-3xl"
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
