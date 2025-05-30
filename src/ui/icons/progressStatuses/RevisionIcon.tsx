import React from "react";

import IconComponent, { type IconProps } from "../IconComponent";

export const RevisionIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} fill="none" id="RevisionIcon">
    <path
      d="M5.83301 5.8335H4.99967C4.55765 5.8335 4.13372 6.00909 3.82116 6.32165C3.5086 6.63421 3.33301 7.05814 3.33301 7.50016V15.0002C3.33301 15.4422 3.5086 15.8661 3.82116 16.1787C4.13372 16.4912 4.55765 16.6668 4.99967 16.6668H12.4997C12.9417 16.6668 13.3656 16.4912 13.6782 16.1787C13.9907 15.8661 14.1663 15.4422 14.1663 15.0002V14.1668"
      stroke="#999999"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3333 4.16676L15.8333 6.66676M16.9875 5.48759C17.3157 5.15938 17.5001 4.71424 17.5001 4.25009C17.5001 3.78594 17.3157 3.34079 16.9875 3.01259C16.6593 2.68438 16.2142 2.5 15.75 2.5C15.2858 2.5 14.8407 2.68438 14.5125 3.01259L7.5 10.0001V12.5001H10L16.9875 5.48759Z"
      stroke="#999999"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);
