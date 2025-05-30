import { useEffect, useState, type ReactNode, type MouseEvent } from "react";

import { AlertIcon } from "../icons/AlertIcon";

import cls from "./Description.module.scss";
import { classNames } from "../../helpers/classNames";
import { Text } from "../Text/Text";

interface DescriptionProps {
  text: string | ReactNode;
  className?: string;
}

export function Description({ text, className }: DescriptionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openDescription = (e: MouseEvent) => {
    e.preventDefault();
    setIsOpen((prevVal) => !prevVal);
  };

  const toggleDescription = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const portal = document.getElementById("portal-root");
    const highestListeningElem = portal?.children.length ? portal : window;

    highestListeningElem.addEventListener("click", toggleDescription);

    return () => {
      highestListeningElem.removeEventListener("click", toggleDescription);
    };
  });

  return (
    <div
      className={classNames(cls.wrapper, {}, [className])}
      onClick={(e) => e.stopPropagation()}
    >
      {isOpen && (
        <div className={cls.descriptionText}>
          {typeof text === "string" ? <Text>{text}</Text> : text}
        </div>
      )}
      <button className={cls.buttonStyle} onClick={(e) => openDescription(e)}>
        <AlertIcon />
      </button>
    </div>
  );
}
