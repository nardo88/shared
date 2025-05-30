import { type FC } from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const DoneIcon: FC<IconProps> = (props) => {
  return (
    <IconComponent
      {...props}
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M3.33203 7.99984L6.66536 11.3332L13.332 4.6665"
        stroke="#66B700"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconComponent>
  );
};

export default DoneIcon;
