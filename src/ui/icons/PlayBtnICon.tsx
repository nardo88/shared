import IconComponent, { type IconProps } from "./IconComponent";

export const PlayBtnICon: React.FC<IconProps> = (props): React.ReactNode => {
  return (
    <IconComponent viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
    </IconComponent>
  );
};
