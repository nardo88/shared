import React, { type FC, useEffect, useRef, useState } from "react";

import cls from "./Tooltip.module.scss";
import Portal from "../../../Portal";

type TooltipProps = {
  cursorX: number;
  cursorY: number;
  content: React.ReactNode;
  onClose: () => void;
};

const TOOLTIP_WIDTH = 250;
const TOOLTIP_HEIGHT = 40;
const OFFSET_Y = 28;
const VIEWPORT_PADDING = 8;

export const Tooltip: FC<TooltipProps> = ({
  cursorX,
  cursorY,
  content,
  onClose,
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    position: "absolute",
  });

  useEffect(() => {
    const handleScroll = () => onClose();
    window.addEventListener("scroll", handleScroll, true);

    const tooltip = tooltipRef.current;
    if (tooltip) {
      const { innerWidth, innerHeight } = window;

      let left = cursorX - TOOLTIP_WIDTH / 2;
      let top = cursorY + OFFSET_Y;

      if (left < VIEWPORT_PADDING) left = VIEWPORT_PADDING;
      if (left + TOOLTIP_WIDTH > innerWidth - VIEWPORT_PADDING)
        left = innerWidth - TOOLTIP_WIDTH - VIEWPORT_PADDING;

      if (top + TOOLTIP_HEIGHT > innerHeight - VIEWPORT_PADDING)
        top = cursorY - OFFSET_Y - TOOLTIP_HEIGHT;

      if (top < VIEWPORT_PADDING) top = VIEWPORT_PADDING;

      setStyle({ top, left, position: "absolute" });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [cursorX, cursorY, onClose]);

  return (
    <Portal isFixedBody={false}>
      <div ref={tooltipRef} className={cls.tooltip} style={style}>
        {content}
      </div>
    </Portal>
  );
};
