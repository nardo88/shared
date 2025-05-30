import {
  type MouseEvent,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

import { Checkbox } from "../Checkbox/Checkbox";
import { Text, TextVariants } from "../Text/Text";

import cls from "./CheckboxSelector.module.scss";
import { classNames } from "../../helpers/classNames";
import ArrowBottom from "../icons/ArrowBottom";

export type OptionsType = {
  value: string;
  label: string;
  disabled?: boolean;
  level?: number;
};

interface CheckboxSelectorProps {
  value?: string[];
  placeholder: string;
  onChange: (value: string) => void;
  options: OptionsType[];
  showValues?: boolean;
  disabled?: boolean;
  className?: string;
  errorText?: string;
  errorClassName?: string;
  canClear?: boolean;
  wrapper?: RefObject<HTMLDivElement> | null;
  required?: boolean;
}

export const CheckboxSelector = (props: CheckboxSelectorProps) => {
  const {
    value,
    options,
    placeholder,
    onChange,
    showValues = true,
    disabled = false,
    className,
    errorText,
    errorClassName,
    canClear = false,
    wrapper,
    required = false,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const clickedByNotMenu = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
  };
  useEffect(() => {
    window.addEventListener("click", clickedByNotMenu);
    if (wrapper?.current) {
      wrapper.current.addEventListener("click", clickedByNotMenu);
    }
    return () => {
      window.removeEventListener("click", clickedByNotMenu);
      if (wrapper?.current) {
        wrapper.current.removeEventListener("click", clickedByNotMenu);
      }
    };
  }, []);

  return (
    <div
      className={classNames(
        cls.CheckboxSelector,
        { [cls.error]: errorText && errorText?.length > 0 },
        [className]
      )}
    >
      {placeholder && (
        <label className={cls.label}>
          {placeholder}
          {required ? " *" : ""}
        </label>
      )}
      <div ref={ref}>
        <div
          className={cls.inputArea}
          onClick={() => setIsOpen((o: boolean) => !o)}
        >
          <span>
            {showValues && value?.length
              ? value.map((item: string) => (
                  <div
                    className={cls.chosen}
                    key={item}
                    onClick={(e: MouseEvent) => {
                      if (canClear) {
                        e.stopPropagation();
                        onChange(item);
                      }
                    }}
                  >
                    <div>
                      {
                        options.find((i: OptionsType) => i.value === item)
                          ?.label
                      }
                    </div>
                  </div>
                ))
              : null}
          </span>

          <span className={classNames(cls.arrow, { [cls.rotate]: isOpen })}>
            <ArrowBottom />
          </span>
        </div>
        {isOpen && (
          <div className={cls.listWrapper}>
            {options.map((item: OptionsType) => (
              <Checkbox
                key={item.value}
                label={item.label}
                checked={!!value?.includes(item.value)}
                onChangeHandler={() => onChange(item.value)}
                disabled={item.disabled || disabled}
                className={classNames(cls.checkbox, {
                  [cls.firstLevel]: item?.level === 1,
                })}
              />
            ))}
          </div>
        )}
      </div>
      {errorText && (
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
