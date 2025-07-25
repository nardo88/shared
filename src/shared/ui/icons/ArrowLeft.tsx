import React from 'react'

import IconComponent, { type IconProps } from './IconComponent'

const Left: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} fill="none" id="left">
    <path
      d="M15 5L8 12L15 19"
      stroke="#331C20"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
)

export default Left
