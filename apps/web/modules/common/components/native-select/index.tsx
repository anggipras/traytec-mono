import React from "react";
import ChevronIcon from "@/modules/common/icons/chevron";

type NativeSelectProps = {
  placeholder: string;
  children: React.ReactNode;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const NativeSelect = ({
  placeholder,
  children,
  ...props
}: NativeSelectProps) => {
  return (
    <div className="flex relative border border-gray-200 justify-between items-center rounded-full w-full medium:w-fit pl-6 py-3.5">
      <span className="absolute right-4">
        <ChevronIcon />
      </span>
      <select
        {...props}
        className="relative appearance-none flex-1 bg-transparent border-none duration-150 outline-none pr-10"
      >
        <option value="">{placeholder}</option>
        {children}
      </select>
    </div>
  );
};

export default NativeSelect;
