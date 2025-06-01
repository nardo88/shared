import cls from './App.module.scss'
import { classNames } from './helpers/classNames'
import { Text } from './ui/Text/Text'
import { SettingsMenu, type OptionItem } from './ui/SettingsMenu/SettingsMenu'
import EditIcon from './ui/icons/EditIcon'

export function App() {
  const map = [
    { id: 'first', title: 'first' },
    { id: 'second', title: 'second' },
    { id: 'third', title: 'third' },
  ]

  const options: OptionItem[] = [
    { title: 'remove', color: 'red', onClick: () => console.log('remove') },
    { title: 'edit', onClick: () => console.log('edit'), icon: <EditIcon /> },
    { title: 'copy', disabled: true, onClick: () => console.log('copy') },
  ]

  return (
    <div className={classNames(cls.app, {}, ['container'])}>
      <div className={cls.list}>
        {map.map((item) => (
          <div className={cls.row} key={item.id}>
            <Text className={cls.id}>{item.id}</Text>
            <Text className={cls.title}>{item.title}</Text>
            <SettingsMenu
              className={cls.settings}
              options={options}
              id={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
