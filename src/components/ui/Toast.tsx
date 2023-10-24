'use client'

import Txt from '@/components/ui/Txt'
import { useRecoilValue } from 'recoil'
import { toastSelector } from '@/store/toast'

const TOAST_COLOR = {
  BLUE: 'bg-blue-200 border-blue-400',
  RED: 'bg-red-200 border-red-400',
} as const

const TOAST_TEXT_COLOR = {
  BLUE: 'blue',
  RED: 'red',
} as const

const Toast = () => {
  const toast = useRecoilValue(toastSelector)

  return (
    <div className={`${toast.visible ? 'top-14' : '-top-12'} fixed w-full duration-500`}>
      <div
        className={`${
          toast.color && TOAST_COLOR[toast.color]
        } mx-auto  w-full h-12 max-w-[400px] border-1 rounded-lg flex justify-between items-center p-4`}
      >
        <Txt fontSize="detail" color={toast.color ? TOAST_TEXT_COLOR[toast.color] : 'red'}>
          {toast.detail}
        </Txt>
      </div>
    </div>
  )
}

export default Toast
