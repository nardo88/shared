import React from 'react'

import IconComponent, { type IconComponentProps } from './IconComponent'

interface ArrowType extends IconComponentProps {
  active?: boolean
}

const ArrowNext: React.FC<ArrowType> = (props): React.ReactNode => (
  <IconComponent {...props} fill="none" id="left" viewBox="0 0 50 50">
    <path
      d="M15 25H34M34 25L24.1481 15M34 25L24.1481 35"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="25" cy="25" r="24" strokeWidth="2" />
  </IconComponent>
)

export default ArrowNext
