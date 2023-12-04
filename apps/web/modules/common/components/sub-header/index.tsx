import React from "react";

interface SubHeaderProps {
  title: string;
}

const SubHeader: React.FC<SubHeaderProps> = (props) => {
  return (
    <div className="max-w-md bg-gray-50 p-15">
      <div className="text-h2">{props.title}</div>
    </div>
  );
};

export default SubHeader;
