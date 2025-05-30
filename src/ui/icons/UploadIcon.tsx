import React from "react";

import IconComponent, { type IconProps } from "./IconComponent";

const UploadIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent viewBox="0 0 20 20" fill="none" {...props} id="upload">
    <g id="Icons">
      <path
        d="M5.83452 15.1333C4.79475 15.1333 3.79756 14.7382 3.06234 14.035C2.32711 13.3317 1.91406 12.3779 1.91406 11.3833C1.91406 10.3887 2.32711 9.43491 3.06234 8.73165C3.79756 8.02839 4.79475 7.6333 5.83452 7.6333C6.08009 6.53928 6.79849 5.57787 7.83167 4.96056C8.34326 4.6549 8.91672 4.44292 9.51933 4.33673C10.1219 4.23053 10.7419 4.2322 11.3438 4.34163C11.9457 4.45107 12.5177 4.66613 13.0273 4.97453C13.5368 5.28294 13.9739 5.67865 14.3135 6.13907C14.6531 6.5995 14.8886 7.11562 15.0066 7.65796C15.1246 8.20031 15.1228 8.75826 15.0012 9.29997H15.8345C16.6081 9.29997 17.3499 9.60726 17.8969 10.1542C18.4439 10.7012 18.7512 11.4431 18.7512 12.2166C18.7512 12.9902 18.4439 13.732 17.8969 14.279C17.3499 14.826 16.6081 15.1333 15.8345 15.1333H15.0012"
        stroke="#66707F"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 12.634L10 10.134M10 10.134L12.5 12.634M10 10.134V17.634"
        stroke="#66707F"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </IconComponent>
);

export default UploadIcon;
