import { toastSelector } from '@/store/appState'
import { useEffect } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'

const useToast = () => {
  const [toast, setToast] = useRecoilState(toastSelector)
  const resetToast = useResetRecoilState(toastSelector)

  useEffect(() => {
    if (toast.visible) {
      setTimeout(() => resetToast(), 1500)
    }
  }, [toast.visible])

  return { toast, setToast }
}

export default useToast
