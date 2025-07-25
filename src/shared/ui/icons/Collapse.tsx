import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const CollapseIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="clear" fill="none">
    <path
      d="M7 7L12 12L7 17M13 7L18 12L13 17"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default CollapseIcon;
