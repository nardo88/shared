import { type RefObject, useEffect, useRef, useState } from "react";

import cls from "./CustomSelect.module.scss";
import { classNames } from "../../helpers/classNames";
import Close from "../icons/Close";
import ArrowBottom from "../icons/ArrowBottom";
import { Text, TextVariants } from "../Text/Text";

export type OptionType<T = string> = {
  id: Extract<T, string>; // id может быть только строковым ключом типа T
  title: string;
};

type PropsType<T> = {
  options: Array<OptionType<T>>;
  value?: OptionType<T> | null;
  onChange: (value: OptionType<T>) => void;
  label?: string;
  haveError?: boolean;
  errorText?: string;
  errorClassName?: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  wrapper?: RefObject<HTMLDivElement> | null;
  onClear?: () => void;
  required?: boolean;
};

export const CustomSelect = <T extends string>(props: PropsType<T>) => {
  const {
    options = [],
    value,
    onChange,
    label,
    haveError = true,
    errorText,
    errorClassName,
    className,
    disabled = false,
    placeholder,
    wrapper,
    onClear,
    required = false,
  } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const changeSelect = (val: OptionType<T>) => {
    onChange(val);
    setIsOpen(false);
  };

  const hideList = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", hideList);
    if (wrapper?.current) {
      wrapper?.current.addEventListener("click", hideList);
    }
    return () => {
      window.removeEventListener("click", hideList);
      if (wrapper?.current) {
        wrapper?.current.removeEventListener("click", hideList);
      }
    };
  }, []);

  return (
    <div ref={ref} className={classNames(cls.wrapper, {}, [className])}>
      {label && (
        <label
          className={classNames(cls.label, {
            [cls.error]: errorText && errorText.length > 0,
          })}
        >
          {label}
          {required ? " *" : ""}
        </label>
      )}

      <div
        className={classNames(cls.input, {
          [cls.disabled]: disabled,
          [cls.noValue]: !value?.title,
          [cls.error]: errorText && errorText.length > 0,
          [cls.cup]: options.length > 0,
        })}
        onClick={() => options.length && !disabled && setIsOpen(!isOpen)}
      >
        <span>
          {placeholder && !value ? placeholder : ""}
          {value?.title || ""}
        </span>

        <div>
          {!!onClear && !!value?.title && (
            <span className={classNames(cls.arrow)} onClick={onClear}>
              <Close />
            </span>
          )}
          <span className={classNames(cls.arrow, { [cls.rotate]: isOpen })}>
            <ArrowBottom />
          </span>
        </div>
      </div>
      {isOpen && (
        <div className={cls.dropDown}>
          <ul>
            {options.map((item: OptionType<T>) => (
              <li
                key={item.id}
                className={cls.selectOption}
                onClick={() => changeSelect(item)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
      {haveError && errorText && (
        <Text
          className={classNames(cls.errorText, {}, [errorClassName])}
          variant={TextVariants.ERROR}
        >
          {errorText || ""}
        </Text>
      )}
    </div>
  );
};
