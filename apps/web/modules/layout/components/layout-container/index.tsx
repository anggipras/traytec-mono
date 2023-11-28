import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

// eslint-disable-next-line -- Temporarily avoids the lint error problem. See issue XXX.
const LayoutContainer: React.FC<Props> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "mx-auto max-w-desktop px-md medium:px-0 w-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default LayoutContainer;
