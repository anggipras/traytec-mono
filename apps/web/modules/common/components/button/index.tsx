import { clsx } from "clsx";
import React from "react";
import { Enum_Componentutilsbutton_Variante } from "@/generated/graphql";

export type ButtonProps = {
  variant?: Enum_Componentutilsbutton_Variante;
  size?: "small" | "medium" | "large";
  width?: "w-fit" | "w-full";
  typebtn?: "button" | "event";
  onMouseClick?: any;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = Enum_Componentutilsbutton_Variante.Primary,
  size = "medium",
  width = "w-fit",
  typebtn = "button",
  onMouseClick,
  ...props
}: ButtonProps) => {
  const variantClassname = clsx({
    "btn-primary": variant === Enum_Componentutilsbutton_Variante.Primary,
    "btn-secondary": variant === Enum_Componentutilsbutton_Variante.Secondary,
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
    <>
      {typebtn === "event" ? (
        <button
          {...props}
          className={clsx(
            "btn",
            variantClassname,
            "px-6 py-4",
            sizeClassname,
            width
          )}
          onClick={onMouseClick}
        >
          {children}
        </button>
      ) : (
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
      )}
    </>
  );
};

export default Button;
