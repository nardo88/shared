import React, { useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  appendTo?: HTMLElement
  children: React.ReactElement
  isFixedBody?: boolean
}

const DEFAULT_Z_INDEX = 1000
let portalAmount = DEFAULT_Z_INDEX

const Portal: React.FC<PortalProps> = (props) => {
  const { children, isFixedBody = true } = props

  const [container] = useState(document.createElement('div'))

  useLayoutEffect(() => {
    // if (isFixedBody) {
    //   document.querySelectorAll('.portal-padding, body').forEach((node) => {
    //     const element = node as HTMLElement
    //     element.style.setProperty(
    //       'padding-right',
    //       `${window.innerWidth - document.body.clientWidth}px`
    //     )
    //   })
    //   document.querySelectorAll('body').forEach((node) => {
    //     node.classList.add('scroll-disabled')
    //   })
    // }
    portalAmount += 10
    if (container.lastElementChild) {
      const lastElementChild = container.lastElementChild as HTMLElement
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
    document.body.appendChild(container)

    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return createPortal(<div>{children}</div>, container)
}

export default Portal
