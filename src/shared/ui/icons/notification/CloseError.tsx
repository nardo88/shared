import React from 'react'

import IconComponent, { type IconProps } from '.././IconComponent'

const CloseError: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="crossError" fill="none" size={20} viewBox="0 0 20 20">
    <g id="close">
      <path
        id="Vector"
        d="M15.8307 5.34102L14.6557 4.16602L9.9974 8.82435L5.33906 4.16602L4.16406 5.34102L8.8224 9.99935L4.16406 14.6577L5.33906 15.8327L9.9974 11.1743L14.6557 15.8327L15.8307 14.6577L11.1724 9.99935L15.8307 5.34102Z"
        fill="#FF3C38"
      />
    </g>
  </IconComponent>
)

export default CloseError
