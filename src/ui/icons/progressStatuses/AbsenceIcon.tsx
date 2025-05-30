import React from "react";

import IconComponent, { type IconProps } from "../IconComponent";

export const AbsenceIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} fill="none" id="AbsenceIcon">
    <path
      d="M10.833 17.5H4.99967C4.55765 17.5 4.13372 17.3244 3.82116 17.0118C3.5086 16.6993 3.33301 16.2754 3.33301 15.8333V5.83333C3.33301 5.39131 3.5086 4.96738 3.82116 4.65482C4.13372 4.34226 4.55765 4.16667 4.99967 4.16667H14.9997C15.4417 4.16667 15.8656 4.34226 16.1782 4.65482C16.4907 4.96738 16.6663 5.39131 16.6663 5.83333V11.25M13.333 2.5V5.83333M6.66634 2.5V5.83333M3.33301 9.16667H16.6663M18.333 18.3333L14.1663 14.1667M14.1663 18.3333L18.333 14.1667"
      stroke="#999999"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);
