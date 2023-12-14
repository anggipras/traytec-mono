import clsx from "clsx";
import React from "react";

export type ButtonProps = {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  width?: "w-fit" | "w-full";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  width = "w-fit",
  ...props
}: ButtonProps) => {
  const variantClassname = clsx({
    "btn-primary": variant === "primary",
    "btn-secondary": variant === "secondary",
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

  return (
    <button
      {...props}
      className={clsx(
        "btn",
        variantClassname,
        spacingClassname,
        sizeClassname,
        width,
        {
          "cursor-not-allowed": props.disabled,
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
