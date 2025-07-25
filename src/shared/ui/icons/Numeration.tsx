import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

export const Numeration: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent
    viewBox="0 0 36 24"
    width={36}
    height={24}
    fill="none"
    {...props}
  >
    <rect width="30" height="24" rx="8" fill="#DBDEF6" />
    <path
      d="M34.2887 9.23399C35.7983 10.7865 35.7982 13.2584 34.2887 14.8109L27.3678 21.9287C24.8646 24.5031 20.5 22.731 20.5 19.1403L20.5 4.90465C20.5 1.31392 24.8647 -0.458211 27.3678 2.11619L34.2887 9.23399Z"
      fill="#DBDEF6"
    />
  </IconComponent>
);
