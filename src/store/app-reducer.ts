import { Dispatch } from 'react'
import { produce, Draft } from 'immer'
import { IAppState } from '@/domain'

export type TDispatchApp = Dispatch<AppActionType>

type AppActionType = { type: 'IsFetching' }

export const appReducer = produce((draft: Draft<IAppState>, action: AppActionType): IAppState => {
  switch (action.type) {
    case 'IsFetching':
      return {
        ...draft
      }

    default:
      throw new Error(`Not find type: ${action}`)
  }
})
