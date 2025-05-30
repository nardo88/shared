import React, { type ReactNode } from "react";

import cls from "./IconComponent.module.scss";
import { classNames } from "../../helpers/classNames";

export type IconComponentProps = {
  children?: ReactNode;
  id?: string;
  viewBox?: string;
  fill?: string;
  stroke?: string;
  width?: number;
  height?: number;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
  onPointerDown?: (e: React.MouseEvent) => void;
  pathColor?: string;
  color?: string;
};

export type IconProps = IconComponentProps;

const IconComponent: React.FC<IconComponentProps> = ({
  className,
  children,
  onClick,
  style,
  size = 24,
  fill = "currentColor",
  viewBox = "0 0 24 24",
  height = 24,
  width = 24,
  color = "",
}): React.ReactNode => {
  return (
    <svg
      onClick={onClick}
      viewBox={viewBox}
      fill={fill}
      style={style}
      height={size || height}
      width={size || width}
      color={color}
      className={classNames(cls.IconComponent, {}, [className])}
    >
      {children}
    </svg>
  );
};

export default IconComponent;
