import { combineReducers } from 'redux'
import Auth from '~/store/Auth/reducer'
import Repo from '~/store/Repo/reducer'

const createRootReducer = () =>
  combineReducers({
    Auth,
    Repo,
  })

export default createRootReducer
