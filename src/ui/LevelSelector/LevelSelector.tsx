import { useEffect, useRef, useState } from "react";

import { Text, TextVariants } from "../Text/Text";

import cls from "./LevelSelector.module.scss";
import { classNames } from "../../helpers/classNames";

export type LevelOptionType = {
  _id: string;
  title: string;
  level: number;
  disabled?: boolean;
};

interface LevelSelectorProps {
  value: LevelOptionType | null;
  options: LevelOptionType[];
  onChange: (value: LevelOptionType | null) => void;
  label?: string;
  className?: string;
  errorText?: string;
  errorClassName?: string;
}

export const LevelSelector = ({
  options,
  value,
  onChange,
  label,
  className,
  errorClassName,
  errorText,
}: LevelSelectorProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const hideList = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const changeSelect = (v: LevelOptionType | null) => {
    if (v && v.level !== 0) {
      onChange?.(v);
      setIsOpen(false);
    }
  };

  useEffect(() => changeSelect(value), [value]);

  useEffect(() => {
    window.addEventListener("click", hideList);
    return () => window.removeEventListener("click", hideList);
  }, []);

  return (
    <div
      className={classNames(
        cls.LevelSelector,
        { [cls.error]: errorText && errorText.length > 0 },
        [className]
      )}
    >
      <div ref={ref}>
        {label && <label className={cls.label}>{label}</label>}
        <div
          className={cls.top}
          onClick={() => options.length && setIsOpen(!isOpen)}
        >
          <div className={cls.selectValue}>{value?.title || ""}</div>
        </div>
        {isOpen && (
          <div className={cls.dropDown}>
            <ul>
              {options.map((item: LevelOptionType) => (
                <li
                  key={item._id}
                  className={classNames(cls.selectOption, {
                    [cls.first]: item.level === 1,
                    [cls.second]: item.level === 2,
                  })}
                  onClick={() => changeSelect(item)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

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
};
