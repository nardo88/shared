import React, {
  type ChangeEvent,
  type KeyboardEvent,
  type MouseEvent,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";

import SearchIcon from "../icons/SearchIcon";

import cls from "./Input.module.scss";
import { classNames } from "../../helpers/classNames";
import CopyIcon from "../icons/CopyIcon";
import CalendarIcon from "../icons/CalendarIcon";
import { Text, TextVariants } from "../Text/Text";

export enum InputTypes {
  TEXT = "text",
  PASSWORD = "password",
  NUMBER = "number",
}

type Props = {
  label?: string;
  sublabel?: string;
  value: string;
  autoFocus?: boolean;
  required?: boolean;
  disabled?: boolean;
  canClear?: boolean;
  className?: string;
  name?: string;
  limit?: number;
  type?: InputTypes;
  errorText?: string | null;
  errorClassName?: string;
  canCopy?: boolean;
  onClear?: () => void;
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
  onContextMenu?: (event: MouseEvent<HTMLInputElement>) => void;
  placeholder?: string;
  iconSearch?: boolean;
  getRef?: (ref: HTMLInputElement) => void;
};

export const Input: React.FC<Props> = memo(
  ({
    label,
    sublabel,
    onChange,
    onClear,
    onBlur,
    onKeyDown,
    onContextMenu,
    onClick,
    disabled,
    limit,
    required = false,
    canClear = false,
    className,
    autoFocus = false,
    value = "",
    errorText,
    errorClassName,
    type = InputTypes.TEXT,
    canCopy = false,
    placeholder = "",
    iconSearch = false,
    getRef,
  }) => {
    const ref = useRef<HTMLInputElement | null>(null);
    const [copy, setCopy] = useState(false);

    const handleBlur = () => {
      if (typeof onBlur === "function") onBlur();
    };

    const handleClear = () => {
      onChange?.("");
      if (typeof onClear === "function") onClear();
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (typeof onKeyDown === "function") onKeyDown(e);
    };

    const onClickHandler = (e: MouseEvent<HTMLInputElement>) => {
      if (typeof onClick === "function") onClick(e);
    };
    const onContextMenuHandler = (e: MouseEvent<HTMLInputElement>) => {
      if (typeof onContextMenu === "function") onContextMenu(e);
    };

    const copyText = (text: string) => {
      setCopy(true);
      navigator.clipboard.writeText(text);
      setTimeout(() => setCopy(false), 2000);
    };

    useEffect(() => {
      if (autoFocus) ref.current?.focus();
    }, []);

    return (
      <div
        className={classNames(cls.wrapper, {}, [className])}
        onClick={() => ref.current?.focus()}
      >
        <div
          className={classNames(cls.top, {
            [cls.error]: errorText && errorText?.length > 0,
          })}
        >
          {label && (
            <label className={cls.label}>
              {label}
              {required ? " *" : ""}
            </label>
          )}
          {limit && (
            <span className={cls.limit}>
              {value.length}/{limit}
            </span>
          )}
        </div>
        <div
          className={classNames(cls.inputWrapper, {
            [cls.error]: errorText && errorText?.length > 0,
          })}
        >
          {iconSearch ? <SearchIcon className={cls.searchIcon} /> : null}
          <input
            className={classNames(cls.input, {
              [cls.haveCross]: canClear,
              [cls.withIcon]: iconSearch,
              [cls.disabled]: disabled,
            })}
            ref={(r) => {
              if (!r) return;
              ref.current = r;
              if (getRef) getRef(r);
            }}
            value={value}
            onChange={(e) => {
              e.preventDefault();
              onChange?.(
                limit ? e.target.value.slice(0, limit) : e.target.value,
                e
              );
            }}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            onClick={onClickHandler}
            onContextMenu={onContextMenuHandler}
          />
          {!!value &&
            (canCopy ? (
              <CopyIcon
                className={cls.icon}
                viewBox="0 0 18 18"
                stroke={
                  copy ? "var(--additional-success)" : "var(--content-800)"
                }
                onClick={() => (canCopy ? copyText(value) : null)}
              />
            ) : !disabled && canClear ? (
              <CalendarIcon onClick={handleClear} className={cls.icon} />
            ) : null)}
          {sublabel && <label className={cls.sublabel}>{sublabel}</label>}
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
  },
  (prev, next) =>
    prev.value === next.value &&
    prev.errorText === next.errorText &&
    prev.onChange === next.onChange
);
