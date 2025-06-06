import React from "react";

import IconComponent, { type IconProps } from "../IconComponent";

const FolderIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent
    id="folder-icon"
    fill="none"
    size={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M5 4H9L12 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z"
      stroke="#A0A9BC"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
);

export default FolderIcon;
