import React from "react";

import IconComponent, { type IconProps } from "../IconComponent";

const TelegramLightIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent
    id="vk-icon"
    fill="none"
    size={30}
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      d="M18.75 12.5L13.75 17.5L21.25 25L26.25 5L3.75 13.75L8.75 16.25L11.25 23.75L15 18.75"
      stroke="#181C25"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default TelegramLightIcon;
