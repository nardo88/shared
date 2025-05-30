import { useEffect, useRef, useState, type ReactNode, type FC } from "react";

import cls from "./Accordion.module.scss";
import { classNames } from "../../helpers/classNames";
import { Text, TextVariants } from "../Text/Text";
import ArrowBottom from "../icons/ArrowBottom";

interface IChangeSubtitle {
  onChange: (value: string, prev: string) => void;
  validate: (v: string) => boolean;
  invalidMessage: string;
}

interface AccordionProps {
  children: ReactNode;
  className?: string;
  control?: ReactNode;
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  isOpen: boolean;
  setIsOpen: () => void;
  subtitlePrefix?: string;
  changeSubtitle?: IChangeSubtitle;
}

export const Accordion: FC<AccordionProps> = (props) => {
  const {
    className,
    children,
    control,
    icon,
    title,
    isOpen,
    setIsOpen,
    subtitle,
    subtitlePrefix,
    changeSubtitle,
  } = props;

  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [value, setValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => setIsOpen();

  const save = () => {
    if (changeSubtitle && subtitle !== undefined) {
      setError(null);
      const isValid = changeSubtitle.validate(value.trim());
      if (isValid) {
        changeSubtitle.onChange(value.trim(), subtitle);
      } else {
        setError(changeSubtitle.invalidMessage);
      }
    }
    setIsEdit(false);
  };

  const hideList = (e: globalThis.MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node | null)) {
      setIsEdit(false);
      setValue("");
    }
  };

  useEffect(() => {
    // fix race condition
    let active = true;
    if (error && active) {
      setTimeout(() => setError(null), 5000);
    }

    return () => {
      active = false;
    };
  }, [error]);

  useEffect(() => {
    window.addEventListener("click", hideList);

    return () => window.removeEventListener("click", hideList);
  }, []);

  return (
    <div className={classNames(cls.Accordion, {}, [className])}>
      <div className={cls.topWrapper}>
        <div className={cls.top}>
          <div className={cls.titleWrapper} onClick={toggleAccordion}>
            <div className={cls.withIconWrapper}>
              {icon && <div>{icon}</div>}
              <Text className={cls.title}>{title}</Text>
            </div>
            {subtitle !== undefined && (
              <div
                className={cls.subtitleContainer}
                onClick={(e) => e.stopPropagation()}
              >
                {subtitlePrefix && (
                  <Text variant={TextVariants.LIGHT_13}>{subtitlePrefix}</Text>
                )}
                <div
                  className={classNames("", { [cls.cup]: !!changeSubtitle })}
                  onDoubleClick={() => {
                    if (changeSubtitle) {
                      setIsEdit(true);
                      setValue(subtitle);
                    }
                  }}
                  ref={ref}
                >
                  {isEdit ? (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        save();
                      }}
                    >
                      <input
                        value={value}
                        onChange={(e) => setValue?.(e.target.value)}
                      />
                    </form>
                  ) : (
                    <Text variant={TextVariants.LIGHT_13}>{subtitle}</Text>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className={cls.rightSide}>
            {control && <div>{control}</div>}
            <div className={cls.arrowWrapper} onClick={toggleAccordion}>
              <ArrowBottom
                className={classNames(cls.arrow, { [cls.arrowOpen]: isOpen })}
              />
            </div>
          </div>
        </div>
        {error && (
          <Text className={cls.error} variant={TextVariants.ERROR}>
            {error}
          </Text>
        )}
      </div>

      {isOpen && <div className={cls.wrapper}>{children}</div>}
    </div>
  );
};
