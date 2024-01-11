import { clsx } from "clsx";
import type { IconProps } from "@/types/icon";

const ChevronIcon = ({
  size = "20",
  color = "currentColor",
  direction = "down",
  doubleIcon = false,
  ...props
}: IconProps) => {
  const ChevronDirection = clsx({
    "M6 8L10 12L14 8": direction === "down",
    "M12 6L8 10L12 14": direction === "left",
    "M6 12L10 8L14 12": direction === "up",
    "M8 6L12 10L8 14": direction === "right",
  });

  const ChevronDoubleDirection = clsx({
    "M20 6L16 10L20 14": direction === "left",
    "M16 6L20 10L16 14": direction === "right",
  });

  return (
    <svg
      fill="none"
      height={size}
      viewBox={doubleIcon ? "0 0 30 20" : "0 0 20 20"}
      width={doubleIcon ? parseInt(size) * 2 : size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d={ChevronDirection}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
      {doubleIcon && (
        <path
          d={ChevronDoubleDirection}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
        />
      )}
    </svg>
  );
};

export default ChevronIcon;
