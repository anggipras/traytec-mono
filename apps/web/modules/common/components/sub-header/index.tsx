import Image from "next/image";
import React from "react";

interface SubHeaderProps {
  title: string;
}

const SubHeader: React.FC<SubHeaderProps> = (props) => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-desktop w-full">
        <div className="relative px-6 py-10 medium:p-15 w-full overflow-hidden">
          <div className="typo-h2">{props.title}</div>
          <div className="absolute top-0 bottom-0 -right-10 medium:right-0">
            <Image
              alt="bg_subheader"
              className="w-full h-full"
              src={require("@/assets/images/common/img_bg_subheader.svg")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
