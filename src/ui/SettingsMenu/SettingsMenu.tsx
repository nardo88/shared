/**
 * Компонент, выводит выпадающий список с настройками.
 *
 * @param {object} menuItems - список элементов выпадающего меню.
 * Массив объектов в формате { title, onClick }
 * @param {string} id - id элемента
 */
import {
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  type RefObject,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";

import { Text } from "../Text/Text";

import cls from "./SettingsMenu.module.scss";
import { classNames } from "../../helpers/classNames";
import SettingsIcon from "../icons/SettingsIcon";

export type OptionItem = {
  title: string;
  onClick: (e: MouseEvent<HTMLDivElement>, id: string) => void;
  color?: string;
  icon?: ReactElement;
  disabled?: boolean;
};

type SettingsMenuProps = {
  id: string;
  options: Array<OptionItem>;
  className?: string;
  menuText?: ReactNode;
  wrapper?: RefObject<HTMLElement>;
  getHide?: (cb: () => void) => void;
};

export const SettingsMenu = memo(
  ({
    options,
    id,
    className,
    menuText,
    wrapper,
    getHide,
  }: SettingsMenuProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const optionRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<null | string>(null);

    const openMenu = () => {
      if (ref.current && wrapper?.current && optionRef.current) {
        const settingRect = ref.current?.getBoundingClientRect();
        const wrapperRect = wrapper.current?.getBoundingClientRect();
        const posY = settingRect.y - wrapperRect.y;
        const toEnd = wrapperRect.height - posY;
        if (toEnd <= optionRef.current.children[0].clientHeight + 40) {
          optionRef.current.classList.add(cls.showUnder);
        }
      }
      setIsOpen(isOpen ? null : id);
    };

    const hideMenu = (e: any) => {
      if (ref.current && !ref.current.contains(e.target) && optionRef.current) {
        setIsOpen(null);
        optionRef.current.classList.remove(cls.showUnder);
      }
    };

    useEffect(() => {
      window.addEventListener("click", hideMenu);
      if (wrapper?.current) {
        wrapper?.current.addEventListener("click", hideMenu);
      }
      return () => {
        window.removeEventListener("click", hideMenu);
        if (wrapper?.current) {
          wrapper?.current.removeEventListener("click", hideMenu);
        }
      };
    }, []);

    useEffect(() => {
      if (isOpen) {
        optionRef!.current?.classList.add(cls.active);
      } else {
        optionRef!.current?.classList.remove(cls.active);
      }
    }, [isOpen]);

    useEffect(() => {
      getHide?.(() => {
        setIsOpen(null);
      });
    }, []);

    if (!options.length) return null;

    return (
      <div className={classNames(cls.SettingsMenu, {}, [className])} ref={ref}>
        <span className={cls.settingsBar} onClick={openMenu}>
          {menuText || <SettingsIcon />}
        </span>

        <div ref={optionRef} className={cls.settings}>
          <div className={cls.optionList}>
            {options?.map(
              (item: OptionItem) =>
                item && (
                  <div
                    key={item.title}
                    className={classNames(cls.menuItem, {
                      [cls.disabled]: item.disabled,
                    })}
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                      if (item.disabled) return;
                      item.onClick(e, id);
                      setIsOpen(null);
                    }}
                  >
                    {item.icon && item.icon}
                    <Text>{item.title}</Text>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    );
  }
);
