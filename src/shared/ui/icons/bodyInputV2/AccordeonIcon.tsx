import React from 'react'

import IconComponent, { type IconProps } from '../IconComponent'

export const AccordeonIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} viewBox="0 0 18 18" width={18} height={18} size={18}>
    <path
      d="M3 4.5C3 4.33096 3 4.03475 3 3.74996C3 3.33574 3.33579 3 3.75 3V3H14.25V3C14.6642 3 15 3.33574 15 3.74996C15 4.03475 15 4.33096 15 4.5V7.5C15 7.66904 15 7.96525 15 8.25004C15 8.66426 14.6642 9 14.25 9V9H3.75V9C3.33579 9 3 8.66426 3 8.25004C3 7.96525 3 7.66904 3 7.5V4.5Z"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M3 12H15"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 15H15"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
)
