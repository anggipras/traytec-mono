import React from "react";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const LayoutContainer: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div className="mx-auto max-w-desktop medium:px-0 w-full" {...props}>
      {children}
    </div>
  );
};

export default LayoutContainer;
