import React from 'react'

import IconComponent, { type IconProps } from '../IconComponent'

export const InfoIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} fill="none" width={24} height={24} viewBox="0 0 24 24">
    <g fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="8.5" />
      <path stroke-linecap="round" d="M12 10.5v7M12 8V7" />
    </g>
  </IconComponent>
)
