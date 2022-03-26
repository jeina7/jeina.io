import React from "react";
import { IconProps } from ".";

export const SunIcon: React.FC<IconProps> = ({ className }) => {
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
          d="M8 2V2.66667M8 13.3333V14M14 8H13.3333M2.66667 8H2M12.2427 12.2427L11.7713 11.7713M4.22867 4.22867L3.75733 3.75733M12.2427 3.75733L11.7713 4.22867M4.22867 11.7713L3.75733 12.2427M10.6667 8C10.6667 8.70724 10.3857 9.38552 9.88562 9.88562C9.38552 10.3857 8.70724 10.6667 8 10.6667C7.29276 10.6667 6.61448 10.3857 6.11438 9.88562C5.61428 9.38552 5.33333 8.70724 5.33333 8C5.33333 7.29276 5.61428 6.61448 6.11438 6.11438C6.61448 5.61428 7.29276 5.33333 8 5.33333C8.70724 5.33333 9.38552 5.61428 9.88562 6.11438C10.3857 6.61448 10.6667 7.29276 10.6667 8Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
