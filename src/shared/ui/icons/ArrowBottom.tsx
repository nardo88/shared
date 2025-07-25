import React from 'react'

import IconComponent, { type IconProps } from './IconComponent'

const ArrowBottom: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="arrow-bottom" fill="none" size={16} viewBox="0 0 16 16">
    <path
      stroke="#331C20"
      d="M13 6L8 11L3 6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
)

export default ArrowBottom
