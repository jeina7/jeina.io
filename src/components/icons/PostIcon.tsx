import React from "react";
import { IconProps } from ".";

export const PostIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center ${
        className ? className : ""
      }`}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.3354 18.9273H9.91211"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3354 14.043H9.91211"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.1273 9.17012H9.91309"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5603 3.2081C18.5603 3.2081 9.60381 3.21277 9.58981 3.21277C6.36981 3.2326 4.37598 5.35127 4.37598 8.58293V19.3116C4.37598 22.5596 6.38498 24.6864 9.63298 24.6864C9.63298 24.6864 18.5883 24.6829 18.6035 24.6829C21.8235 24.6631 23.8185 22.5433 23.8185 19.3116V8.58293C23.8185 5.33493 21.8083 3.2081 18.5603 3.2081Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
