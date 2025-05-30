import React, { useRef, useState } from 'react'

import { Tooltip } from '../Tooltip/Tooltip'

type TooltipTriggerProps = {
  content: React.ReactNode
  children: React.ReactElement
}

export const TooltipTrigger: React.FC<TooltipTriggerProps> = ({ content, children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = (e: React.MouseEvent) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    const { clientX, clientY } = e
    timeoutRef.current = setTimeout(() => {
      setCoords({ x: clientX, y: clientY + window.scrollY })
      setVisible(true)
    }, 700)
  }

  const hide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setVisible(false)
  }

  return (
    <>
      <div
        ref={ref}
        onMouseEnter={show}
        onMouseMove={show}
        onMouseLeave={hide}
        onClick={hide}
        style={{ display: 'inline-block' }}
      >
        {children}
      </div>
      {visible && (
        <Tooltip content={content} cursorX={coords.x} cursorY={coords.y} onClose={hide} />
      )}
    </>
  )
}
