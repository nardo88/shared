import { useState } from 'react'
import cls from './App.module.scss'
import { classNames } from './helpers/classNames'
import { CustomRange } from './ui/CustomRange'

export function App() {
  const [value, setValue] = useState(0)

  return (
    <div className={classNames(cls.app, {}, ['container'])}>
      <CustomRange
        label={'some label'}
        value={value}
        onChange={setValue}
        variant="percent"
      />
    </div>
  )
}
