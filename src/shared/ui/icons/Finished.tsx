import React from "react";

import { type IconProps } from "./IconComponent";

const Finished: React.FC<IconProps> = (props): React.ReactNode => (
  <svg
    {...props}
    id="bell"
    fill="none"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 16.5C10.9891 16.5 12.8968 15.7098 14.3033 14.3033C15.7098 12.8968 16.5 10.9891 16.5 9C16.5 7.01088 15.7098 5.10322 14.3033 3.6967C12.8968 2.29018 10.9891 1.5 9 1.5C7.01088 1.5 5.10322 2.29018 3.6967 3.6967C2.29018 5.10322 1.5 7.01088 1.5 9C1.5 10.9891 2.29018 12.8968 3.6967 14.3033C5.10322 15.7098 7.01088 16.5 9 16.5Z"
      stroke="#66B700"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.49935 5.25L6.49935 12.75L13.166 9L6.49935 5.25Z"
      fill="#66B700"
      stroke="#66B700"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Finished;
