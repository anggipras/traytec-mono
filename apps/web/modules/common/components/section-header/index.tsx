import React from "react";
import { useTranslation } from "next-i18next";

interface SectionHeaderProps {
  intro?: string;
  title: string;
  desc?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center mx-auto">
      {props.intro ? (
        <div className="w-fit px-3.5 py-2 mb-4 bg-pink-100 rounded-full text-rose-800">
          {t(props.intro)}
        </div>
      ) : null}
      <div className="typo-h2 px-6 medium:px-0 text-center">
        {t(props.title)}
      </div>
      {props.desc ? (
        <div className="typo-copy-normal max-w-2xl mt-5 text-gray-400 px-6 medium:px-0 text-center">
          {t(props.desc)}
        </div>
      ) : null}
    </div>
  );
};

export default SectionHeader;
