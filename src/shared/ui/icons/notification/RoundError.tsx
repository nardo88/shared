import React from 'react'

import IconComponent, { type IconProps } from '.././IconComponent'

const RoundError: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="roundError" fill="none" size={18} viewBox="0 0 18 18">
    <path
      id="Vector"
      opacity="0.2"
      d="M17.3307 8.99935C17.3307 13.6014 13.5995 17.3327 8.9974 17.3327C4.39531 17.3327 0.664062 13.6014 0.664062 8.99935C0.664062 4.39727 4.39531 0.666016 8.9974 0.666016C13.5995 0.666016 17.3307 4.39727 17.3307 8.99935Z"
      fill="#FF3C38"
    />
  </IconComponent>
)

export default RoundError
