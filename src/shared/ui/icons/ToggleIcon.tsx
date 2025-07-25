import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const ToggleIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent fill="none" {...props} id="toggle-icon">
    <rect width="24" height="24" rx="6" fill="white" />
    <path
      d="M11 7L6 12L11 17M17 7L12 12L17 17"
      stroke="#A0A9BC"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default ToggleIcon;
