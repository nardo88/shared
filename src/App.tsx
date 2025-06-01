import { useRef, useState } from 'react'
import cls from './App.module.scss'
import { classNames } from './helpers/classNames'
import Button from './ui/Button/Button'
import { Popup } from './ui/Popup/Popup'
import { CustomSelect, type OptionType } from './ui/CustomSelect/CustomSelect'
import { CheckboxSelector } from './ui/CheckboxSelector/CheckboxSelector'

export function App() {
  const [value, setValue] = useState(false)
  const [select, setSelect] = useState<OptionType | null>(null)
  const [check, setCheck] = useState<string[]>([])
  const ref = useRef<HTMLDivElement | null>(null)

  const options = [
    { id: 'first', title: 'first' },
    { id: 'second', title: 'second' },
    { id: 'third', title: 'third' },
  ]

  return (
    <div className={classNames(cls.app, {}, ['container'])}>
      <Button onClick={() => setValue(true)}>Open</Button>
      {value && (
        <Popup
          title={'Popup'}
          onClose={() => setValue(false)}
          getRef={(r) => (ref.current = r)}>
          <div style={{ padding: '30px 0', display: 'grid', gap: '15px' }}>
            <CustomSelect
              label="Some label"
              options={options}
              value={select}
              onChange={setSelect}
              wrapper={ref}
            />
            <CheckboxSelector
              label="Some label"
              options={options}
              value={check}
              wrapper={ref}
              onChange={(v) => {
                setCheck((p) => {
                  if (check.includes(v)) {
                    return p.filter((i) => i !== v)
                  }
                  return [...p, v]
                })
              }}
            />
          </div>
        </Popup>
      )}
    </div>
  )
}
