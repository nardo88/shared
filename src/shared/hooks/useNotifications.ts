import { useContext } from 'react'

import {
  NotificationContext,
  type NotificationTimeoutType,
  type NotificationType,
} from '@features/Notifications'

import { createId } from '@shared/helpers/createId'

export interface INotificationOpt {
  text: string
  type?: NotificationType
  timeout?: NotificationTimeoutType
}

export const useNotifications = () => {
  const { setNotifications } = useContext(NotificationContext)

  const addNotifications = (opt: INotificationOpt) => {
    const { timeout = 3000, type = 'info', text } = opt
    setNotifications((p) => [{ _id: createId(), text, timeout, type }, ...p])
  }

  return { addNotifications }
}
