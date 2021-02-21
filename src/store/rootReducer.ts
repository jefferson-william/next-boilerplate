import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux'
import Auth from '~/store/Auth/reducer'
import Repo from '~/store/Repo/reducer'
import Action from '~/types/lib/typesafe-actions'
import States from '~/types/store/rootStates'

export const combinedReducer = combineReducers({
  Auth,
  Repo,
})

const rootReducer = (state: States | undefined, action: Action<any>) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  }

  return combinedReducer(state, action)
}

export default rootReducer
