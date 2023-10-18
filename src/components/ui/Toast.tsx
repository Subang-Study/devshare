'use client'

import Txt from '@/components/ui/Txt'
import { useRecoilValue } from 'recoil'
import { toastSelector } from '@/store/appState'

const Toast = () => {
  const toast = useRecoilValue(toastSelector)

  return (
    <div className={`${toast.visible ? 'top-14' : '-top-12'} fixed w-full duration-500`}>
      <div
        className={` mx-auto  w-full h-12 max-w-[400px] bg-red-200 border-1 border-red-400 rounded-lg flex justify-between items-center p-4`}
      >
        <Txt fontSize="detail" color="black">
          {toast.detail}
        </Txt>
      </div>
    </div>
  )
}

export default Toast
