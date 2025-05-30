import cls from './App.module.scss'
import { classNames } from './helpers/classNames'
import Button from './ui/Button/Button'

export function App() {
  return (
    <div className={classNames(cls.app, {}, ['container'])}>
      <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
    </div>
  )
}
