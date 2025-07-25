import React from 'react'

import IconComponent, { type IconProps } from '../IconComponent'

const SuccessIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} viewBox="0 0 76 75" fill="none" id="m-success-icon">
    <path
      d="M0.5 37.5C0.5 42.4246 1.46997 47.3009 3.35452 51.8506C5.23907 56.4003 8.0013 60.5343 11.4835 64.0165C14.9657 67.4987 19.0997 70.2609 23.6494 72.1455C28.1991 74.03 33.0754 75 38 75C42.9246 75 47.8009 74.03 52.3506 72.1455C56.9003 70.2609 61.0343 67.4987 64.5165 64.0165C67.9987 60.5343 70.7609 56.4003 72.6455 51.8506C74.53 47.3009 75.5 42.4246 75.5 37.5C75.5 32.5754 74.53 27.6991 72.6455 23.1494C70.7609 18.5997 67.9987 14.4657 64.5165 10.9835C61.0343 7.5013 56.9003 4.73907 52.3506 2.85452C47.8009 0.969967 42.9246 0 38 0C33.0754 0 28.1991 0.969967 23.6494 2.85452C19.0997 4.73907 14.9657 7.5013 11.4835 10.9835C8.0013 14.4657 5.23907 18.5997 3.35452 23.1494C1.46997 27.6991 0.5 32.5754 0.5 37.5Z"
      fill="#FFD12E"
      fillOpacity="0.2"
    />
    <path
      d="M25.5 37.4998L33.8333 45.8332L50.5 29.1665"
      stroke="#FFD12E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
)

export default SuccessIcon
