import React from "react";
import SearchIcon from "@/modules/common/icons/search";

type SearchBoxProps = React.InputHTMLAttributes<HTMLInputElement>;

const SearchBox: React.FC<SearchBoxProps> = ({ ...props }) => {
  return (
    <div className="flex border border-gray-200 justify-between items-center rounded-full max-w-md px-6 py-3.5">
      <input
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        className="text-copy-normal bg-transparent focus:outline-none"
        type="search"
        {...props}
      />
      <SearchIcon />
    </div>
  );
};

export default SearchBox;
