import React from 'react'

import IconComponent, { type IconProps } from '../IconComponent'

const DEFlag: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="deflag" viewBox="0 0 32 24">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 32">
      <path fill="#cc2b1d" d="M1 11H31V21H1z" />
      <path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" />
      <path
        d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
        transform="rotate(180 16 24)"
        fill="#f8d147"
      />
      <path
        d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
        opacity=".15"
      />
      <path
        d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
        fill="#fff"
        opacity=".2"
      />
    </svg>
  </IconComponent>
)

export default DEFlag
