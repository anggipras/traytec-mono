import type { IconProps } from "@/types/icon";

const ChevronDown = ({
  size = "20",
  color = "currentColor",
  ...props
}: IconProps) => {
  return (
    <svg
      fill="none"
      height={size}
      viewBox="0 0 20 20"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 8L10 12L14 8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
    </svg>
  );
};

export default ChevronDown;
