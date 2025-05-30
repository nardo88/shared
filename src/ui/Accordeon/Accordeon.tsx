import {
  useEffect,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
  type FC,
} from "react";

import { type OptionItem, SettingsMenu } from "../SettingsMenu/SettingsMenu";
import { Text, TextVariants } from "../Text/Text";

import cls from "./Accordeon.module.scss";
import { classNames } from "../../helpers/classNames";

interface AccordionProps {
  className?: string;
  component: ReactNode;
  subtitle?: string;
  title: string | ReactNode;
  collapsed?: boolean;
  setCollapsed?: Dispatch<SetStateAction<boolean>>;
  type?: "task" | "poll" | "light";
  options?: OptionItem[];
  icons?: { close: ReactNode; open: ReactNode };
  iconClassName?: string;
}

export const Accordion: FC<AccordionProps> = (props) => {
  const {
    className,
    component,
    subtitle,
    title,
    collapsed,
    setCollapsed,
    type = "none",
    options,
    icons,
    iconClassName,
  } = props;

  const [isOpen, setIsOpen] = useState(!collapsed);
  const displaySettings = type === "task" || type === "poll";

  useEffect(() => {
    if (collapsed) {
      setIsOpen(false);
      if (setCollapsed) setCollapsed(false);
    }
  }, [collapsed]);

  return (
    <div
      draggable={false}
      className={classNames(
        cls.AccordeonBlock,
        { [cls.light]: type === "light" },
        [className]
      )}
    >
      <Text variant={TextVariants.S_LIGHT}>{subtitle}</Text>
      <div className={cls.AccordeonTop}>
        <div
          className={cls.AccordeonTitle}
          onClick={() => setIsOpen((prevOpen) => !prevOpen)}
        >
          <span className={cls.title}>
            {typeof title === "string" ? (
              <div dangerouslySetInnerHTML={{ __html: title }} />
            ) : (
              title
            )}
          </span>
        </div>

        <div className={cls.controll}>
          {isOpen ? (
            <span
              className={classNames(cls.Toggle, {}, [iconClassName])}
              onClick={() => setIsOpen((prevOpen) => !prevOpen)}
            >
              {icons?.close || "-"}
            </span>
          ) : (
            <span
              className={classNames(cls.Toggle, {}, [iconClassName])}
              onClick={() => setIsOpen((prevOpen) => !prevOpen)}
            >
              {icons?.open || "+"}
            </span>
          )}
          {displaySettings && options && options.length > 0 && (
            <div className={cls.LessonOptions}>
              <SettingsMenu options={options} id={type} />
            </div>
          )}
        </div>
      </div>
      {isOpen && <div className={cls.AccordeonComponent}>{component}</div>}
    </div>
  );
};
