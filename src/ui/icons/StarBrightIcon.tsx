import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const StarBrightIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="star-wrapper" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="1" width="16" height="16" rx="8" fill="#FFD12E" />
    <rect x="1" y="1" width="16" height="16" rx="8" stroke="white" />
    <path
      d="M9.00553 11.4686L6.43025 12.75L6.92219 10.036L4.83594 8.11408L7.71497 7.7192L9.0026 5.25L10.2902 7.7192L13.1693 8.11408L11.083 10.036L11.575 12.75L9.00553 11.4686Z"
      fill="#181C25"
      stroke="#181C25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default StarBrightIcon;
