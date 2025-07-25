import React from 'react'

import IconComponent, { type IconProps } from '../IconComponent'

export const StepIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} viewBox="0 0 18 18" width={18} height={18} size={18}>
    <path
      d="M3 15H6V12H9V9H12V6H15"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 8.25L8.25 3M8.25 3V6M8.25 3H5.25"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
)
