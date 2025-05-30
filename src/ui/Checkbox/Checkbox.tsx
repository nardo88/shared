import {
  type ChangeEvent,
  type FC,
  type ReactNode,
  useEffect,
  useState,
} from "react";

import { Text, TextVariants } from "../Text/Text";

import cls from "./Checkbox.module.scss";
import { classNames } from "../../helpers/classNames";
import CheckmarkIcon from "../icons/CheckmarkIcon";

type IProps = {
  checked: boolean;
  label?: string | ReactNode;
  sublabel?: string;
  name?: string | null;
  disabled?: boolean;
  className?: string;
  onChangeHandler?: (e: CheckboxChangeType) => void;
  haveError?: boolean;
  errorText?: string;
  iconColor?: string;
};

export type CheckboxChangeType = { name: string | null; checked: boolean };

export const Checkbox: FC<IProps> = ({
  checked,
  label,
  name = null,
  disabled = false,
  onChangeHandler,
  className,
  sublabel,
  haveError = true,
  errorText,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (disabled || !onChangeHandler) return;
    onChangeHandler({ name, checked: event.target.checked });
  };

  useEffect(() => setIsChecked(checked), [checked]);

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={onChange}
        />
        <span className={classNames(cls.label, { cup: !disabled })}>
          {isChecked && <CheckmarkIcon className={cls.icon} />}
        </span>

        {label && (
          <span className={classNames(cls.span, { cup: !disabled })}>
            {label}
          </span>
        )}
      </label>
      {sublabel && <span className={cls.sublabel}>{sublabel}</span>}
      {haveError && errorText && (
        <Text
          className={classNames(cls.errorText, {}, [])}
          variant={TextVariants.ERROR}
        >
          {errorText || ""}
        </Text>
      )}
    </div>
  );
};
