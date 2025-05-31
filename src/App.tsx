import cls from './App.module.scss'
import { classNames } from './helpers/classNames'
import { ContextMenu, type IOptions } from './ui/ContextMenu/ContextMenu'

export function App() {
  const options = [
    { label: 'first', value: 'first' },
    { label: 'second', value: 'second' },
    { label: 'third', value: 'third', disabled: true },
  ]

  const opt: IOptions[] = [
    {
      title: 'Remove',
      color: 'red',
      onClick: () => console.log('item deleted'),
    },
    { title: 'Edit', onClick: () => console.log('item edited') },
  ]

  return (
    <div className={classNames(cls.app, {}, ['container'])}>
      <div className={cls.wrapper}>
        {options.map((item) => (
          <ContextMenu options={opt} key={item.value}>
            <div>{item.label}</div>
          </ContextMenu>
        ))}
      </div>
    </div>
  )
}
