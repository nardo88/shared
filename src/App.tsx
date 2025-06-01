import { useState } from 'react'
import cls from './App.module.scss'
import { classNames } from './helpers/classNames'
import { InputRange, type InputRangeValue } from './ui/InputRange/InputRange'

export function App() {
  const [value, setValue] = useState<InputRangeValue>({ from: 0, to: 0 })

  return (
    <div className={classNames(cls.app, {}, ['container'])}>
      <InputRange
        label="Some label"
        onChange={setValue}
        value={value}
        required
      />
    </div>
  )
}
