'use client'

import useToast from '@/lib/hooks/useToast'
import { darkmodeSelector } from '@/store/darkmode'
import { useRecoilState } from 'recoil'

const DarkModeToggle = () => {
  const [mode, setMode] = useRecoilState(darkmodeSelector)

  const { setToast } = useToast()

  const onModeChange = () => {
    setMode(!mode)
    setToast({ visible: true, detail: 'Theme Changed', color: 'BLUE' })
  }

  return (
    <label className="cursor-pointer" htmlFor="darkmode">
      <input id="darkmode" type="checkbox" className="hidden" checked={mode} onChange={onModeChange} />
      <div className={`w-12 h-6 ${mode ? 'bg-blue-600' : 'bg-neutral-400'} rounded-full p-0.5`}>
        <div
          className={`w-5 h-5 bg-white dark:bg-neutral-700 rounded-full shadow-md transform transition-transform duration-300 p-0.5 ${
            mode ? 'translate-x-6' : ''
          }`}
        />
      </div>
    </label>
  )
}

export default DarkModeToggle
