import IconComponent, { type IconProps } from "./IconComponent";

export const PauseBtnICon: React.FC<IconProps> = (props): React.ReactNode => {
  return (
    <IconComponent viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
    </IconComponent>
  );
};
