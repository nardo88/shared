import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const SortDirectionIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="sort-direction-icon" viewBox="0 0 24 24">
    <path
      d="M4 6H13M4 12H11M4 18H11M15 15L18 18M18 18L21 15M18 18V6"
      stroke="#66707F"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default SortDirectionIcon;
