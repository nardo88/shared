import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const PlusIcon: React.FC<IconProps> = (props) => {
  return (
    <IconComponent height={22} viewBox="0 0 22 22" width={22} {...props}>
      <path
        d="M20.625 11C20.625 5.6862 16.3138 1.375 11 1.375C5.6862 1.375 1.375 5.6862 1.375 11C1.375 16.3138 5.6862 20.625 11 20.625C16.3138 20.625 20.625 16.3138 20.625 11Z"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        fill="none"
      />
      <path
        d="M11 6.875V15.125M15.125 11H6.875"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconComponent>
  );
};

export default PlusIcon;
