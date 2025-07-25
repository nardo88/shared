import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const CloseEye: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} viewBox="0 0 20 20" id="close_eye" fill="none">
    <path
      d="M8.58506 8.58698C8.21005 8.96212 7.99942 9.47088 7.99951 10.0013C7.99961 10.5318 8.21041 11.0405 8.58556 11.4155C8.96071 11.7905 9.46947 12.0011 9.99992 12.001C10.5304 12.0009 11.039 11.7901 11.4141 11.415"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.681 14.673C13.2782 15.5507 11.6547 16.0109 10 16C6.4 16 3.4 14 1 10C2.272 7.88 3.712 6.322 5.32 5.326M8.18 4.18C8.77904 4.05873 9.38881 3.99842 10 4C13.6 4 16.6 6 19 10C18.334 11.11 17.621 12.067 16.862 12.87M1 1L19 19"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default CloseEye;
