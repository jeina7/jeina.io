import React from "react";
import { IconProps } from ".";

export const SlashIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center ${
        className ? className : ""
      }`}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.823223"
          y1="29.1033"
          x2="29.1075"
          y2="0.818982"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
};
