'use client'

import { darkmodeSelector } from '@/store/darkmode'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

const ThemeControl = () => {
  const [isDark, setIsDark] = useRecoilState(darkmodeSelector)

  useEffect(() => {
    if (localStorage.getItem('darkmode')) {
      setIsDark(localStorage.getItem('darkmode') === 'dark')
    }
  }, [])

  return []
}

export default ThemeControl
