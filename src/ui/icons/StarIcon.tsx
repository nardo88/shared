import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const StarIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="star-wrapper" viewBox="0 0 20 20" fill="none">
    <path
      d="M10.0052 14.9372L4.85465 17.5L5.83852 12.0719L1.66602 8.22816L7.42408 7.4384L9.99935 2.5L12.5746 7.4384L18.3327 8.22816L14.1602 12.0719L15.1441 17.5L10.0052 14.9372Z"
      stroke="#66707F"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default StarIcon;
