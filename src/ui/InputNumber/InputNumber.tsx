import React, { type ChangeEvent, memo, useRef } from "react";

import cls from "./InputNumber.module.scss";
import { classNames } from "../../helpers/classNames";
import { Text, TextVariants } from "../Text/Text";

type Props = {
  label?: string;
  sublabel?: string;
  placeholder?: string;
  value: number | null | undefined;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  errorText?: string;
  errorClassName?: string;
  onChange?: (value: number) => void;
  disableNegative?: boolean;
  options?: { min?: number; max?: number };
  canDisplayZero?: boolean;
  onlyInteger?: boolean;
};

export const InputNumber: React.FC<Props> = memo(
  (props) => {
    const {
      label,
      onChange,
      disabled,
      className,
      value = "",
      errorText,
      errorClassName,
      disableNegative = true,
      placeholder,
      options,
      canDisplayZero = false,
      sublabel,
      onlyInteger = false,
      required = false,
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const result = parseFloat(e.target.value);

      if (options?.min && result < options.min) return;
      if (options?.max && result > options.max) return;
      if (disableNegative && result < 0) return;
      if (onlyInteger) return onChange?.(Math.round(result || 0));

      onChange?.(result || 0);
    };

    const onWheelHandler = (e: React.WheelEvent<HTMLInputElement>) => {
      if (document.activeElement === ref.current) {
        e.preventDefault();
        ref.current?.blur();
      }
    };

    return (
      <div
        className={classNames(
          cls.wrapper,
          { [cls.error]: errorText && errorText.length > 0 },
          [className]
        )}
        onClick={() => ref.current?.focus()}
      >
        {label && (
          <label className={cls.label}>
            {label} {required ? " *" : ""}
          </label>
        )}
        <input
          type="number"
          value={
            canDisplayZero
              ? value?.toString()
              : value?.toString().replace(/^0+/, "")
          }
          placeholder={placeholder}
          onChange={onChangeHandler}
          onWheel={onWheelHandler}
          disabled={disabled}
          className={cls.input}
          ref={ref}
        />
        {sublabel && <label className={cls.sublabel}>{sublabel}</label>}
        {errorText && (
          <Text
            className={classNames(cls.errorText, {}, [errorClassName])}
            variant={TextVariants.ERROR}
          >
            {errorText}
          </Text>
        )}
      </div>
    );
  },
  (prev, next) =>
    prev.value === next.value &&
    prev.errorText === next.errorText &&
    prev.onChange === next.onChange
);
