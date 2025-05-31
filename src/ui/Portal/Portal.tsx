import React, { useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  appendTo?: HTMLElement
  children: React.ReactElement
  isFixedBody?: boolean
}

const DEFAULT_Z_INDEX = 1000
let portalAmount = DEFAULT_Z_INDEX

const getWrapper = () => {
  const w = document.getElementById('portal-wrapper')
  if (w) return w

  const wrapper = document.createElement('div')
  wrapper.setAttribute('id', 'portal-wrapper')
  return wrapper
}

const Portal: React.FC<PortalProps> = (props) => {
  const { children, isFixedBody = true } = props

  const container = useRef(getWrapper())

  useLayoutEffect(() => {
    portalAmount += 10
    if (container.current.lastElementChild) {
      const lastElementChild = container.current.lastElementChild as HTMLElement
      lastElementChild.style.zIndex = String(portalAmount)
    }
    return (): void => {
      if (isFixedBody) {
        document.querySelectorAll('body').forEach((node) => {
          node.classList.remove('scroll-disabled')
        })
        document.querySelectorAll('.portal-padding, body').forEach((node) => {
          const element = node as HTMLElement
          element.style.removeProperty('padding-right')
        })
      }
    }
  }, [container])

  useLayoutEffect(() => {
    document.body.appendChild(container.current)

    return () => {
      if (document.body.contains(container.current))
        document.body.removeChild(container.current)
    }
  }, [])

  return createPortal(children, container.current)
}

export default Portal
