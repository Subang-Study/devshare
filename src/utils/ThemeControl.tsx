'use client'

import { darkmodeSelector } from '@/store/darkmode'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

const ThemeControl = () => {
  const setIsDark = useSetRecoilState(darkmodeSelector)

  useEffect(() => {
    if (localStorage.getItem('darkmode')) {
      setIsDark(localStorage.getItem('darkmode') === 'dark')
    }
  }, [])

  return []
}

export default ThemeControl
