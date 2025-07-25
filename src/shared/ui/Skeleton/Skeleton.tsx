import { type CSSProperties, type FC, type ReactNode } from "react";

import cls from "./Skeleton.module.scss";
import { classNames } from "../../helpers/classNames";

interface ISkeleton {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
  children?: ReactNode;
}

export const Skeleton: FC<ISkeleton> = (props) => {
  const { border, height, width, className, children } = props;

  const style: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };
  return (
    <div className={classNames(cls.Skeleton, {}, [className])} style={style}>
      {children}
    </div>
  );
};
