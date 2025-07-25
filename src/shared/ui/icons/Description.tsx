import React from "react";

import { type IconProps } from "./IconComponent";

const Description: React.FC<IconProps> = (props): React.ReactNode => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.33325 5.33334H12.6666M3.33325 8.00001H12.6666M3.33325 10.6667H7.33325"
      stroke="#66707F"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Description;
