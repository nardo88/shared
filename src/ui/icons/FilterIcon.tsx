import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const FilterIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent
    {...props}
    id="filter-icon"
    fill="none"
    size={18}
    viewBox="0 0 18 18"
  >
    <path
      d="M3 3H15V4.629C14.9999 5.02679 14.8418 5.40826 14.5605 5.6895L11.25 9V14.25L6.75 15.75V9.375L3.39 5.679C3.13909 5.40294 3.00004 5.0433 3 4.67025V3Z"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default FilterIcon;
