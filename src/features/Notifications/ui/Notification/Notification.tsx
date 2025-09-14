import { type FC } from 'react'

import { classNames } from '@shared/helpers/classNames'
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

  return (
    <div className={classNames(cls.notification, {}, [className])}>
      <div className={cls.iconWrapper}>
        {type === 'success' && <SuccessIcon className={cls.successIcon} />}
        {type === 'info' && <InfoIcon className={cls.infoIcon} />}
        {type === 'error' && <ErrorIcon />}
        {type === 'warning' && <WarningIcon className={cls.warningIcon} />}
      </div>
    </div>
  )
}
