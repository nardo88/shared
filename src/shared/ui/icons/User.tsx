import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const User: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent fill="none" {...props} viewBox="0 0 40 40" id="user">
    <g clipPath="url(#clip0_5160_87803)">
      <path
        d="M40 20C40 31.045 31.045 40 20 40C8.955 40 0 31.045 0 20C0 8.955 8.955 0 20 0C31.045 0 40 8.955 40 20Z"
        fill="#E8EAEE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9624 40.0004C13.8984 39.9891 8.46729 37.2786 4.80664 33.0064C7.38883 29.2343 15.5456 27.3356 20.0007 27.3356C24.4557 27.3356 32.6119 29.2341 35.1945 33.0059C31.5338 37.2784 26.1025 39.9891 20.0383 40.0004H19.9624ZM19.2264 23.8655C14.9597 23.4059 12.0378 18.8809 13.0805 14.6991C15.0002 6.99973 27.0004 7.99985 27.112 16.6709C27.112 20.9281 23.502 24.325 19.2264 23.8655Z"
        fill="#A0A9BC"
      />
    </g>
    <defs>
      <clipPath id="clip0_5160_87803">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </IconComponent>
);

export default User;
