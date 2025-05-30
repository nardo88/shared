import type { ReactNode } from "react";
import cls from "./InputToggleText.module.scss";
import { classNames } from "../../helpers/classNames";
import { Tooltip } from "../Tooltip";

export enum ToggleInputsTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface InputToggleTextProps {
  texts: { title: string | ReactNode; value: string; tooltip?: ReactNode }[];
  value?: string;
  onChange: (v: string) => void;
  className?: string;
  activeClassName?: string;
  theme?: ToggleInputsTheme;
  disabled?: boolean;
}

export const InputToggleText = ({
  texts,
  value,
  onChange,
  className,
  activeClassName,
  theme = ToggleInputsTheme.PRIMARY,
  disabled = false,
}: InputToggleTextProps) => {
  return (
    <div
      className={classNames(cls.InputToggleText, {}, [className, cls[theme]])}
    >
      {texts.map((item) => {
        const content = (
          <div
            key={item.value}
            className={classNames(
              cls.text,
              {
                [cls.active]: item.value === value,
                [cls.disabled]: disabled,
              },
              [item.value === value ? activeClassName : ""]
            )}
            onClick={() => {
              if (!disabled && item.value !== value) onChange(item.value);
            }}
          >
            {item.title}
          </div>
        );

        return item.tooltip ? (
          <Tooltip key={item.value} content={item.tooltip}>
            {content}
          </Tooltip>
        ) : (
          content
        );
      })}
    </div>
  );
};
