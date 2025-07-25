import React from 'react'

import IconComponent, { type IconProps } from '../IconComponent'

export const VideoIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} viewBox="0 0 18 18" width={18} height={18} size={18}>
    <path
      d="M2.25 6.75C2.25 5.95435 2.56607 5.19129 3.12868 4.62868C3.69129 4.06607 4.45435 3.75 5.25 3.75H12.75C13.5456 3.75 14.3087 4.06607 14.8713 4.62868C15.4339 5.19129 15.75 5.95435 15.75 6.75V11.25C15.75 12.0456 15.4339 12.8087 14.8713 13.3713C14.3087 13.9339 13.5456 14.25 12.75 14.25H5.25C4.45435 14.25 3.69129 13.9339 3.12868 13.3713C2.56607 12.8087 2.25 12.0456 2.25 11.25V6.75Z"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M7.5 6.75L11.25 9L7.5 11.25V6.75Z"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconComponent>
)
