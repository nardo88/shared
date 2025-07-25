import React from "react";

import IconComponent, { type IconProps } from "../IconComponent";

export const AcceptedIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} fill="none" id="AcceptedIcon">
    <path
      d="M9.16667 15.8334H4.16667C3.72464 15.8334 3.30072 15.6578 2.98816 15.3453C2.67559 15.0327 2.5 14.6088 2.5 14.1667V5.83341C2.5 5.39139 2.67559 4.96746 2.98816 4.6549C3.30072 4.34234 3.72464 4.16675 4.16667 4.16675H15.8333C16.2754 4.16675 16.6993 4.34234 17.0118 4.6549C17.3244 4.96746 17.5 5.39139 17.5 5.83341V10.8334"
      stroke="#999999"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 5.8335L10 10.8335L17.5 5.8335M12.5 15.8335L14.1667 17.5002L17.5 14.1668"
      stroke="#999999"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);
