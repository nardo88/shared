import React from "react";
import type { IconProps } from "./IconComponent";

const IconChevronUp: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 22"
      fill="currentColor"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8946 14.8009C17.5041 15.1914 16.8709 15.1914 16.4804 14.8009L11 9.32046L5.51961 14.8009C5.12908 15.1914 4.49592 15.1914 4.10539 14.8009C3.71487 14.4103 3.71487 13.7772 4.10539 13.3866L10.2929 7.19914C10.6834 6.80862 11.3166 6.80862 11.7071 7.19914L17.8946 13.3866C18.2851 13.7772 18.2851 14.4103 17.8946 14.8009Z"
      />
    </svg>
  );
};

export default IconChevronUp;
