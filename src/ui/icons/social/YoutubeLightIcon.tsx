import React from "react";

import IconComponent, { type IconProps } from "../IconComponent";

const YoutubeIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent
    id="youtube-icon"
    fill="none"
    size={30}
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      d="M2.5 10C2.5 8.67392 3.02678 7.40215 3.96447 6.46447C4.90215 5.52678 6.17392 5 7.5 5H22.5C23.8261 5 25.0979 5.52678 26.0355 6.46447C26.9732 7.40215 27.5 8.67392 27.5 10V20C27.5 21.3261 26.9732 22.5979 26.0355 23.5355C25.0979 24.4732 23.8261 25 22.5 25H7.5C6.17392 25 4.90215 24.4732 3.96447 23.5355C3.02678 22.5979 2.5 21.3261 2.5 20V10Z"
      stroke="#181C25"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 11.25L18.75 15L12.5 18.75V11.25Z"
      stroke="#181C25"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default YoutubeIcon;
