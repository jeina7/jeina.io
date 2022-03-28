import React from "react";
import { IconProps } from ".";

export const ThreeDots: React.FC<IconProps> = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center ${
        className ? className : ""
      }`}
    >
      <svg
        width="59"
        height="4"
        viewBox="0 0 59 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="2" cy="2" r="2" fill="currentColor" />
        <circle cx="30" cy="2" r="2" fill="currentColor" />
        <circle cx="57" cy="2" r="2" fill="currentColor" />
      </svg>
    </div>
  );
};
