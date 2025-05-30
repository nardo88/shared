import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

export const MicEnabled: React.FC<IconProps> = (props) => {
  return (
    <IconComponent viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9.31592 5.68421C9.31592 4.97231 9.59872 4.28957 10.1021 3.78619C10.6055 3.2828 11.2882 3 12.0001 3C12.712 3 13.3948 3.2828 13.8982 3.78619C14.4015 4.28957 14.6843 4.97231 14.6843 5.68421V10.1579C14.6843 10.8698 14.4015 11.5525 13.8982 12.0559C13.3948 12.5593 12.712 12.8421 12.0001 12.8421C11.2882 12.8421 10.6055 12.5593 10.1021 12.0559C9.59872 11.5525 9.31592 10.8698 9.31592 10.1579V5.68421Z"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.73682 10.1582C5.73682 11.8193 6.39668 13.4124 7.57125 14.5869C8.74582 15.7615 10.3389 16.4214 12 16.4214M12 16.4214C13.6611 16.4214 15.2541 15.7615 16.4287 14.5869C17.6033 13.4124 18.2631 11.8193 18.2631 10.1582M12 16.4214V20.0003M8.42103 20.0003H15.5789"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconComponent>
  );
};
