import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const CloseV2: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent
    {...props}
    viewBox="0 0 12 12"
    size={12}
    width={16}
    height={16}
    id="close-icon"
    fill="none"
  >
    <path
      d="M4.5 4.5L7.5 7.5M4.5 7.5L7.5 4.5"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default CloseV2;
