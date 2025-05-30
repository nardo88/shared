import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const StudyIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} viewBox="0 0 22 16" id="pen-icon" fill="none">
    <path
      d="M21 5L11 1L1 5L11 9L21 5ZM21 5V11"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 6.59998V12C5 12.7956 5.63214 13.5587 6.75736 14.1213C7.88258 14.6839 9.4087 15 11 15C12.5913 15 14.1174 14.6839 15.2426 14.1213C16.3679 13.5587 17 12.7956 17 12V6.59998"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default StudyIcon;
