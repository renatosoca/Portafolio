import { FC, PropsWithChildren, createContext, useContext, useReducer } from 'react'
import { IAppState, INITIAL_STATE_APP, TTheme } from '@/domain'
import { TDispatchApp, appReducer } from './app-reducer'

export const AppStateContext = createContext<IAppState | undefined>(undefined)
export const AppDispatchContext = createContext<TDispatchApp | undefined>(undefined)

interface AppProviderProps extends PropsWithChildren {
  defaultTheme?: TTheme
}

export const AppProvider: FC<AppProviderProps> = ({ children, defaultTheme }) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE_APP, () => {
    const theme = (localStorage.getItem('app-theme') as IAppState['theme']) || defaultTheme
    return theme ? { ...INITIAL_STATE_APP, theme } : INITIAL_STATE_APP
  })

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

export const useAppStateContext = () => {
  const context = useContext(AppStateContext)

  if (!context) throw new Error('useAppStateContext not init')

  return context
}

export const useAppDispatchContext = () => {
  const context = useContext(AppDispatchContext)

  if (!context) throw new Error('useAppDispatchContext not init')

  return context
}
