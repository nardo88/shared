import { type FC } from "react";

import { classNames } from "../../helpers/classNames";

import cls from "./InputColor.module.scss";
import useDebounce from "../../helpers/useDebounce";
import { Text } from "../Text/Text";

interface InputColorProps {
  className?: string;
  value: string;
  onChange: (v: string) => void;
  label?: string;
  required?: boolean;
}

export const InputColor: FC<InputColorProps> = (props) => {
  const { className, value, onChange, label, required = false } = props;

  const debounce = useDebounce(onChange, 300);

  return (
    <div className={classNames(cls.inputColor, {}, [className])}>
      {label && (
        <label className={cls.label}>
          {label} {required ? " *" : ""}
        </label>
      )}
      <div className={cls.colorPickerWrapper}>
        <div className={cls.inputWrapper}>
          <input
            type="color"
            className={cls.input}
            onChange={(e) => debounce(e.target.value)}
          />
        </div>
        <Text>{value}</Text>
      </div>
    </div>
  );
};
