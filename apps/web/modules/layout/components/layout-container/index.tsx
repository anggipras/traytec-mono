import React from "react";
import clsx from 'clsx';

type Props = {
  type?: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

// eslint-disable-next-line -- Temporarily avoids the lint error problem. See issue XXX.
const LayoutContainer: React.FC<Props> = ({
  type = 1,
  children,
  className,
  ...props
}) => {
  if (type === 2) {
    return (
      <div
        className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (type === 3) {
    return (
      <div
        className={clsx("container mx-auto sm:px-6 lg:px-8", className)}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (type === 4) {
    return (
      <div
        className={clsx("container mx-auto px-4 sm:px-6 lg:px-8", className)}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (type === 5) {
    return (
      <div
        className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
        {...props}
      >
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="mx-auto max-w-3xl">{/* Content goes here */}</div>
      </div>
    );
  }

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
