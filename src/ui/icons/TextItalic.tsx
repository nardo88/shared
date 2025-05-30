import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

export const TextItalic: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} viewBox="0 0 24 24" size={24}>
    <path d="M13.6 19H7V17.5556H13.6V19ZM11.4 17.5556H9.2L13.6 7.44444H15.8L11.4 17.5556ZM18 7.44444H11.4V6H18V7.44444Z" />
  </IconComponent>
);
