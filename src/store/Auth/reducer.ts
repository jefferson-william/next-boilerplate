import { produce } from 'immer'
import { Reducer } from 'redux'
import { INITIAL_STATE } from '~/store/Auth/state'
import TYPES from '~/store/Auth/types'
import Action from '~/types/lib/typesafe-actions'
import State from '~/types/store/Auth/state'

const reducer: Reducer<State, Action<State>> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_IS_LOGGED:
      return produce(state, (draft: State) => {
        draft.isLogged = action.payload.isLogged
      })

    default:
      return state
  }
}

export default reducer
