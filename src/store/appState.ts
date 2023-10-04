import { atom, selectorFamily } from 'recoil'

interface IAppState {
  darkmode: boolean
}

export const appState = atom<IAppState>({
  key: 'appState',
  default: {
    darkmode: false,
  },
})

export const appStateSelector = selectorFamily<any, keyof IAppState>({
  key: 'appStateSelector',
  get:
    (param) =>
    ({ get }) =>
      get(appState)[param],
  set:
    (param) =>
    ({ get, set }, value: boolean) => {
      if (param === 'darkmode') {
        localStorage.setItem('darkmode', value ? 'dark' : 'light')

        if (value) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }

        set(appState, { ...get(appState), [param]: value })
      }
    },
})
