import { type FC, useContext } from 'react'

import Portal from '@shared/ui/Portal'

import { NotificationContext } from '../../context'
import { Notification } from '../Notification/Notification'

import cls from './NotificationList.module.scss'

export const NotificationList: FC = () => {
  const { notifications } = useContext(NotificationContext)
  console.log('notifications: ', notifications)

  if (!notifications.length) return null

  return (
    <Portal>
      <div className={cls.notificationList}>
        {notifications.map((item) => (
          <Notification key={item._id} {...item} />
        ))}
      </div>
    </Portal>
  )
}
