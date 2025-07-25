import React from 'react'

import IconComponent, { type IconProps } from './IconComponent'

const CheckIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="check-icon" fill="none" viewBox="0 0 17 16">
    <path
      d="M3.83203 8.00008L7.16536 11.3334L13.832 4.66675"
      stroke="#66B700"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
)

export default CheckIcon
