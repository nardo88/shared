import { type FC, useRef } from "react";

import { Text, TextVariants } from "../Text/Text";

import cls from "./InputRangeAdvanced.module.scss";
import { classNames } from "../../helpers/classNames";

interface IValue {
  from: number | null;
  to: number | null;
}

interface IProps {
  className?: string;
  errorClassName?: string;
  value: IValue;
  onChange: (value: IValue) => void;
  label?: string;
  sublabel?: string;
  disabled?: boolean;
  errorText?: string | null;
  disableNegative?: boolean;
  canDisplayZero?: boolean;
  required?: boolean;
  measure?: string;
  min?: number;
  max?: number;
  step?: number;
}

export const InputRangeAdvanced: FC<IProps> = (props) => {
  const {
    className,
    onChange,
    value,
    disabled,
    errorText,
    label,
    sublabel,
    errorClassName,
    disableNegative,
    canDisplayZero = false,
    required = false,
    measure,
    min = 0,
    max = 100000,
    step = 1,
  } = props;

  const line = useRef<HTMLDivElement | null>(null);

  const clamp = (val: number) => Math.min(max, Math.max(min, val));
  const roundToStep = (val: number) => Math.round(val / step) * step;

  const valueToPercent = (val: number | null) =>
    val === null ? 0 : ((val - min) / (max - min)) * 100;

  const percentToValue = (percent: number) =>
    roundToStep((percent / 100) * (max - min) + min);

  const changeHandler = ({ from, to }: { from?: number; to?: number }) => {
    if (disableNegative && ((from ?? 0) < 0 || (to ?? 0) < 0)) return;

    let newFrom = from !== undefined ? clamp(from) : value.from;
    let newTo = to !== undefined ? clamp(to) : value.to;

    if (newFrom !== null && newTo !== null && newFrom > newTo) {
      if (from !== undefined) newFrom = newTo;
      if (to !== undefined) newTo = newFrom;
    }

    onChange({ from: newFrom, to: newTo });
  };

  const dragStart = (
    _e: React.PointerEvent<HTMLDivElement>,
    type: "from" | "to"
  ) => {
    if (!line.current || disabled) return;
    const lineRect = line.current.getBoundingClientRect();

    const handleMove = (event: PointerEvent) => {
      const offsetX = event.clientX - lineRect.left;
      const percent = (offsetX / lineRect.width) * 100;
      const newValue = clamp(percentToValue(percent));

      if (type === "from") {
        changeHandler({ from: newValue });
      } else {
        changeHandler({ to: newValue });
      }
    };

    const handleUp = () => {
      document.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerup", handleUp);
    };

    document.addEventListener("pointermove", handleMove);
    document.addEventListener("pointerup", handleUp);
  };

  const fromPercent = valueToPercent(value.from ?? min);
  const toPercent = valueToPercent(value.to ?? max);

  return (
    <div className={classNames(cls.inputRangeAdvanced, {}, [className])}>
      {label && (
        <label className={classNames(cls.label, { [cls.error]: !!errorText })}>
          {label}
          {required ? " *" : ""}
        </label>
      )}

      <div className={cls.line} ref={line} draggable={false}>
        <div
          className={cls.rangeTrack}
          style={{
            left: `${fromPercent}%`,
            width: `${toPercent - fromPercent}%`,
          }}
        />
        <div
          className={cls.cursor}
          onPointerDown={(e) => dragStart(e, "from")}
          style={{ left: `${fromPercent}%` }}
          draggable={false}
        />
        <div
          className={cls.cursor}
          onPointerDown={(e) => dragStart(e, "to")}
          style={{ left: `${toPercent}%` }}
          draggable={false}
        />
      </div>

      <div className={classNames(cls.wrapper, { [cls.error]: !!errorText })}>
        <label className={cls.inputWrapper}>
          {measure && <Text>{measure}</Text>}
          <input
            type="number"
            disabled={disabled}
            min={min}
            max={max}
            step={step}
            value={
              canDisplayZero
                ? value?.from?.toString() || ""
                : value?.from?.toString().replace(/^0+/, "") || ""
            }
            onChange={(e) => {
              const result = parseFloat(e.target.value);
              if (isNaN(result)) return;
              if (disableNegative && result < 0) return;
              changeHandler({ from: result });
            }}
          />
        </label>
        <Text>-</Text>
        <label className={cls.inputWrapper}>
          {measure && <Text>{measure}</Text>}
          <input
            type="number"
            disabled={disabled}
            min={min}
            max={max}
            step={step}
            value={
              canDisplayZero
                ? value?.to?.toString() || ""
                : value?.to?.toString().replace(/^0+/, "") || ""
            }
            onChange={(e) => {
              const result = parseFloat(e.target.value);
              if (isNaN(result)) return;
              if (disableNegative && result < 0) return;
              changeHandler({ to: result });
            }}
          />
        </label>
      </div>
      {sublabel && <label className={cls.sublabel}>{sublabel}</label>}
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
