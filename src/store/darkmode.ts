import { DefaultValue, atom, selector } from 'recoil'

interface IDarkmodeState {
  darkmode: boolean
}

export const darkmodeState = atom<IDarkmodeState>({
  key: 'darkmodeState',
  default: {
    darkmode: false,
  },
})

export const darkmodeSelector = selector<boolean>({
  key: 'darkmodeSelector',
  get: ({ get }) => get(darkmodeState).darkmode,
  set: ({ get, set }, value) => {
    localStorage.setItem('darkmode', value ? 'dark' : 'light')

    if (value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (!(value instanceof DefaultValue)) {
      set(darkmodeState, { ...get(darkmodeState), darkmode: value })
    }
  },
})
