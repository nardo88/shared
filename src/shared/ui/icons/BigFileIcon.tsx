import React from 'react'

import { type IconProps } from './IconComponent'

const BigFileIcon: React.FC<IconProps> = (props): React.ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="66"
    height="78"
    viewBox="0 0 66 78"
    fill="none"
    {...props}
  >
    <path
      d="M43.625 1.125V17.9583C43.625 19.0745 44.0684 20.1449 44.8576 20.9341C45.6468 21.7233 46.7172 22.1667 47.8333 22.1667H64.6667"
      stroke="#FFD12E"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M56.25 60.0417H26.7917C24.5594 60.0417 22.4186 59.1549 20.8402 57.5765C19.2618 55.998 18.375 53.8572 18.375 51.625V9.54167C18.375 7.30943 19.2618 5.16862 20.8402 3.59018C22.4186 2.01175 24.5594 1.125 26.7917 1.125H43.625L64.6667 22.1667V51.625C64.6667 53.8572 63.7799 55.998 62.2015 57.5765C60.623 59.1549 58.4822 60.0417 56.25 60.0417Z"
      stroke="#FFD12E"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M47.8327 60.0416V68.4583C47.8327 70.6905 46.9459 72.8314 45.3675 74.4098C43.7891 75.9882 41.6483 76.875 39.416 76.875H9.95768C7.72544 76.875 5.58463 75.9882 4.0062 74.4098C2.42777 72.8314 1.54102 70.6905 1.54102 68.4583V26.375C1.54102 24.1427 2.42777 22.0019 4.0062 20.4235C5.58463 18.8451 7.72544 17.9583 9.95768 17.9583H18.3744"
      stroke="#FFD12E"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default BigFileIcon
