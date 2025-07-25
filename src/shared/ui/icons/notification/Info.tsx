import React from 'react'

import IconComponent, { type IconProps } from '.././IconComponent'

const Info: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="info" fill="none" size={20} viewBox="0 0 20 20">
    <g id="Colored / Checked">
      <path
        id="Vector"
        opacity="0.2"
        d="M18.3307 9.99935C18.3307 14.6014 14.5995 18.3327 9.9974 18.3327C5.39531 18.3327 1.66406 14.6014 1.66406 9.99935C1.66406 5.39727 5.39531 1.66602 9.9974 1.66602C14.5995 1.66602 18.3307 5.39727 18.3307 9.99935Z"
        fill="#66B700"
      />
      <path
        id="Vector_2"
        d="M14.4089 6.07812L8.75469 11.739L6.42052 9.41146L5.24219 10.5898L8.75635 14.0956L15.5876 7.25646L14.4089 6.07812Z"
        fill="#66B700"
      />
    </g>
  </IconComponent>
)

export default Info
