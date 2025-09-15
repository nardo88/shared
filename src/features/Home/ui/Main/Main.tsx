import { type FC } from 'react'

import type { NotificationType } from '@features/Notifications'

import { useNotifications } from '@shared/hooks/useNotifications'
import Button from '@shared/ui/Button/Button'
import { Text } from '@shared/ui/Text/Text'

import cls from './Main.module.scss'

export const Home: FC = () => {
  const { addNotifications } = useNotifications()
  const addNot = (type: NotificationType) => {
    addNotifications({
      text: 'Информационное сообщение очень длинно для просмотра как ведет себя верстка',
      type,
      timeout: 3000,
    })
  }
  return (
    <div className={cls.home}>
      <Text variant="h1">Заголовок h1</Text>
      <Text variant="h2">Заголовок h2</Text>
      <Text variant="h3">Заголовок h3</Text>
      <Text variant="h4">Заголовок h4</Text>
      <Text variant="h5">Заголовок h5</Text>
      <Text variant="helper">Helper</Text>
      <Text variant="error">error</Text>
      <Text variant="success">success</Text>
      <Text>Далеко-далеко за словесными горами в стране.</Text>
      <Text variant="small">Далеко-далеко за словесными горами в стране.</Text>
      <Button onClick={() => addNot('info')}>add info</Button>
      <Button onClick={() => addNot('error')}>add error</Button>
      <Button onClick={() => addNot('warning')}>add warning</Button>
      <Button onClick={() => addNot('success')}>add success</Button>
    </div>
  )
}
