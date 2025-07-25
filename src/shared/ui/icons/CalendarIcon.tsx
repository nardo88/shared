import React from 'react'

import IconComponent, { type IconProps } from './IconComponent'

const CalendarIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="calendar-icon" viewBox="0 0 16 16" fill="none">
    <path
      d="M10.668 2V4.66667M5.33464 2V4.66667M2.66797 7.33333H13.3346M7.33464 10H8.0013V12M2.66797 4.66667C2.66797 4.31304 2.80844 3.97391 3.05849 3.72386C3.30854 3.47381 3.64768 3.33333 4.0013 3.33333H12.0013C12.3549 3.33333 12.6941 3.47381 12.9441 3.72386C13.1942 3.97391 13.3346 4.31304 13.3346 4.66667V12.6667C13.3346 13.0203 13.1942 13.3594 12.9441 13.6095C12.6941 13.8595 12.3549 14 12.0013 14H4.0013C3.64768 14 3.30854 13.8595 3.05849 13.6095C2.80844 13.3594 2.66797 13.0203 2.66797 12.6667V4.66667Z"
      stroke="#66707F"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconComponent>
)

export default CalendarIcon
