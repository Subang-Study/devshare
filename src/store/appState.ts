import { atom, DefaultValue, selector } from 'recoil'

export interface IToastState {
  visible: boolean
  detail: string
}

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

export const toastState = atom<IToastState>({
  key: 'toastState',
  default: {
    visible: false,
    detail: '',
  },
})

export const toastSelector = selector<IToastState>({
  key: 'modalSelector',
  get: ({ get }) => get(toastState),
  set: ({ set, reset }, value) => {
    if (value instanceof DefaultValue) {
      reset(toastState)
    } else {
      set(toastState, { ...value })
    }
  },
})
