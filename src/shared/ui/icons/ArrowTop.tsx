import React from 'react'

import IconComponent, { type IconComponentProps } from './IconComponent'

interface ArrowType extends IconComponentProps {
  active?: boolean
}

export const ArrowTop: React.FC<ArrowType> = (props): React.ReactNode => (
  <IconComponent fill="none" viewBox="0 0 20 20" {...props}>
    <path
      d="M10 4.16663V15.8333M10 4.16663L15 9.16663M10 4.16663L5 9.16663"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
)
