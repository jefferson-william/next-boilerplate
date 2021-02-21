import { createWrapper } from 'next-redux-wrapper'
import { createStore as createReduxStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '~/store/rootReducer'
import ALL_INITIAL_STATES from '~/store/rootStates'
import States from '~/types/store/rootStates'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = applyMiddleware(sagaMiddleware)

export const createStore = () => createReduxStore<States, any, any, any>(rootReducer, ALL_INITIAL_STATES, middlewares)

export const store = () => {
  const myStore = createStore()

  myStore.sagaTask = sagaMiddleware.run(rootSaga)

  return myStore
}

const wrapperStore = createWrapper<States>(store, { debug: process.env.NODE_ENV === 'development' })

export default wrapperStore
