import {
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import { detectLeftButton } from "../../modules";

import cls from "./Element.module.scss";
import { classNames } from "../../../../helpers/classNames";

/**
 * Описание пропсов для компонента
 *
 * @param activeStyle - инлайновые стили для перемещаемого элемента
 * @param index - индекс элемента массива
 * @param data - список элементов. Дженериком можем передать тип элемента списка (Т)
 * @param setData - функция изменения состояния. В качестве аргумента получает объект
 * @param keyField - Элемент списка может быть примитивным типом данных (строка число),
 * а может быть объектом. В keyField указывается названия ключа, который является
 * уникальным идентификатором в рамках списка. (может быть id, а может быть _id)
 * @param scale - при захвате элемента к нему будет применяться стиль
 * transform: scale(); этот параметр определяет насколько элемент будет увеличиваться в масштабе.
 * @param disabled - определяет будет ли Reorder заблокирован для перемещения
 */

type ScaleType = 1.05 | 1.1 | 1.2 | 1.3;
type Field = keyof CSSProperties;

interface IDragElementProps<T> {
  children: ReactNode;
  className?: string;
  activeStyle?: CSSProperties;
  index: number;
  data: Array<T>;
  setData: (props: { item: T; index: number; data: T[] }) => void;
  keyField?: string;
  scale?: ScaleType;
  disabled?: boolean;
}

export function Element<T>({
  children,
  index,
  data,
  setData,
  keyField,
  className,
  activeStyle,
  scale,
  disabled = false,
}: IDragElementProps<T>) {
  const ref = useRef<HTMLDivElement>(null);
  const [container, setContainer] = useState<Element | null>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState(false);

  function dragStart(e: PointerEvent, index: number) {
    if (!detectLeftButton(e) || disabled) {
      return;
    }
    if (window.getSelection) {
      if (window?.getSelection()?.empty) {
        // Chrome
        window.getSelection()?.empty();
      } else if (window.getSelection()?.removeAllRanges) {
        // Firefox
        window.getSelection()?.removeAllRanges();
      }
    }
    if (!container) return;
    setIsDragging(true);
    const items = Array.from(container.childNodes) as HTMLDivElement[];
    const dragItem = items[index] as HTMLDivElement;
    const itemsBelowDragItem = [...items].splice(index + 1) as HTMLDivElement[];
    const notDragItems = [...items].filter((_, i) => i !== index);
    const dragData = data[index] as any;
    let newData = [...data];

    // получение геометрии выбранного элемента
    const dragBoundingRect = dragItem.getBoundingClientRect();
    const offsetTop = dragItem.offsetTop;
    const offsetLeft = dragItem.offsetLeft;

    // получаем расстояние между карточками
    const space =
      items.length > 1
        ? items[1].getBoundingClientRect().top -
          items[0].getBoundingClientRect().bottom
        : 0;
    // стилизуем выбранный элемент
    if (activeStyle) {
      CSSStyleDeclaration;
      (Object.keys(activeStyle) as Field[]).forEach((elem) => {
        (dragItem.style as any)[elem] = activeStyle[elem];
      });
    }

    dragItem.style.position = "fixed";
    dragItem.style.zIndex = "9999";
    dragItem.style.width = dragBoundingRect.width + "px";
    dragItem.style.height = dragBoundingRect.height + "px";
    dragItem.style.cursor = "grabbing";
    dragItem.style.transform = `scale(${scale || 1})`;
    dragItem.style.left = offsetLeft + "px";

    if (isAdmin) {
      if (ref.current!.parentElement?.scrollTop || window.scrollY) {
        dragItem.style.top = `${
          dragBoundingRect.y + window.scrollY - navbarHeight
        }px`;
      } else {
        dragItem.style.top = offsetTop + "px";
      }
    } else {
      dragItem.style.top = dragBoundingRect.y + "px";
    }

    // добавляем заглушку на место перетаскиваемого элемента
    const div = document.createElement("div");
    div.id = "temp-div";
    div.style.width = dragBoundingRect.width + "px";
    div.style.height = dragBoundingRect.height + "px";
    div.style.pointerEvents = "none";
    container.appendChild(div);

    const distance = dragBoundingRect.height + space;

    itemsBelowDragItem.forEach((item) => {
      item.style.transform = `translateY(${distance}px)`;
    });
    // Движение элемента
    const x = e.clientX;
    const y = e.clientY;

    function dragMove(e: PointerEvent) {
      const posX = e.clientX - x;
      const posY = e.clientY - y;

      // меняем позицию выбранного элемента
      dragItem.style.transform = `translate(${posX}px, ${posY}px) scale(${
        scale || 1
      })`;
      notDragItems.forEach((item) => {
        const rect1 = dragItem.getBoundingClientRect();
        const rect2 = item.getBoundingClientRect();

        const isOverlapping =
          rect1.y < rect2.y + rect2.height / 2 &&
          rect1.y + rect1.height / 2 > rect2.y;

        if (isOverlapping) {
          if (item.getAttribute("style")) {
            item.style.transform = "";
            // eslint-disable-next-line no-param-reassign
            index++;
          } else {
            item.style.transform = `translateY(${distance}px)`;
            // eslint-disable-next-line no-param-reassign
            index--;
          }
          newData = newData.filter((item: any) =>
            keyField ? item[keyField] !== dragData[keyField] : item !== dragData
          );
          newData.splice(index, 0, dragData);
        }
      });
    }

    document.onpointermove = dragMove as any;

    function dragEnd() {
      document.onpointerup = null;
      document.onpointermove = null;

      if (activeStyle) {
        (Object.keys(activeStyle) as Field[]).forEach((key: string) => {
          delete (dragItem.style as any)[key];
        });
      }

      setIsDragging(false);
      // @ts-expect-error свойство доступно только для чтения
      dragItem.style = {};
      container!.removeChild(div);
      items.forEach((item) => {
        item.style.transform = "";
      });

      setData({
        data: newData,
        index,
        item: dragData,
      });
    }

    // Отпускаем кнопку мыши
    document.onpointerup = dragEnd;
  }

  useEffect(() => {
    if (ref.current) {
      setContainer(ref.current.parentElement);
    }
    const header = document.getElementsByTagName("header");
    if (header[0]) {
      setNavbarHeight(header[0].clientHeight);
      setIsAdmin(header[0]?.dataset?.type === "admin");
    }
  }, []);
  return (
    <div
      ref={ref}
      className={classNames(
        cls.dragItem,
        { [cls.dragging]: isDragging, [cls.disabled]: disabled },
        [className]
      )}
      onPointerDown={(e) => dragStart(e, index)}
    >
      {children}
    </div>
  );
}
