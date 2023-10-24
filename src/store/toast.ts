import { atom, DefaultValue, selector } from 'recoil'

export interface IToastState {
  visible: boolean
  detail: string
  color?: 'BLUE' | 'RED'
}

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
