import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

export const ScreenShare: React.FC<IconProps> = (props) => {
  return (
    <IconComponent viewBox="0 0 28 28" fill="none" {...props}>
      <path
        d="M8.81477 22.1663H19.1851M10.8888 18.083V22.1663M17.1111 18.083V22.1663M4.66663 6.85384C4.66663 6.5831 4.77588 6.32345 4.97037 6.132C5.16485 5.94056 5.42862 5.83301 5.70366 5.83301H22.2963C22.5713 5.83301 22.8351 5.94056 23.0296 6.132C23.224 6.32345 23.3333 6.5831 23.3333 6.85384V17.0622C23.3333 17.3329 23.224 17.5926 23.0296 17.784C22.8351 17.9755 22.5713 18.083 22.2963 18.083H5.70366C5.42862 18.083 5.16485 17.9755 4.97037 17.784C4.77588 17.5926 4.66663 17.3329 4.66663 17.0622V6.85384Z"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconComponent>
  );
};
