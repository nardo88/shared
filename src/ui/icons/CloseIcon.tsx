import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const CloseIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} viewBox="0 0 18 18" id="close-icon" fill="none">
    <path
      d="M4.5 4.5L13.5 13.5M4.5 13.5L13.5 4.5"
      stroke="#A0A9BC"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default CloseIcon;
