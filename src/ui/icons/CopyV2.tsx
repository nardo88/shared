import IconComponent, { type IconComponentProps } from "./IconComponent";

export const CopyV2: React.FC<IconComponentProps> = (
  props
): React.ReactNode => {
  return (
    <IconComponent fill="none" {...props} viewBox="0 0 20 20">
      <path
        d="M6.66602 8.33317C6.66602 7.89114 6.84161 7.46722 7.15417 7.15466C7.46673 6.8421 7.89065 6.6665 8.33268 6.6665H14.9993C15.4414 6.6665 15.8653 6.8421 16.1779 7.15466C16.4904 7.46722 16.666 7.89114 16.666 8.33317V14.9998C16.666 15.4419 16.4904 15.8658 16.1779 16.1783C15.8653 16.4909 15.4414 16.6665 14.9993 16.6665H8.33268C7.89065 16.6665 7.46673 16.4909 7.15417 16.1783C6.84161 15.8658 6.66602 15.4419 6.66602 14.9998V8.33317Z"
        stroke={props.stroke || "#181C25"}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.333 6.66659V4.99992C13.333 4.55789 13.1574 4.13397 12.8449 3.82141C12.5323 3.50885 12.1084 3.33325 11.6663 3.33325H4.99967C4.55765 3.33325 4.13372 3.50885 3.82116 3.82141C3.5086 4.13397 3.33301 4.55789 3.33301 4.99992V11.6666C3.33301 12.1086 3.5086 12.5325 3.82116 12.8451C4.13372 13.1577 4.55765 13.3333 4.99967 13.3333H6.66634"
        stroke={props.stroke || "#181C25"}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconComponent>
  );
};
