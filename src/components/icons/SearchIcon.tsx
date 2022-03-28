import React from "react";
import { IconProps } from ".";

export const SearchIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center ${
        className ? className : ""
      }`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 14L10 10M11.3333 6.66667C11.3333 7.2795 11.2126 7.88634 10.9781 8.45252C10.7436 9.01871 10.3998 9.53316 9.9665 9.9665C9.53316 10.3998 9.01871 10.7436 8.45252 10.9781C7.88634 11.2126 7.2795 11.3333 6.66667 11.3333C6.05383 11.3333 5.447 11.2126 4.88081 10.9781C4.31462 10.7436 3.80018 10.3998 3.36683 9.9665C2.93349 9.53316 2.58975 9.01871 2.35523 8.45252C2.12071 7.88634 2 7.2795 2 6.66667C2 5.42899 2.49167 4.24201 3.36683 3.36684C4.242 2.49167 5.42899 2 6.66667 2C7.90434 2 9.09133 2.49167 9.9665 3.36684C10.8417 4.24201 11.3333 5.42899 11.3333 6.66667Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
