import React from "react";
import { IconProps } from ".";

export const TagIcon: React.FC<IconProps> = ({ className }) => {
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
          d="M8.16667 8.16667H8.17833M8.16667 3.5H14C14.5973 3.5 15.1947 3.7275 15.6497 4.18367L23.8163 12.3503C24.2538 12.7879 24.4995 13.3813 24.4995 14C24.4995 14.6187 24.2538 15.2121 23.8163 15.6497L15.6497 23.8163C15.2121 24.2538 14.6187 24.4995 14 24.4995C13.3813 24.4995 12.7879 24.2538 12.3503 23.8163L4.18367 15.6497C3.96667 15.4333 3.79457 15.1761 3.67724 14.893C3.55992 14.6099 3.49968 14.3064 3.5 14V8.16667C3.5 6.92899 3.99167 5.742 4.86684 4.86683C5.74201 3.99167 6.92899 3.5 8.16667 3.5Z"
          stroke="#121212"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
