import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import SubHeader from "@/modules/common/components/sub-header";
import Button from "@/modules/common/components/button";
import LayoutContainer from "@/modules/layout/components/layout-container";

const DomainTemplate: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const domainData = useMemo(
    () => [
      {
        title: "Automotive Industries",
        desc: "For the automotive industry traytec manufactures disposable and reusable trays",
        image: require("@/assets/images/common/img_example_product.png"),
      },
      {
        title: "Electronics",
        desc: "Electrically conductive honeycomb backings",
        image: require("@/assets/images/common/img_example_product.png"),
      },
      {
        title: "Food",
        desc: "TRAY FOR FOOD TRANSPORTATION",
        image: require("@/assets/images/common/img_example_product.png"),
      },
      {
        title: "Medicine & Pharmaceutical",
        desc: "TRAYS FOR SENSITIVE MEDICAL AND PHARMACEUTICAL PRODUCTS",
        image: require("@/assets/images/common/img_example_product.png"),
      },
      {
        title: "Display",
        desc: "DISPLAY'S FOR VARIOUS APPLICATIONS",
        image: require("@/assets/images/common/img_example_product.png"),
      },
      {
        title: "test1",
        desc: "TRAY FOR FOOD TRANSPORTATION",
        image: require("@/assets/images/common/img_example_product.png"),
      },
      {
        title: "test2",
        desc: "TRAYS FOR SENSITIVE MEDICAL AND PHARMACEUTICAL PRODUCTS",
        image: require("@/assets/images/common/img_example_product.png"),
      },
      {
        title: "test3",
        desc: "DISPLAY'S FOR VARIOUS APPLICATIONS",
        image: require("@/assets/images/common/img_example_product.png"),
      },
    ],
    []
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let checkSpanCond = false;
  const checkSpanComponent = (idx: number) => {
    if (screenWidth > 1279) {
      if (idx >= 2 && (idx - 2) % 4 === 0) {
        checkSpanCond = true;
        return "col-start-1 col-span-2 bg-white border border-gray-200";
      }
      if (checkSpanCond) {
        checkSpanCond = false;
        return "col-start-3 col-span-3 bg-gray-100";
      }

      if (idx % 2 === 0) {
        return "col-start-1 col-span-3 bg-gray-100";
      }
      return "col-start-4 col-span-2 bg-white border border-gray-200";
    }
    if (idx % 2 === 0) {
      return "col-start-1 col-span-5 bg-gray-100";
    }
    return "col-start-1 col-span-5 bg-white border border-gray-200";
  };

  let checkButtonCond = false;
  const checkButtonStyle = (idx: number) => {
    if (screenWidth > 1279) {
      if (idx >= 2 && (idx - 2) % 4 === 0) {
        checkButtonCond = true;
        return "bg-white border border-primary-950 text-primary-950";
      }
      if (checkButtonCond) {
        checkButtonCond = false;
        return "bg-primary-950 text-white";
      }
    }

    if (idx % 2 === 0) {
      return "bg-primary-950 text-white";
    }
    return "bg-white border border-primary-950 text-primary-950";
  };

  const domainComponent = (
    val: { title: string; desc: string },
    idx: number
  ) => {
    return (
      <div
        className={`flex max-medium:flex-col relative rounded-3xl medium:overflow-hidden ${checkSpanComponent(
          idx
        )}`}
        key={idx}
      >
        <div className="absolute top-0 medium:bottom-0 left-0">
          <Image
            alt="bg_domain_card"
            className="w-full h-full"
            objectFit="cover"
            src={require("@/assets/images/common/img_bg_domain_card.svg")}
          />
        </div>
        <div className="max-medium:flex max-medium:flex-col max-medium:items-center px-4 pt-15 medium:px-6 medium:py-20 w-full medium:w-[50%]">
          <div className="typo-h3">{val.title}</div>
          <div className="typo-copy-normal text-gray-500 mt-4 mb-5">
            {val.title.toLocaleLowerCase()}
          </div>
          <Button
            className={`px-6 py-3.5 w-fit rounded-full ${checkButtonStyle(
              idx
            )}`}
            size="medium"
            type="button"
            variant="text"
          >
            <span className="">See more Product</span>
          </Button>
        </div>
        <div className="mb-10 medium:mb-0 medium:absolute top-0 medium:left-[50%] medium:h-full">
          <Image
            alt="domain_product"
            className="medium:max-w-none w-auto medium:h-full"
            src={require("@/assets/images/common/img_example_product.png")}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <SubHeader title="Our Industry" />
      <LayoutContainer>
        <div className="flex flex-col items-center mx-auto my-10">
          <div className="typo-h2 mb-4 px-6 medium:px-0 text-center medium:text-center">
            Select your desired industry
          </div>
          <div className="typo-copy-normal mb-6 text-gray-400 px-6 medium:px-0 text-center medium:text-center">
            Provider of services for making trays, inserts, workpiece
            containers, lids, etc. for industry according to our wishes.
          </div>
        </div>
        <div className="mx-6 medium:mx-15 gap-4 medium:gap-5 mb-10 medium:mb-32.5">
          <div className="grid grid-flow-col grid-cols-5 gap-5">
            {domainData.map((val, idx) => {
              return domainComponent(val, idx);
            })}
          </div>
        </div>
      </LayoutContainer>
    </>
  );
};

export default DomainTemplate;
