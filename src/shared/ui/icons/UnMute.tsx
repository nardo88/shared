import React from "react";

import { type IconProps } from "./IconComponent";

const UnMute: React.FC<IconProps> = (props): React.ReactNode => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title />
    <g>
      <path d="M16,20a6,6,0,0,0,6-6V8A6,6,0,0,0,10,8v6A6,6,0,0,0,16,20Z" />
      <path d="M26,14a1,1,0,0,0-2,0A8,8,0,0,1,8,14a1,1,0,0,0-2,0,10,10,0,0,0,9,9.95V28H11a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2H17V23.95A10,10,0,0,0,26,14Z" />
    </g>
  </svg>
);

export default UnMute;
