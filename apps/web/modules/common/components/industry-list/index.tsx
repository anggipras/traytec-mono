import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RenderHtml from "../render-html";
import type {
  ComponentListenIndustrieListe,
  IndustrieEntity,
} from "@/generated/graphql";
// import SectionHeader from "@/modules/common/components/section-header";

interface IndustryListProps {
  data: ComponentListenIndustrieListe;
}

const IndustryList = ({ data }: IndustryListProps) => {
  const router = useRouter();
  const [screenWidth, setScreenWidth] = useState(0);

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

  const domainComponent = (val: IndustrieEntity, idx: number) => {
    return (
      <div
        className={`flex max-medium:flex-col max-medium:items-center relative rounded-3xl medium:overflow-hidden ${checkSpanComponent(
          idx
        )}`}
        key={idx}
      >
        <div className="z-10 max-medium:flex max-medium:flex-col max-medium:items-center px-4 pt-15 medium:px-6 medium:py-20 w-full medium:w-[50%]">
          <div className="typo-h3">{val.attributes?.titel}</div>
          <RenderHtml
            className="text-gray-500 text-center medium:text-start mt-4 mb-5"
            html={val.attributes?.beschreibung || ""}
          />
          <div
            aria-hidden
            className={`px-6 py-3.5 w-fit rounded-full cursor-pointer ${checkButtonStyle(
              idx
            )}`}
            onClick={() => {
              void router.push(`${router.asPath}/${val.attributes?.slug}`);
            }}
          >
            <span className="">See more Product</span>
          </div>
        </div>
        <div className="absolute medium:top-0 medium:bottom-0 left-0 z-0">
          <Image
            alt="bg_domain_card"
            className="w-full h-full"
            objectFit="cover"
            src={require("@/assets/images/common/img_bg_domain_card.svg")}
          />
        </div>
        {val.attributes?.vorschau && (
          <div className="mb-10 medium:mb-0 medium:absolute top-0 medium:left-[50%] medium:h-full">
            <Image
              alt="domain_product"
              className="medium:max-w-none w-auto medium:h-full"
              height="0"
              sizes="100%"
              src={val.attributes?.vorschau.data?.attributes?.url ?? ""}
              width="0"
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="my-10 medium:mt-20 medium:mb-32.5">
      {/* <SectionHeader
        desc="Provider of services for making trays, inserts, workpiece
            containers, lids, etc. for industry according to our wishes."
        title="Select your desired industry"
      /> */}
      {data.industrien?.data?.length && (
        <div className="mx-6 medium:mx-15 gap-4 medium:gap-5 mt-10">
          <div className="grid grid-flow-col grid-cols-5 gap-5">
            {data.industrien?.data.map((val, idx) => {
              return domainComponent(val, idx);
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default IndustryList;
