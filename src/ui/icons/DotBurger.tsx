import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const DotBurger: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="bell" viewBox="0 0 17 17" fill="none">
    <path
      d="M5 1H16M5 7H16M5 13H16M1 1V1.01M1 7V7.01M1 13V13.01"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default DotBurger;
