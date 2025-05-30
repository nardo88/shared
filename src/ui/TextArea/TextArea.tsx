import {
  type ChangeEvent,
  type FC,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import cls from "./TextArea.module.scss";
import { classNames } from "../../helpers/classNames";
import { MediumEditor } from "../MediumEditor";
import { Text, TextVariants } from "../Text/Text";

type Props = {
  label?: string | ReactNode;
  prefix?: ReactNode;
  value: string;
  autoFocus?: boolean;
  isEdit?: boolean;
  className?: string;
  errorText?: string;
  errorClassName?: string;
  disabled?: boolean;
  onClear?: () => void;
  onChange: (value: string) => void;
  onBlur?: () => void;
  send?: () => void;
  update?: () => void;
  getRef?: (ref: HTMLTextAreaElement) => void;
  onClick?: (event: MouseEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  options?: { lines?: number };
  limit?: number;
  isMedium?: boolean;
  resizable?: boolean;
  placeholder?: string;
  required?: boolean;
};

const textareaMaxLines = 10;
const textareaLineHeight = 16;

export const TextArea: FC<Props> = (props) => {
  const {
    label,
    onChange,
    className,
    value,
    send,
    update,
    isEdit,
    errorText = "",
    errorClassName,
    disabled = false,
    options = { lines: 1 },
    limit,
    isMedium = false,
    resizable = false,
    placeholder = "",
    getRef,
    required = false,
    onClick,
    onKeyDown,
  } = props;

  const [lines, setLines] = useState(options.lines);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const calculateContentHeight = (
    ref: HTMLTextAreaElement,
    lineHeight: number
  ): number => {
    const height = ref.style.height;
    let offsetHeight = ref.offsetHeight;
    const scrollHeight = ref.scrollHeight;
    const overflow = ref.style.overflow;

    if (offsetHeight >= scrollHeight) {
      ref.style.height = offsetHeight + lineHeight + "px";
      ref.style.overflow = "hidden";
      if (scrollHeight < ref.scrollHeight) {
        while (ref.offsetHeight >= ref.scrollHeight) {
          ref.style.height = (offsetHeight -= lineHeight) + "px";
        }
        while (ref.offsetHeight < ref.scrollHeight) {
          ref.style.height = offsetHeight++ + "px";
        }
        ref.style.height = height;
        ref.style.overflow = overflow;
        return offsetHeight;
      } else {
        return scrollHeight;
      }
    } else {
      return scrollHeight;
    }
  };

  const calculateHeight = (
    ref: HTMLTextAreaElement,
    textareaLineHeight: number
  ) => {
    const lineHeight = parseInt(String(textareaLineHeight), 10);
    const height = calculateContentHeight(ref, lineHeight);
    const numberOfLines = Math.ceil(height / lineHeight);
    return numberOfLines - 1;
  };

  const updateLines = () => {
    if (textareaRef.current) {
      const currentLines = calculateHeight(
        textareaRef.current,
        textareaLineHeight
      );
      if (lines !== currentLines) {
        setLines(
          currentLines <= textareaMaxLines
            ? currentLines > (options.lines || 1)
              ? currentLines
              : options.lines
            : textareaMaxLines
        );
      }
    }
  };

  const onChangeHandler = (v: string) => {
    if (limit) {
      const isLimited = isMedium
        ? v.replace(/( |<([^>]+)>)/gi, "").length > limit
        : v.length > limit;

      if (isLimited) return;
    }

    return onChange(v);
  };

  const newMessageTextChangeClick = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    onChangeHandler(event.target.value);
  };

  const inputKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (onKeyDown) onKeyDown(event);
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (isEdit && event.currentTarget.value.trim()) {
        update?.();
        setLines(options.lines);
        onChangeHandler("");
      } else if (send) {
        send();
        setLines(options.lines);
        onChangeHandler("");
      }
    } else if (event.key === "Escape") {
      event.preventDefault();
      onChangeHandler("");
      setLines(options.lines);
    }
  };

  useEffect(() => {
    if (!value) setLines(options.lines);
    else updateLines();
  }, [value]);

  useEffect(() => {
    if (textareaRef.current && getRef) {
      getRef(textareaRef.current);
    }
  }, [textareaRef.current, getRef]);

  return (
    <div
      className={classNames(
        cls.TextArea,
        { [cls.error]: errorText && errorText?.length > 0 },
        [className]
      )}
    >
      <div className={cls.top}>
        {label && (
          <>
            {typeof label === "string" && (
              <label className={cls.label}>
                {label}
                {required ? " *" : ""}
              </label>
            )}
            {typeof label !== "string" && label}
          </>
        )}
        {limit && !isMedium && (
          <span className={cls.limit}>
            {value?.length || 0}/{limit}
          </span>
        )}
      </div>
      <div className={classNames(cls.wrapper, { [cls.medium]: isMedium })}>
        {isMedium ? (
          <div className={cls.mediumDiv}>
            <MediumEditor
              value={value}
              onChange={onChange}
              limit={limit}
              disabled={disabled}
            />
          </div>
        ) : (
          <textarea
            className={classNames(cls.inputStyle, { [cls.resize]: resizable })}
            rows={lines}
            disabled={disabled}
            value={value}
            onChange={newMessageTextChangeClick}
            onKeyDown={inputKeyPressHandler}
            ref={textareaRef}
            placeholder={placeholder}
            onClick={onClick}
          />
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
