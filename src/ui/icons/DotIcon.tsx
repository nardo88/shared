import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const DotIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent size={14} viewBox="0 0 14 14" fill="none" {...props}>
    <circle id="Ellipse 46" cx="7" cy="7" r="7" fill="#8E7BFF" />
  </IconComponent>
);

export default DotIcon;
