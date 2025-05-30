import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

export const TextBold: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} viewBox="0 0 24 24" size={24}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.4884 9.71428C17.4884 7.61571 15.6977 6 13.3953 6H7V19H14.2037C16.3423 19 18 17.4214 18 15.4807C18 14.0693 17.12 12.8621 15.8 12.305C16.7926 11.6829 17.4884 10.6614 17.4884 9.71428ZM10.0698 8.32143H13.1395C13.9888 8.32143 14.6744 8.94357 14.6744 9.71428C14.6744 10.485 13.9888 11.1071 13.1395 11.1071H10.0698V8.32143ZM13.6512 16.6786H10.0698V13.8929H13.6512C14.5005 13.8929 15.186 14.515 15.186 15.2857C15.186 16.0564 14.5005 16.6786 13.6512 16.6786Z"
    />
  </IconComponent>
);
