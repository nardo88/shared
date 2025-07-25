import { type FC } from "react";

import { Percent } from "../Percent/Percent";
import { Score } from "../Score/Score";

import cls from "./Main.module.scss";
import type {
  CustomRangePropsType,
  ICustomRangePercentProps,
  ICustomRangeScoreProps,
} from "../../types";
import { classNames } from "../../../../helpers/classNames";
import { Text, TextVariants } from "../../../Text/Text";

export const Main: FC<CustomRangePropsType> = (props) => {
  const { className, label, variant = "percent", errorText } = props;
  return (
    <div className={classNames(cls.Main, {}, [className])}>
      {label && (
        <>
          {typeof label === "string" && (
            <Text
              className={classNames(cls.label, { [cls.error]: !!errorText })}
            >
              {label}
            </Text>
          )}
          {typeof label === "object" && label}
        </>
      )}
      {variant === "percent" && (
        <Percent {...(props as ICustomRangePercentProps)} />
      )}
      {variant === "score" && <Score {...(props as ICustomRangeScoreProps)} />}
      {errorText && (
        <Text className={cls.error} variant={TextVariants.LIGHT_13}>
          {errorText}
        </Text>
      )}
    </div>
  );
};
