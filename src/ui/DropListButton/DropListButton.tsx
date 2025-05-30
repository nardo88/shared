import React, { type ReactNode, useEffect, useRef, useState } from "react";

import Button from "../Button/Button";
import { Input } from "../Input/Input";
import { Text, TextVariants } from "../Text/Text";

import cls from "./DropListButton.module.scss";
import useDebounce from "../../helpers/useDebounce";
import { classNames } from "../../helpers/classNames";
import DownloadIconV2 from "../icons/DownloadIconV2";

export type DropListType = {
  id: string;
  click: () => void;
  title: string;
};

type Props = {
  dropList: DropListType[];
  disabled?: boolean;
  children?: ReactNode;
  hideIcon?: boolean;
  className?: string;
  needTitle?: boolean;
  title?: string;
  filter?: {
    value: string;
    setValue: (val: string) => void;
    placeholder?: string;
  };
  displayId?: boolean;
};

const DropListButton: React.FC<Props> = ({
  dropList,
  disabled = false,
  children,
  hideIcon = false,
  className,
  needTitle = false,
  filter,
  title,
  displayId = false,
}) => {
  const [isDropListVisible, setIsDropListVisible] = useState(false);
  const dropListRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState("");

  const toggleDropList = () => {
    setIsDropListVisible(!isDropListVisible);
  };
  const debounce = useDebounce((v: string) => filter?.setValue?.(v), 300);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropListRef.current &&
      !dropListRef?.current?.contains(event?.target as Node)
    ) {
      setIsDropListVisible(false);
      setValue("");
      debounce("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={classNames(cls.wrapper, {}, [className])} ref={dropListRef}>
      <Button
        onClick={toggleDropList}
        Icon={hideIcon ? null : DownloadIconV2}
        className={cls.button}
        disabled={disabled}
        title={title}
      >
        {children}
      </Button>

      {isDropListVisible && (
        <div className={cls.list}>
          {filter && (
            <div className={cls.filter}>
              <Input
                value={value}
                placeholder={filter?.placeholder}
                onChange={(v) => {
                  setValue(v);
                  debounce(v);
                }}
                canClear
                iconSearch
              />
            </div>
          )}
          {dropList.map((el) => (
            <div
              key={el.id}
              title={needTitle ? el.title : ""}
              onClick={() => {
                el.click();
                setIsDropListVisible(false);
                if (filter) {
                  setValue("");
                  debounce("");
                }
              }}
              className={cls.item}
            >
              {el.title}
              {displayId && <span className={cls.idText}>{el.id}</span>}
            </div>
          ))}
          {dropList.length === 0 && (
            <Text variant={TextVariants.HELPER} className={cls.empty}>
              Нет данных для отображения
            </Text>
          )}
        </div>
      )}
    </div>
  );
};

export default DropListButton;
