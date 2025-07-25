import IconComponent, { type IconProps } from "./IconComponent";

export const SubtitlesIcon: React.FC<IconProps> = (props) => {
  return (
    <IconComponent height={24} viewBox="0 0 24 24" width={24} {...props}>
      <path
        d="M5,11h2v2H5V11z M15,15H5v2h10V15z M19,15h-2v2h2V15z M19,11H9v2h10V11z M22,6H2v14h20V6z M3,7h18v12H3V7z"
        fill="white"
      />
    </IconComponent>
  );
};
