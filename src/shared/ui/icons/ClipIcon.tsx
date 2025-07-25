import React from 'react'

import IconComponent, { type IconProps } from './IconComponent'

const ClipIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <IconComponent {...props} id="clip-icon" viewBox="0 0 16 16" fill="none">
    <path
      d="M6.75312 6.00001V10.4953C6.75832 10.824 6.89254 11.1375 7.12684 11.3682C7.36114 11.5988 7.67671 11.728 8.00547 11.728C8.33423 11.728 8.6498 11.5988 8.8841 11.3682C9.11839 11.1375 9.25262 10.824 9.25781 10.4953L9.26187 4.60314C9.26528 4.32218 9.21289 4.04334 9.10773 3.78278C9.00257 3.52222 8.84674 3.28512 8.64926 3.08524C8.45179 2.88535 8.2166 2.72665 7.95734 2.61834C7.69807 2.51003 7.41989 2.45425 7.13891 2.45425C6.85793 2.45425 6.57974 2.51003 6.32048 2.61834C6.06121 2.72665 5.82602 2.88535 5.62855 3.08524C5.43108 3.28512 5.27524 3.52222 5.17008 3.78278C5.06492 4.04334 5.01253 4.32218 5.01594 4.60314V10.535C5.01021 10.9306 5.08318 11.3233 5.23059 11.6904C5.378 12.0575 5.59691 12.3916 5.8746 12.6734C6.1523 12.9551 6.48323 13.1788 6.84815 13.3315C7.21308 13.4842 7.60472 13.5629 8.00031 13.5629C8.3959 13.5629 8.78754 13.4842 9.15247 13.3315C9.5174 13.1788 9.84833 12.9551 10.126 12.6734C10.4037 12.3916 10.6226 12.0575 10.77 11.6904C10.9174 11.3233 10.9904 10.9306 10.9847 10.535V4.99189"
      stroke="#66707F"
      strokeWidth="1.3"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </IconComponent>
)

export default ClipIcon
