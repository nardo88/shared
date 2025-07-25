import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const Menu: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="menu" fill="none" viewBox="0 0 24 24">
    <g id="Menu">
      <path
        id="Vector"
        d="M4 6H20M4 12H20M4 18H20"
        stroke="#181C25"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </IconComponent>
);

export default Menu;
