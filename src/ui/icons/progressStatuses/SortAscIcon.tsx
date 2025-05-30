import React from "react";

import IconComponent, { type IconProps } from "../IconComponent";

export const SortAscIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} fill="none" id="SortAscIcon">
    <path
      d="M15 10V5C15 3.62 15.62 3 17 3C18.38 3 19 3.62 19 5V10M19 7H15M4 15L7 18M7 18L10 15M7 18V6"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 21V18M19 18V14C19 14 17.5373 14 16.6 14C16 14 15 14.5 15 16C15 17 16 18 17.0995 18M19 18C19 18 18.3 18 17.0995 18M17.0995 18C16 19.5 15 21 15 21"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);
