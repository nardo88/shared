import { classNames } from '@shared/helpers/classNames'

import cls from './Radiobutton.module.scss'

type Props = {
  checked: boolean
  label?: string
  name?: string | null
  disabled?: boolean
  className?: string
  title?: string
  onChange: (e: { name: string | null; checked: boolean }) => void
}

export const Radiobutton: React.FC<Props> = ({
  checked,
  label,
  name = null,
  disabled = false,
  onChange,
  className,
  title,
}) => {
  return (
    <div className={classNames(cls.wrapper, {}, [className])} title={title}>
      <label>
        <input
          type="radio"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange({ name, checked: e.target.checked })}
        />
        <span className={classNames(cls.span, { [cls.disabled]: disabled })} />
        {label && (
          <span className={classNames(cls.labelSpan, { [cls.disabled]: disabled })}>{label}</span>
        )}
      </label>
    </div>
  )
}
