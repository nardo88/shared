import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const Mark: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="mark" size={16} viewBox="0 0 16 16">
    <path
      d="M5.6001 8.00001L7.4001 9.80001L11.0001 6.20001"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default Mark;
