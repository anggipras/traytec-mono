import clsx from "clsx";
import React from "react";
// import ThreeDotsAnimation from "../three-dots-animation"
// import { ArrowRightIcon } from "@heroicons/react/24/outline"

export type ButtonProps = {
  isLoading?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "text"
    | "danger"
    | "nuclear"
    | "outline"
    | "naked"
    | "tertiary"
    | "underline";
  size?: "small" | "medium" | "large";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  isLoading = false,
  variant = "primary",
  size = "medium",
  ...props
}: ButtonProps) => {
  const variantClassname = clsx({
    "btn-primary": variant === "primary",
    "btn-secondary": variant === "secondary",
    "btn-ghost": variant === "text",
    "btn-danger": variant === "danger",
    "btn-nuclear": variant === "nuclear",
    "btn-outline": variant === "outline",
    "btn-tertiary": variant === "tertiary",
  });

  const sizeClassname = clsx({
    "btn-large": size === "large",
    "btn-medium": size === "medium",
    "btn-small": size === "small",
  });

  const spacingClassname = clsx({
    "btn-spacing-large": size === "large",
    "btn-spacing-medium": size === "medium",
    "btn-spacing-small": size === "small",
  });

  const loadingColor =
    variant === "primary" || variant === "nuclear" || variant === "tertiary"
      ? "fill-white"
      : "fill-primary-700";
  if (variant === "underline") {
    // const buttonSizeClassName = clsx("w-md h-md")

    return (
      <div className={clsx("flex items-start", className, sizeClassname)}>
        <button {...props} className={spacingClassname}>
          <div className="flex items-center typo-header border-b border-current gap-x-4 transition-all duration-300 group hover:pl-sm hover:pr-xs">
            <span>{children}</span>
            {/* <ArrowRightIcon
              className={clsx(
                "transition-all group-hover:ml-2 duration-300",
                buttonSizeClassName
              )}
            /> */}
          </div>
        </button>
      </div>
    );
  }

  return (
    <button
      {...props}
      className={clsx(
        "btn transition-colors flex flex-row justify-between items-stretch",
        variantClassname,
        className,
        sizeClassname,
        {
          "cursor-not-allowed": props.disabled,
        }
      )}
    >
      {isLoading ? (
        <div
          className={clsx(
            "flex flex-row justify-center w-full items-center",
            sizeClassname,
            loadingColor,
            spacingClassname
          )}
        >
          {/* <ThreeDotsAnimation className={clsx("")} /> */}
        </div>
      ) : (
        <div className="flex flex-row items-stretch w-full justify-between">
          <span
            className={clsx(spacingClassname, "flex items-center", {
              "mx-auto": variant !== "primary",
            })}
          >
            {children}
          </span>
          {variant === "primary" && (
            <div
              className={clsx(
                "relative rounded-r-md px-2 small:px-4 h-full flex items-center",
                {
                  "bg-gray-200": props.disabled,
                  "bg-primary-600 hover:bg-primary-700": !props.disabled,
                }
              )}
            >
              {/* <ArrowRightIcon className="h-4 w-4 small:h-5 small:w-5 text-white" /> */}
            </div>
          )}
        </div>
      )}
    </button>
  );
};

export default Button;
