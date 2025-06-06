import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

export const TallIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"
    />
  </IconComponent>
);
