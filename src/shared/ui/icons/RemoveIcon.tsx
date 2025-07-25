import { type FC } from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const RemoveIcon: FC<IconProps> = (props) => {
  return (
    <IconComponent size={16} viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M3.5 3.5L4.125 13.5C4.15469 14.0778 4.575 14.5 5.125 14.5H10.875C11.4272 14.5 11.8397 14.0778 11.875 13.5L12.5 3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={props.stroke || "var(--content-700)"}
      />
      <path
        d="M2.5 3.5H13.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        stroke={props.stroke || "var(--content-700)"}
      />
      <path
        d="M6 3.5V2.25C5.99971 2.15143 6.01892 2.05377 6.05651 1.96265C6.09409 1.87152 6.14933 1.78873 6.21903 1.71903C6.28873 1.64933 6.37153 1.59409 6.46265 1.55651C6.55378 1.51892 6.65143 1.49971 6.75001 1.5H9.25002C9.34859 1.49971 9.44624 1.51892 9.53737 1.55651C9.62849 1.59409 9.71129 1.64933 9.78099 1.71903C9.85069 1.78873 9.90593 1.87152 9.94352 1.96265C9.9811 2.05377 10.0003 2.15143 10 2.25V3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={props.stroke || "var(--content-700)"}
      />
      <path
        d="M8 5.5V12.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={props.stroke || "var(--content-700)"}
      />
      <path
        d="M5.75 5.5L6 12.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={props.stroke || "var(--content-700)"}
      />
      <path
        d="M10.25 5.5L10 12.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={props.stroke || "var(--content-700)"}
      />
    </IconComponent>
  );
};

export default RemoveIcon;
