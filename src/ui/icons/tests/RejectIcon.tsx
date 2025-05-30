import IconComponent, { type IconProps } from "../IconComponent";

const RejectIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent
    {...props}
    id="rejext-icon"
    fill="none"
    size={27}
    viewBox="0 0 27 27"
  >
    <path
      d="M1.00098 1L26.001 26"
      stroke="#181C25"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.001 1L1.00098 26"
      stroke="#181C25"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default RejectIcon;
