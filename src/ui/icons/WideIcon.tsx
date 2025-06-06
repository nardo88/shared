import IconComponent, { type IconProps } from "./IconComponent";

export const WideIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"
    />
  </IconComponent>
);
