import React from "react";

import IconComponent, { type IconProps } from "../IconComponent";

export const PlaceholderIcon: React.FC<IconProps> = (
  props
): React.ReactNode => (
  <IconComponent
    {...props}
    fill="none"
    id="PlaceholderIcon"
    viewBox="0 0 46 46"
    width={46}
    height={46}
  >
    <g clipPath="url(#clip0_9924_58539)">
      <path
        d="M46 23C46 35.7017 35.7017 46 23 46C10.2982 46 0 35.7017 0 23C0 10.2982 10.2982 0 23 0C35.7017 0 46 10.2982 46 23Z"
        fill="#E8EAEE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.9578 46.0005C15.9836 45.9879 9.73735 42.8708 5.52734 37.9574C8.49686 33.6195 17.8772 31.436 23.0005 31.436C28.1237 31.436 37.5034 33.6193 40.4733 37.9569C36.2633 42.8705 30.0168 45.9879 23.0424 46.0005H22.9578ZM22.1101 27.4454C17.2033 26.9169 13.8432 21.7131 15.0422 16.904C17.2499 8.04975 31.0502 9.19989 31.1785 19.1716C31.1785 24.0673 27.0271 27.9739 22.1101 27.4454Z"
        fill="#D0D4DD"
      />
    </g>
  </IconComponent>
);
