import React from 'react'

import IconComponent, { type IconProps } from '../IconComponent'

export const ImageIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} viewBox="0 0 18 18" width={18} height={18} size={18}>
    <path
      d="M11.25 6H11.2575"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.25 4.5C2.25 3.90326 2.48705 3.33097 2.90901 2.90901C3.33097 2.48705 3.90326 2.25 4.5 2.25H13.5C14.0967 2.25 14.669 2.48705 15.091 2.90901C15.5129 3.33097 15.75 3.90326 15.75 4.5V13.5C15.75 14.0967 15.5129 14.669 15.091 15.091C14.669 15.5129 14.0967 15.75 13.5 15.75H4.5C3.90326 15.75 3.33097 15.5129 2.90901 15.091C2.48705 14.669 2.25 14.0967 2.25 13.5V4.5Z"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M2.25 12L6 8.24999C6.696 7.58024 7.554 7.58024 8.25 8.24999L12 12"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M10.5 10.5L11.25 9.74999C11.946 9.08024 12.804 9.08024 13.5 9.74999L15.75 12"
      stroke="#181C25"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </IconComponent>
)
