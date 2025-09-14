import { type FC, type ReactNode, useState } from 'react'

import { NotificationContext } from '../../context'
import type { INotification } from '../../types'
import { NotificationList } from '../NotificationList/NotificationList'

interface IMainProps {
  children: ReactNode
}

export const Main: FC<IMainProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<INotification[]>([])
  return (
    <NotificationContext.Provider value={{ notifications, setNotifications }}>
      <NotificationList />
      {children}
    </NotificationContext.Provider>
  )
}
