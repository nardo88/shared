import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const ModerationFileIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent
    {...props}
    viewBox="0 0 18 16"
    id="moderation-file-icon"
    fill="none"
  >
    <g id="Group">
      <path
        id="Vector"
        d="M1.5 3.83301C1.5 3.16997 1.76339 2.53408 2.23223 2.06524C2.70107 1.5964 3.33696 1.33301 4 1.33301H14C14.663 1.33301 15.2989 1.5964 15.7678 2.06524C16.2366 2.53408 16.5 3.16997 16.5 3.83301V12.1663C16.5 12.8294 16.2366 13.4653 15.7678 13.9341C15.2989 14.4029 14.663 14.6663 14 14.6663H4C3.33696 14.6663 2.70107 14.4029 2.23223 13.9341C1.76339 13.4653 1.5 12.8294 1.5 12.1663V3.83301Z"
        stroke="#A0A9BC"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Vector_2"
        d="M11.5026 4.66626H13.1693M11.5026 7.99959H13.1693M4.83594 11.3329H13.1693M4.83594 6.33293C4.83594 6.77495 5.01153 7.19888 5.32409 7.51144C5.63665 7.824 6.06058 7.99959 6.5026 7.99959C6.94463 7.99959 7.36855 7.824 7.68112 7.51144C7.99368 7.19888 8.16927 6.77495 8.16927 6.33293C8.16927 5.8909 7.99368 5.46698 7.68112 5.15442C7.36855 4.84185 6.94463 4.66626 6.5026 4.66626C6.06058 4.66626 5.63665 4.84185 5.32409 5.15442C5.01153 5.46698 4.83594 5.8909 4.83594 6.33293Z"
        stroke="#A0A9BC"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </IconComponent>
);

export default ModerationFileIcon;
