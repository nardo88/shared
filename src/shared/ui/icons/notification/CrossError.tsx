import React from 'react'

import IconComponent, { type IconProps } from '.././IconComponent'

const CrossError: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="crossError" fill="none" size={12} viewBox="0 0 12 12">
    <g id="Mark">
      <path
        id="Vector"
        d="M3 3L9 9M3 9L9 3"
        stroke="#FF3C38"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </IconComponent>
)

export default CrossError
