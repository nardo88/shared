import React from "react";

import { type IconProps } from "./IconComponent";

const ShareScreen: React.FC<IconProps> = (props): React.ReactNode => (
  <svg width="12" height="12" focusable="false" viewBox="0 0 12 12" {...props}>
    <path
      fill="none"
      strokeLinecap="round"
      d="M7.5 4.5H10c.3 0 .5.2.5.5v6c0 .3-.2.5-.5.5H1c-.3 0-.5-.2-.5-.5V5c0-.3.2-.5.5-.5h2.5m2 3V1m-2 1.5L5.1.9c.2-.2.5-.2.7 0l1.6 1.6"
    />
  </svg>
);

export default ShareScreen;
