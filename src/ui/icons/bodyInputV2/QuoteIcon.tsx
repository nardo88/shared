import React from "react";

import IconComponent, { type IconProps } from "../IconComponent";

export const QuoteIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent
    {...props}
    viewBox="0 0 18 18"
    width={18}
    height={18}
    size={18}
  >
    <path
      d="M4.5 11.25H15.75"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.75 14.25H4.5"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.25 8.25H15.75"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.75 5.25H11.25"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.75 6.75H7.5C7.64834 6.75 7.79334 6.79399 7.91668 6.8764C8.04001 6.95881 8.13614 7.07594 8.19291 7.21299C8.24968 7.35003 8.26453 7.50083 8.23559 7.64632C8.20665 7.7918 8.13522 7.92544 8.03033 8.03033C7.92544 8.13522 7.7918 8.20665 7.64632 8.23559C7.50083 8.26453 7.35003 8.24968 7.21299 8.19291C7.07594 8.13614 6.95881 8.04001 6.8764 7.91668C6.79399 7.79334 6.75 7.64834 6.75 7.5V5.625C6.75 5.22718 6.90804 4.84564 7.18934 4.56434C7.47064 4.28304 7.85217 4.125 8.25 4.125"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.25 6.75H3C3.14834 6.75 3.29334 6.79399 3.41668 6.8764C3.54001 6.95881 3.63614 7.07594 3.69291 7.21299C3.74968 7.35003 3.76453 7.50083 3.73559 7.64632C3.70665 7.7918 3.63522 7.92544 3.53033 8.03033C3.42544 8.13522 3.2918 8.20665 3.14632 8.23559C3.00083 8.26453 2.85003 8.24968 2.71299 8.19291C2.57594 8.13614 2.45881 8.04001 2.3764 7.91668C2.29399 7.79334 2.25 7.64834 2.25 7.5V5.625C2.25 5.22718 2.40804 4.84564 2.68934 4.56434C2.97064 4.28304 3.35218 4.125 3.75 4.125"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);
