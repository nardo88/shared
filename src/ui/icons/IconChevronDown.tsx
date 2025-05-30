import type { IconProps } from "./IconComponent";

const IconChevronDown: React.FC<IconProps> = (props) => {
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
        d="M4.10539 7.19914C4.49592 6.80862 5.12908 6.80862 5.51961 7.19914L11 12.6795L16.4804 7.19914C16.8709 6.80862 17.5041 6.80862 17.8946 7.19914C18.2851 7.58967 18.2851 8.22283 17.8946 8.61336L11.7071 14.8009C11.3166 15.1914 10.6834 15.1914 10.2929 14.8009L4.10539 8.61336C3.71487 8.22283 3.71487 7.58967 4.10539 7.19914Z"
      />
    </svg>
  );
};

export default IconChevronDown;
