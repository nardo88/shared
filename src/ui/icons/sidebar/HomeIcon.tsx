import React from "react";

import IconComponent, { type IconProps } from "../IconComponent";

const HomeIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent
    id="home-icon"
    fill="none"
    size={20}
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      d="M4.16667 10H2.5L10 2.5L17.5 10H15.8333M4.16667 10V15.8333C4.16667 16.2754 4.34226 16.6993 4.65482 17.0118C4.96738 17.3244 5.39131 17.5 5.83333 17.5H14.1667C14.6087 17.5 15.0326 17.3244 15.3452 17.0118C15.6577 16.6993 15.8333 16.2754 15.8333 15.8333V10"
      stroke="#A0A9BC"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 17.5V12.5C7.5 12.058 7.6756 11.6341 7.98816 11.3215C8.30072 11.009 8.72464 10.8334 9.16667 10.8334H10.8333C11.2754 10.8334 11.6993 11.009 12.0118 11.3215C12.3244 11.6341 12.5 12.058 12.5 12.5V17.5"
      stroke="#A0A9BC"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default HomeIcon;
