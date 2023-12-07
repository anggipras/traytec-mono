import React, { useMemo } from "react";
import LayoutContainer from "@/modules/layout/components/layout-container";
import SubHeader from "@/modules/common/components/sub-header";
import NewsHeadline from "@/modules/news/components/news-headline";
import NewsList from "@/modules/news/components/news-list";

const NewsTemplate = () => {
  const newsData = useMemo(
    () => [
      {
        title: "Innovative process management",
        smallContent: "Nov 27, 2023",
        desc: "In the 'innovative process control' project, an innovative robot system (collaborative robot with force-sensitive gripper) is used to support certain production processes. In general, this project serves to optimize processes in the production area.",
        image: require("@/assets/images/common/img_example_news.png"),
      },
      {
        title:
          "FachPack 2022 We cordially invite you to visit us in hall 7 at booth",
        desc: "Nov 27, 2023",
        image: require("@/assets/images/common/img_example_news.png"),
      },
      {
        title: "traytec - developer of identification systems for trays",
        desc: "Nov 27, 2023",
        image: require("@/assets/images/common/img_example_news.png"),
      },
      {
        title: "FachPack 2019",
        desc: "Nov 27, 2023",
        image: require("@/assets/images/common/img_example_news.png"),
      },
      {
        title: "traytec awarded as top innovator",
        desc: "Nov 27, 2023",
        image: require("@/assets/images/common/img_example_news.png"),
      },
      {
        title: "traytec - developer of identification systems for trays",
        desc: "Nov 27, 2023",
        image: require("@/assets/images/common/img_example_news.png"),
      },
      {
        title: "traytec - developer of identification systems for trays",
        desc: "Nov 27, 2023",
        image: require("@/assets/images/common/img_example_news.png"),
      },
      {
        title: "traytec - developer of identification systems for trays",
        desc: "Nov 27, 2023",
        image: require("@/assets/images/common/img_example_news.png"),
      },
      {
        title: "traytec - developer of identification systems for trays",
        desc: "Nov 27, 2023",
        image: require("@/assets/images/common/img_example_news.png"),
      },
    ],
    []
  );
  return (
    <>
      <SubHeader title="Our News" />
      <LayoutContainer>
        <div className="mt-20 mx-15 mb-32.5">
          <NewsHeadline newsData={newsData} />
          <div className="border border-gray-100 w-full my-12" />
          <NewsList newsData={newsData} />
        </div>
      </LayoutContainer>
    </>
  );
};

export default NewsTemplate;
