import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const LanguageSwitcherIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} fill="none" id="languageSwitcher">
    <path
      d="M3.66797 4.58333H10.0846M8.2513 2.75V4.58333C8.2513 8.63317 6.19889 11.9167 3.66797 11.9167"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.58594 8.25C4.58594 10.2153 7.29194 11.8323 10.7276 11.9167M11.0026 18.3333L14.6693 10.0833L18.3359 18.3333M17.5109 16.5H11.8276"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default LanguageSwitcherIcon;
