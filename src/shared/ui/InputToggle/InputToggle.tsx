import { classNames } from '@shared/helpers/classNames'

import cls from './InputToggle.module.scss'

interface InputToggleProps {
  label: string
  value: boolean
  onChange: (v: boolean) => void
  disabled?: boolean
  className?: string
}

export const InputToggle = ({
  label,
  value,
  onChange,
  disabled = false,
  className,
}: InputToggleProps) => {
  return (
    <div className={classNames(cls.InputToggle, {}, [className])}>
      <div>
        <label className={cls.switch}>
          <input
            type="checkbox"
            checked={value}
            onChange={() => (!disabled ? onChange(!value) : null)}
          />
          <span className={cls.slider} />
        </label>
        <label className={cls.label} onClick={() => (!disabled ? onChange(!value) : null)}>
          {label}
        </label>
      </div>
    </div>
  )
}
