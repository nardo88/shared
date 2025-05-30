import { type FC } from "react";

import cls from "./Container.module.scss";
import type { IContainerProps } from "../../types";
import { classNames } from "../../../../helpers/classNames";

export const Container: FC<IContainerProps> = (props) => {
  const { children, className } = props;
  return (
    <div className={classNames(cls.container, {}, [className])}>{children}</div>
  );
};
