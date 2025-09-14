import { type FC, useContext, useEffect, useRef } from 'react'

import { NotificationContext } from '@features/Notifications/context'

import { classNames } from '@shared/helpers/classNames'
import { Text } from '@shared/ui/Text/Text'
import CloseIcon from '@shared/ui/icons/CloseIcon'
import ErrorIcon from '@shared/ui/icons/ErrorIcon'
import { SuccessIcon } from '@shared/ui/icons/SuccessIcon'
import { WarningIcon } from '@shared/ui/icons/WarningIcon'
import { InfoIcon } from '@shared/ui/icons/progressStatuses'

import type { INotification } from '../../types'

import cls from './Notification.module.scss'

interface INotificationProps extends INotification {
  className?: string
}

export const Notification: FC<INotificationProps> = (props) => {
  const { className, _id, text, timeout, type } = props
  const { setNotifications } = useContext(NotificationContext)

  const ref = useRef<HTMLDivElement>(null)

  const hide = () => {
    ref.current?.classList?.remove(cls.show)
    setTimeout(() => setNotifications((p) => p.filter((i) => i._id !== _id)))
  }

  useEffect(() => {
    setTimeout(() => {
      ref.current?.classList.add(cls.show)
    })
  }, [])

  return (
    <div
      ref={ref}
      onClick={hide}
      className={classNames(cls.notification, {}, [className, cls[type]])}
    >
      <div className={cls.iconWrapper}>
        {type === 'success' && <SuccessIcon className={cls.successIcon} />}
        {type === 'info' && <InfoIcon className={cls.infoIcon} />}
        {type === 'error' && <ErrorIcon className={cls.errorIcon} />}
        {type === 'warning' && <WarningIcon className={cls.warningIcon} />}
      </div>
      <div>
        <div className={classNames(cls.type, {}, [cls[type]])}>{type}</div>
        <Text className={classNames(cls.text, {}, [cls[type]])}>{text}</Text>
      </div>
      <CloseIcon className={classNames(cls.close, {}, [cls[type]])} />
    </div>
  )
}
