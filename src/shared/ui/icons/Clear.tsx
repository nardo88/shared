import React from 'react'

import IconComponent, { type IconProps } from './IconComponent'

const Clear: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="clear" fill="none">
    <circle cx="12" cy="12" r="12" fill="#F0EEEE" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.50483 7.50501C7.7782 7.23165 8.22141 7.23165 8.49478 7.50501L11.9998 11.01L15.5048 7.50501C15.7782 7.23165 16.2214 7.23165 16.4948 7.50501C16.7681 7.77838 16.7681 8.2216 16.4948 8.49496L12.9898 12L16.4948 15.505C16.7681 15.7784 16.7681 16.2216 16.4948 16.495C16.2214 16.7683 15.7782 16.7683 15.5048 16.495L11.9998 12.9899L8.49478 16.495C8.22141 16.7683 7.7782 16.7683 7.50483 16.495C7.23146 16.2216 7.23146 15.7784 7.50483 15.505L11.0099 12L7.50483 8.49496C7.23146 8.2216 7.23146 7.77838 7.50483 7.50501Z"
      fill="#331C20"
    />
  </IconComponent>
)

export default Clear
