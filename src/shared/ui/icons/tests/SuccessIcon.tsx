import React from "react";

import IconComponent, { type IconProps } from "../IconComponent";

const SuccessIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="success-icon" fill="none" viewBox="0 0 35 26">
    <path
      d="M34.001 1L13.001 25L1.00098 13"
      stroke="#181C25"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default SuccessIcon;
