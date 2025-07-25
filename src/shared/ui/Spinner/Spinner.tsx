import { type FC } from "react";

import { classNames } from "../../helpers/classNames";

import { type IconProps } from "../icons/IconComponent";

import cls from "./Spinner.module.scss";
import Loading from "../icons/Loading";

type SpinnerProps = {
  className?: string;
  svgProps?: IconProps;
  withBackground?: boolean;
};

export const Spinner: FC<SpinnerProps> = ({
  className,
  svgProps,
  withBackground = false,
}) => {
  return (
    <div
      className={classNames(cls.Spinner, { [cls.withBack]: withBackground }, [
        className,
      ])}
    >
      <Loading {...svgProps} />
    </div>
  );
};
