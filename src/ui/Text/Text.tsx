import React, {
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";

import cls from "./Text.module.scss";
import { classNames } from "../../helpers/classNames";

export enum TextVariants {
  ERROR = "error",
  SUCCESS = "success",
  HELPER = "helper",

  XL2 = "xl2",
  XL1 = "xl1",
  XL = "xl",
  BASE_LIGHT = "base_light",
  S_LIGHT = "s_light",
  LIGHT = "light",
  BASE = "base",
  BASE_22 = "base_22",
  BASE_12 = "base_12",
  BASE_14 = "base_14",
  BASE_25 = "base_25",
  LIGHT_13 = "light_13",
}

type Props = {
  className?: string;
  variant?: TextVariants;
  title?: string;
  style?: CSSProperties;
  children?: ReactNode;
  onClick?: (e: MouseEvent) => void;
};

export const Text: React.FC<Props> = ({
  children,
  className,
  variant = TextVariants.BASE,
  title = "",
  style,
  onClick,
}) => {
  return (
    <>
      {variant === TextVariants.ERROR && (
        <p
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.error, {}, [className])}
          style={style}
        >
          {children}
        </p>
      )}

      {variant === TextVariants.HELPER && (
        <p
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.helper, {}, [className])}
          style={style}
        >
          {children}
        </p>
      )}

      {variant === TextVariants.SUCCESS && (
        <p
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.success, {}, [className])}
          style={style}
        >
          {children}
        </p>
      )}

      {variant === TextVariants.XL2 && (
        <h2
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.xl2, {}, [className])}
          style={style}
        >
          {children}
        </h2>
      )}

      {variant === TextVariants.XL1 && (
        <h1
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.xl1, {}, [className])}
          style={style}
        >
          {children}
        </h1>
      )}

      {variant === TextVariants.XL && (
        <h4
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.xl, {}, [className])}
          style={style}
        >
          {children}
        </h4>
      )}

      {variant === TextVariants.BASE_LIGHT && (
        <p
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.base_light, {}, [className])}
          style={style}
        >
          {children}
        </p>
      )}

      {variant === TextVariants.S_LIGHT && (
        <p
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.s_light, {}, [className])}
          style={style}
        >
          {children}
        </p>
      )}

      {variant === TextVariants.LIGHT && (
        <p
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.light, {}, [className])}
          style={style}
        >
          {children}
        </p>
      )}

      {variant === TextVariants.BASE && (
        <p
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.base, {}, [className])}
          style={style}
        >
          {children}
        </p>
      )}

      {variant === TextVariants.BASE_25 && (
        <p
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.base_25, {}, [className])}
          style={style}
        >
          {children}
        </p>
      )}

      {variant === TextVariants.BASE_22 && (
        <p
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.base_22, {}, [className])}
          style={style}
        >
          {children}
        </p>
      )}

      {variant === TextVariants.BASE_12 && (
        <p
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.base_12, {}, [className])}
          style={style}
        >
          {children}
        </p>
      )}

      {variant === TextVariants.BASE_14 && (
        <p
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.base_14, {}, [className])}
          style={style}
        >
          {children}
        </p>
      )}

      {variant === TextVariants.LIGHT_13 && (
        <p
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.light_13, {}, [className])}
          style={style}
        >
          {children}
        </p>
      )}
    </>
  );
};
