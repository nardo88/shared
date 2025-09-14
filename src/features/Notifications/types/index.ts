import type { Dispatch, SetStateAction } from 'react'

export type NotificationType = 'error' | 'info' | 'warning' | 'success'
export type NotificationTimeoutType = 3000 | 0

export interface INotification {
  _id: string
  type: NotificationType
  timeout: NotificationTimeoutType
  text: string
}

export interface INotificationContext {
  notifications: INotification[]
  setNotifications: Dispatch<SetStateAction<INotification[]>>
}
