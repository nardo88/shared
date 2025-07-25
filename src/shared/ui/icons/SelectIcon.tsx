import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const SelectIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="selectIcon" viewBox="0 0 20 20" fill="none">
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.16406 9.99967L8.33073 14.1663L16.6641 5.83301"
        stroke="#181C25"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </IconComponent>
);

export default SelectIcon;
