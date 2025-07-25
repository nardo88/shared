import React from 'react'

import IconComponent, { type IconProps } from '../IconComponent'

export const TextIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} viewBox="0 0 18 18" width={18} height={18} size={18}>
    <path
      d="M3 4.5H15M3 9H10.5M3 13.5H13.5"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
)
