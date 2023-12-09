import React, { useMemo, useState } from "react";
import LayoutContainer from "@/modules/layout/components/layout-container";
import SubHeader from "@/modules/common/components/sub-header";
import NewsHeadline from "@/modules/news/components/news-headline";
import NewsList from "@/modules/news/components/news-list";
import SearchBox from "@/modules/common/components/search-box";
import NativeSelect from "@/modules/common/components/native-select";
import Pagination from "@/modules/common/components/pagination";

const NewsTemplate = () => {
  const newsData = useMemo(
    () => [
      {
        title: "Innovative process management",
        smallContent: "Nov 27, 2023",
        desc: "In the 'innovative process control' project, an innovative robot system (collaborative robot with force-sensitive gripper) is used to support certain production processes. In general, this project serves to optimize processes in the production area.",
        image: require("@/assets/images/common/img_example_news.png"),
        slug: "news-1",
      },
      {
        title:
          "FachPack 2022 We cordially invite you to visit us in hall 7 at booth",
        desc: "Nov 27, 2023",
        image: require("@/assets/images/common/img_example_news.png"),
        slug: "news-2",
      },
      {
        title: "traytec - developer of identification systems for trays",
        desc: "Nov 27, 2023",
        image: require("@/assets/images/common/img_example_news.png"),
        slug: "news-3",
      },
      {
        title: "FachPack 2019",
        desc: "Nov 27, 2023",
        image: require("@/assets/images/common/img_example_news.png"),
        slug: "news-4",
      },
      {
        title: "traytec awarded as top innovator",
        desc: "Nov 27, 2023",
        image: require("@/assets/images/common/img_example_news.png"),
        slug: "news-5",
      },
      {
        title: "traytec - developer of identification systems for trays",
        desc: "Nov 27, 2023",
        image: require("@/assets/images/common/img_example_news.png"),
        slug: "news-6",
      },
      {
        title: "traytec - developer of identification systems for trays",
        desc: "Nov 27, 2023",
        image: require("@/assets/images/common/img_example_news.png"),
        slug: "news-7",
      },
      {
        title: "traytec - developer of identification systems for trays",
        desc: "Nov 27, 2023",
        image: require("@/assets/images/common/img_example_news.png"),
        slug: "news-8",
      },
      {
        title: "traytec - developer of identification systems for trays",
        desc: "Nov 27, 2023",
        image: require("@/assets/images/common/img_example_news.png"),
        slug: "news-9",
      },
    ],
    []
  );

  const [active, setActive] = useState(1);

  const activeHandler = (clickedActive: string) => {
    setActive(parseInt(clickedActive));
  };

  return (
    <>
      <SubHeader title="Our News" />
      <LayoutContainer>
        <div className="mt-20 mx-15 mb-32.5">
          <div className="flex w-full justify-between">
            <NativeSelect placeholder="All Categories">
              <option value="test1">Test 1</option>
              <option value="test2">Test 2</option>
              <option value="test3">Test 3</option>
            </NativeSelect>
            <SearchBox placeholder="Search..." type="text" />
          </div>
          <NewsHeadline newsData={newsData} />
          <div className="border border-gray-100 w-full my-12" />
          <NewsList newsData={newsData} />
          <Pagination
            active={active}
            onClickHandler={activeHandler}
            size={99}
            step={2}
          />
        </div>
      </LayoutContainer>
    </>
  );
};

export default NewsTemplate;
