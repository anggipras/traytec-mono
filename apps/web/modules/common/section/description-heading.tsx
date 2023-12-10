import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface DescriptionHeadingProps {
  title: string;
  titleclass: "typo-h2" | "typo-h4";
  description: string;
  image: string;
}

const DescriptionHeading = ({
  titleclass = "typo-h2",
  ...props
}: DescriptionHeadingProps) => {
  return (
    <div className="flex flex-col medium:flex-row justify-between items-center w-full gap-6 medium:gap-16">
      <div className="max-w-2xl text-center">
        <div className={clsx("mb-5", titleclass)}>{props.title}</div>
        <div className="typo-copy-normal text-gray-400 medium:text-justify">
          {props.description}
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-0 bottom-0 bg-gray-200 rounded-3xl -rotate-3 w-full" />
        <div className="absolute top-0 bottom-0 bg-gray-200 rounded-3xl rotate-3 w-full" />
        <div className="relative">
          <Image
            alt="img_description_heading"
            className="w-full h-full rounded-3xl"
            src={props.image}
          />
        </div>
      </div>
    </div>
  );
};

export default DescriptionHeading;
