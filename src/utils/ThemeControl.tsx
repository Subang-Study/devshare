'use client'

import { appStateSelector } from '@/store/appState'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

const ThemeControl = () => {
  const [isDark, setIsDark] = useRecoilState(appStateSelector('darkmode'))

  useEffect(() => {
    if (localStorage.getItem('darkmode')) {
      setIsDark(localStorage.getItem('darkmode') === 'dark')
    }
  }, [])

  return []
}

export default ThemeControl
