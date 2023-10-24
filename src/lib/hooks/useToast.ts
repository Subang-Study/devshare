import { toastSelector } from '@/store/toast'
import { useEffect } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'

const useToast = () => {
  const [toast, setToast] = useRecoilState(toastSelector)
  const resetToast = useResetRecoilState(toastSelector)

  useEffect(() => {
    if (toast.visible) {
      setTimeout(() => resetToast(), 3000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast.visible])

  return { toast, setToast }
}

export default useToast
