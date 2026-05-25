import React from 'react'

import IconComponent, { type IconProps } from './IconComponent'

export const ArrowBottom: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} fill="none" size={24} viewBox="0 0 16 16">
    <path d="M13 6L8 11L3 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </IconComponent>
)
