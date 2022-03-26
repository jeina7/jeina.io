import React from "react";
import { IconProps } from ".";

export const MoonIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center pl-0.5 ${
        className ? className : ""
      }`}
    >
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.1302 11.0478C11.2825 11.2832 12.4786 11.1748 13.5697 10.736C13.123 11.8476 12.354 12.8 11.3614 13.4708C10.3689 14.1416 9.19835 14.5 8.0004 14.5C6.60732 14.4985 5.25815 14.0124 4.18417 13.1252C3.11019 12.2379 2.37829 11.0047 2.11394 9.63693C1.8496 8.26916 2.06926 6.85203 2.73529 5.62848C3.40131 4.40492 4.47221 3.45115 5.7644 2.93066C5.3256 4.02185 5.21717 5.21793 5.45259 6.37024C5.688 7.52254 6.25688 8.58025 7.08852 9.41188C7.92015 10.2435 8.97786 10.8124 10.1302 11.0478Z"
          stroke="#121212"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
