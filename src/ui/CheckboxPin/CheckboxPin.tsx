import { useEffect, useRef, useState } from "react";

import CloseV2 from "../icons/CloseV2";

import cls from "./CheckboxPin.module.scss";
import { classNames } from "../../helpers/classNames";
import ArrowBottom from "../icons/ArrowBottom";
import { Checkbox } from "../Checkbox/Checkbox";
import { Text, TextVariants } from "../Text/Text";

export type OptionsType = { value: string; label: string; disabled?: boolean };

interface ICheckboxPinProps {
  value?: string[];
  placeholder: string;
  onChange: (value: string) => void;
  options: OptionsType[];
  className?: string;
  errorText?: string;
  errorClassName?: string;
  chooseMany?: number;
  chooseManyHandler?: (val: boolean) => void;
}

const Pin = (props: {
  id: string;
  label: string | undefined;
  onRemove: (id: string) => void;
}) => {
  const { id, label, onRemove } = props;

  if (!label) return null;

  return (
    <div className={cls.pin}>
      {label.slice(0, 7)}
      <div className={cls.close} onClick={() => onRemove(id)}>
        <CloseV2 />
      </div>
    </div>
  );
};

export const CheckboxPin = (props: ICheckboxPinProps) => {
  const {
    value,
    options,
    placeholder,
    className,
    errorText,
    errorClassName,
    chooseMany,
    onChange,
    chooseManyHandler,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isChooseMany, setIsChooseMany] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const clickedByNotMenu = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
  };

  const handleRemovePin = (itemValue: string) => {
    if (!value) return;

    const newValue = value.find((item) => item === itemValue);
    if (newValue) onChange(newValue);
  };

  useEffect(() => {
    if (chooseMany && !value?.length) setIsChooseMany(false);
  }, [value]);

  useEffect(() => {
    window.addEventListener("click", clickedByNotMenu);
    return () => window.removeEventListener("click", clickedByNotMenu);
  }, []);

  const renderPins = () => {
    if (value && value.length > 3) {
      return (
        <>
          {value.slice(0, 1).map((item) => (
            <Pin
              key={item}
              label={options.find((i) => i.value === item)?.label}
              id={item}
              onRemove={() => handleRemovePin(item)}
            />
          ))}
          <div className={cls.dots}>...</div>
          <div className={cls.morePins}>+{value.length - 1}</div>
        </>
      );
    }

    return value?.map((item) => (
      <Pin
        key={item}
        label={options.find((i) => i.value === item)?.label}
        id={item}
        onRemove={() => handleRemovePin(item)}
      />
    ));
  };

  return (
    <div
      className={classNames(
        cls.wrapper,
        { [cls.error]: errorText && errorText?.length > 0 },
        [className]
      )}
    >
      <div ref={ref}>
        <div
          className={classNames(cls.inputArea, {
            [cls.hasValue]: !!value?.length,
          })}
          onClick={() => setIsOpen((o) => !o)}
        >
          <span>
            {placeholder && !value?.length && (
              <label className={cls.label}>{placeholder}</label>
            )}
            {value?.length ? renderPins() : null}
          </span>

          <span className={classNames(cls.arrow, { [cls.rotate]: isOpen })}>
            <ArrowBottom />
          </span>
        </div>
        {isOpen && (
          <div className={cls.listWrapper}>
            {chooseMany && chooseManyHandler && (
              <Checkbox
                label={`${"Выбрать первые"} ${chooseMany}`}
                checked={isChooseMany}
                onChangeHandler={({ checked }) => {
                  setIsChooseMany(checked);
                  chooseManyHandler(checked);
                }}
                className={cls.checkbox}
              />
            )}
            {options.map((item) => (
              <Checkbox
                key={item.value}
                label={item.label}
                checked={!!value?.includes(item.value)}
                onChangeHandler={() => {
                  onChange(item.value);
                  setIsChooseMany(false);
                }}
                disabled={item.disabled}
                className={cls.checkbox}
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
