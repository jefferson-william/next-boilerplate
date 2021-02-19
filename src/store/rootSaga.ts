import { all } from 'redux-saga/effects'
import Auth from '~/store/Auth/sagas'
import Repo from '~/store/Repo/sagas'

export default function* rootSaga() {
  return yield all([Auth, Repo])
}
