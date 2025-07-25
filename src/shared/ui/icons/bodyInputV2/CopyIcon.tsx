import React from 'react'

import IconComponent, { type IconProps } from '../IconComponent'

export const CopyIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} viewBox="0 0 21 20" width={21} height={20}>
    <path
      d="M6.92188 8.33333C6.92188 7.89131 7.09747 7.46738 7.41003 7.15482C7.72259 6.84226 8.14651 6.66667 8.58854 6.66667H15.2552C15.6972 6.66667 16.1212 6.84226 16.4337 7.15482C16.7463 7.46738 16.9219 7.89131 16.9219 8.33333V15C16.9219 15.442 16.7463 15.8659 16.4337 16.1785C16.1212 16.4911 15.6972 16.6667 15.2552 16.6667H8.58854C8.14651 16.6667 7.72259 16.4911 7.41003 16.1785C7.09747 15.8659 6.92188 15.442 6.92188 15V8.33333Z"
      stroke="#66707F"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M13.5859 6.66667V5C13.5859 4.55797 13.4103 4.13405 13.0978 3.82149C12.7852 3.50893 12.3613 3.33333 11.9193 3.33333H5.2526C4.81058 3.33333 4.38665 3.50893 4.07409 3.82149C3.76153 4.13405 3.58594 4.55797 3.58594 5V11.6667C3.58594 12.1087 3.76153 12.5326 4.07409 12.8452C4.38665 13.1577 4.81058 13.3333 5.2526 13.3333H6.91927"
      stroke="#66707F"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconComponent>
)
