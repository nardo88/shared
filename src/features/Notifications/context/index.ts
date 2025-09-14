import { createContext } from 'react'

import type { INotificationContext } from '../types'

export const NotificationContext = createContext<INotificationContext>({
  notifications: [],
  setNotifications: () => null,
})
