'use client'

import React, { useEffect } from 'react'

const useOutSideClick = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.MutableRefObject<any>,
  handlerCallback: (event?: CustomEvent<MouseEvent>) => void,
): void => {
  useEffect(() => {
    const listener = (event: CustomEvent<MouseEvent>) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handlerCallback(event)
    }

    document.addEventListener('mousedown', listener as EventListener)
    document.addEventListener('touchstart', listener as EventListener)
    return () => {
      document.removeEventListener('mousedown', listener as EventListener)
      document.removeEventListener('touchstart', listener as EventListener)
    }
  }, [ref, handlerCallback])
}

export default useOutSideClick
