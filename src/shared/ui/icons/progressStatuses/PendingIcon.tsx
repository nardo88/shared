import React from "react";

import IconComponent, { type IconProps } from "../IconComponent";

export const PendingIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} fill="none" id="PendingIcon">
    <path
      d="M3 5.83335C3 5.39133 3.17559 4.9674 3.48816 4.65484C3.80072 4.34228 4.22464 4.16669 4.66667 4.16669H16.3333C16.7754 4.16669 17.1993 4.34228 17.5118 4.65484C17.8244 4.9674 18 5.39133 18 5.83335V14.1667C18 14.6087 17.8244 15.0326 17.5118 15.3452C17.1993 15.6578 16.7754 15.8334 16.3333 15.8334H4.66667C4.22464 15.8334 3.80072 15.6578 3.48816 15.3452C3.17559 15.0326 3 14.6087 3 14.1667V5.83335Z"
      stroke="#FFA800"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 5.83337L10.5 10.8334L18 5.83337"
      stroke="#FFA800"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);
