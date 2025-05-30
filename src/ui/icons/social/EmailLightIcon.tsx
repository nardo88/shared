import React from "react";

import IconComponent, { type IconProps } from "../IconComponent";

const EmailLightIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent
    id="email-icon"
    fill="none"
    size={16}
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      d="M2 4.66667C2 4.31305 2.14048 3.97391 2.39052 3.72386C2.64057 3.47381 2.97971 3.33334 3.33333 3.33334H12.6667C13.0203 3.33334 13.3594 3.47381 13.6095 3.72386C13.8595 3.97391 14 4.31305 14 4.66667V11.3333C14 11.687 13.8595 12.0261 13.6095 12.2761C13.3594 12.5262 13.0203 12.6667 12.6667 12.6667H3.33333C2.97971 12.6667 2.64057 12.5262 2.39052 12.2761C2.14048 12.0261 2 11.687 2 11.3333V4.66667Z"
      stroke="#A0A9BC"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 4.66667L8 8.66667L14 4.66667"
      stroke="#A0A9BC"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default EmailLightIcon;
