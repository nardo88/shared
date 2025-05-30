import {
  useRef,
  type ReactNode,
  type MutableRefObject,
  useEffect,
} from "react";
import { Text, TextVariants } from "../Text/Text";

import cls from "./Popup.module.scss";
import Portal from "../Portal";
import { classNames } from "../../helpers/classNames";
import CloseIcon from "../icons/CloseIcon";

type Props = {
  onClose?: () => void;
  getRef?: (ref: HTMLDivElement | null) => void;
  getWrapper?: (ref: HTMLDivElement | null) => void;
  displayClose?: boolean;
  className?: string;
  title?: string | ReactNode;
  maxWidth?: number;
  getHide?: (v: () => void) => void;
  children?: ReactNode;
  needAnimate?: boolean;
};

export const Popup: React.FC<Props> = (props) => {
  const {
    children,
    onClose,
    className,
    title,
    getRef,
    displayClose = true,
    maxWidth,
    getHide,
    getWrapper,
    needAnimate = true,
  } = props;

  const overlay = useRef(null) as MutableRefObject<HTMLDivElement | null>;

  const hideModal = () => {
    if (overlay.current && onClose) {
      const target = overlay.current as HTMLDivElement;
      target.classList.add(cls.hidePopup);
      setTimeout(() => {
        onClose();
      }, 300);
    }
  };

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        hideModal();
      }
    };

    if (getHide) {
      getHide(hideModal);
    }

    document.addEventListener("keydown", listener, false);
    return () => {
      document.removeEventListener("keydown", listener, false);
    };
  }, []);

  return (
    <Portal>
      <div
        onClick={hideModal}
        ref={(r) => {
          overlay.current = r;
          getWrapper?.(r);
        }}
        className={classNames(cls.overlay, { [cls.fadeIn]: needAnimate }, [
          className,
        ])}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={cls.popup}
          style={{ maxWidth }}
        >
          {(title || !!onClose) && (
            <div className={cls.popupHead}>
              {typeof title === "string" && (
                <Text variant={TextVariants.XL2}>{title}</Text>
              )}
              {typeof title === "object" && title}
              {!!onClose && displayClose && (
                <div className={cls.closeBtn}>
                  <CloseIcon onClick={hideModal} />
                </div>
              )}
            </div>
          )}
          <div className={cls.content} ref={(ref) => getRef?.(ref)}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
