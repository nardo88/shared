import React from "react";

import IconComponent, { type IconProps } from "./../IconComponent";

const EmptyIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent
    {...props}
    id="empty-icon"
    fill="none"
    size={148}
    viewBox="0 0 148 148"
  >
    <path
      d="M104.834 30.8335L129.501 55.5002"
      stroke="#181C25"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M129.501 30.8335L104.834 55.5002"
      stroke="#181C25"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M135.667 92.5L114.083 117.167L101.75 104.833"
      stroke="#181C25"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M80.1673 34.8335C80.1673 32.6244 78.3765 30.8335 76.1673 30.8335H16.334C14.1249 30.8335 12.334 32.6244 12.334 34.8335V51.5002C12.334 53.7093 14.1248 55.5002 16.334 55.5002H76.1673C78.3765 55.5002 80.1673 53.7093 80.1673 51.5002V34.8335Z"
      fill="#FFD12E"
      stroke="#181C25"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M80.1673 96.5C80.1673 94.2909 78.3765 92.5 76.1673 92.5H16.334C14.1249 92.5 12.334 94.2909 12.334 96.5V113.167C12.334 115.376 14.1248 117.167 16.334 117.167H76.1673C78.3765 117.167 80.1673 115.376 80.1673 113.167V96.5Z"
      fill="#FFD12E"
      stroke="#181C25"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default EmptyIcon;
