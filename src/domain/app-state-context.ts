export interface IAppState {
  theme: TTheme
}

export type TTheme = 'dark' | 'light' | 'system'

export const INITIAL_STATE_APP: IAppState = {
  theme: 'system'
}
