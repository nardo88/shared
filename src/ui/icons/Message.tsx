import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

export const Message: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    {...props}
  >
    <path
      d="M9.85181 10.9801H18.1481M9.85181 15.0977H16.074M20.2222 5.83301C21.0473 5.83301 21.8386 6.15837 22.4221 6.73753C23.0055 7.31669 23.3333 8.10219 23.3333 8.92124V17.1565C23.3333 17.9756 23.0055 18.7611 22.4221 19.3403C21.8386 19.9194 21.0473 20.2448 20.2222 20.2448H15.037L9.85181 23.333V20.2448H7.77774C6.95262 20.2448 6.1613 19.9194 5.57785 19.3403C4.9944 18.7611 4.66663 17.9756 4.66663 17.1565V8.92124C4.66663 8.10219 4.9944 7.31669 5.57785 6.73753C6.1613 6.15837 6.95262 5.83301 7.77774 5.83301H20.2222Z"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);
