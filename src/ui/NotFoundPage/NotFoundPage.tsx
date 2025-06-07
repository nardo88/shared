import { classNames } from '../../helpers/classNames'
import Icon404 from '../icons/Icon404'
import { Text } from '../Text/Text'
import Button from '../Button/Button'
import type { FC } from 'react'
import cls from './NotFoundPage.module.scss'

interface MainProps {
  hideButton?: boolean
  className?: string
}

export const NotFoundPage: FC<MainProps> = (props) => {
  const { className, hideButton = false } = props

  const clickHandler = () => {
    window.location.href = '/'
  }

  return (
    <div className={classNames(cls.Main, {}, [className])}>
      <Icon404 className={cls.icon} />
      <Text className={cls.title}>404</Text>
      <Text className={cls.subTitle}>Страница не найдена</Text>
      {!hideButton && (
        <Button className={cls.btn} onClick={clickHandler}>
          Перейти на главную
        </Button>
      )}
    </div>
  )
}
