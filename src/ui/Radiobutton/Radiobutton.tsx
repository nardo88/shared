import React, { type ReactNode } from "react";

import cls from "./Radiobutton.module.scss";
import { classNames } from "../../helpers/classNames";

type Props = {
  checked: boolean;
  label?: string;
  sublabel?: string | ReactNode;
  name?: string | null;
  disabled?: boolean;
  className?: string;
  title?: string;
  onChangeHandler: (e: { name: string | null; checked: boolean }) => void;
};

export const Radiobutton: React.FC<Props> = ({
  checked,
  label,
  name = null,
  disabled = false,
  onChangeHandler,
  className,
  title,
  sublabel,
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!disabled) {
      onChangeHandler({ name, checked: e.target.checked });
    }
  };

  return (
    <div className={classNames(cls.wrapper, {}, [className])} title={title}>
      <label>
        <input
          type="radio"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
        <span className={classNames(cls.span, { [cls.disabled]: disabled })} />
        {label && (
          <span
            className={classNames(cls.labelSpan, { [cls.disabled]: disabled })}
          >
            {label}
          </span>
        )}
      </label>
      {sublabel && <span className={cls.sublabel}>{sublabel}</span>}
    </div>
  );
};
