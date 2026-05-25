import React from 'react'

import IconComponent, { type IconProps } from './IconComponent'

export const Description: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M3.33325 5.33334H12.6666M3.33325 8.00001H12.6666M3.33325 10.6667H7.33325"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
)
