import React from 'react'

import IconComponent, { type IconComponentProps } from './IconComponent'

interface ArrowType extends IconComponentProps {
  active?: boolean
}

const ArrowPrev: React.FC<ArrowType> = (props): React.ReactNode => (
  <IconComponent fill="none" id="left" viewBox="0 0 50 50" size={50} {...props}>
    <path
      d="M35 25L16 25M16 25L25.8519 35M16 25L25.8519 15"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="25" cy="25" r="24" transform="rotate(-180 25 25)" strokeWidth="2" />
  </IconComponent>
)

export default ArrowPrev
