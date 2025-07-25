import React from 'react'

import IconComponent, { type IconProps } from './IconComponent'

const BreadcrumbsIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="arrow" viewBox="0 0 24 24" fill="none">
    <path
      d="M9 6L15 12L9 18"
      stroke="#A0A9BC"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
)

export default BreadcrumbsIcon
