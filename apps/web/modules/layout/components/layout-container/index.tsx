import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const LayoutContainer: React.FC<Props> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "mx-auto max-w-desktop py-10 medium:py-15 medium:px-0 w-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default LayoutContainer;
