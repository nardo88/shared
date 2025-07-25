import React from 'react'

import IconComponent, { type IconComponentProps } from './IconComponent'

const Close: React.FC<IconComponentProps> = (props): React.ReactNode => {
  return (
    <IconComponent id="close" fill="none" {...props}>
      <path
        d="M5 5L12 12M12 12L19 19M12 12L19 5M12 12L5 19"
        stroke="#331C20"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconComponent>
  )
}

export default Close
