import React from 'react'

import IconComponent, { type IconProps } from './IconComponent'

const AddIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="add" viewBox="0 0 24 24" width={24} height={24} size={24}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={'#000000'}
      fill={'none'}
      {...props}
    >
      <path
        d="M12 8V16M16 12L8 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  </IconComponent>
)

export default AddIcon
