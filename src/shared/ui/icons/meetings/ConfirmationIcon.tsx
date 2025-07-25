import React from 'react'

import IconComponent, { type IconProps } from '../IconComponent'

const ConfirmationIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent
    {...props}
    viewBox="0 0 100 101"
    fill="none"
    width={100}
    height={101}
    id="confirmation-icon"
  >
    <path
      d="M12.5 50.5C12.5 55.4246 13.47 60.3009 15.3545 64.8506C17.2391 69.4003 20.0013 73.5343 23.4835 77.0165C26.9657 80.4987 31.0997 83.2609 35.6494 85.1455C40.1991 87.03 45.0754 88 50 88C54.9246 88 59.8009 87.03 64.3506 85.1455C68.9003 83.2609 73.0343 80.4987 76.5165 77.0165C79.9987 73.5343 82.7609 69.4003 84.6455 64.8506C86.53 60.3009 87.5 55.4246 87.5 50.5C87.5 40.5544 83.5491 31.0161 76.5165 23.9835C69.4839 16.9509 59.9456 13 50 13C40.0544 13 30.5161 16.9509 23.4835 23.9835C16.4509 31.0161 12.5 40.5544 12.5 50.5Z"
      fill="#A0A9BC"
    />
    <path
      d="M50 33.8334V50.5M50 67.1667H50.0417"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
)

export default ConfirmationIcon
