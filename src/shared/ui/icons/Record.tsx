import React from "react";

import { type IconProps } from "./IconComponent";

export const Record: React.FC<IconProps> = (props): React.ReactNode => (
  <svg width="24" height="24" focusable="false" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="7" fill="currentColor" />
    <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" />
  </svg>
);
