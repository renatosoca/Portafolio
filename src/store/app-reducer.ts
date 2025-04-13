import { Dispatch } from 'react'
import { produce, Draft } from 'immer'
import { IAppState, TTheme } from '@/domain'

export type TDispatchApp = Dispatch<AppActionType>

type AppActionType = { type: 'Change Theme'; payload: TTheme }

export const appReducer = produce((draft: Draft<IAppState>, action: AppActionType): IAppState => {
  switch (action.type) {
    case 'Change Theme':
      return {
        ...draft,
        theme: action.payload
      }

    default:
      throw new Error(`Not find type: ${action}`)
  }
})
