import React from 'react'

import IconComponent, { type IconProps } from './IconComponent'

export const CameraDisabled: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent viewBox="0 0 24 24" width={24} height={24} size={24} fill="none" {...props}>
    <path
      d="M4 3L22 21M16 11V10L20.553 7.724C20.7054 7.64784 20.8748 7.61188 21.045 7.61955C21.2152 7.62721 21.3806 7.67825 21.5256 7.76781C21.6706 7.85736 21.7902 7.98248 21.8733 8.13127C21.9563 8.28007 21.9999 8.44761 22 8.618V15.382C22.0001 15.5903 21.935 15.7935 21.814 15.9631C21.693 16.1327 21.522 16.2603 21.325 16.328"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 6H14C14.5304 6 15.0391 6.21071 15.4142 6.58579C15.7893 6.96086 16 7.46957 16 8V11M16 15V16C16 16.5304 15.7893 17.0391 15.4142 17.4142C15.0391 17.7893 14.5304 18 14 18H6C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H7"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
)
