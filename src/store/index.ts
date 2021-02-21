import { createWrapper } from 'next-redux-wrapper'
import { createStore as createReduxStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '~/store/rootReducer'
import rootSaga from '~/store/rootSaga'
import States from '~/types/store/rootStates'

export const store = () => {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = applyMiddleware(sagaMiddleware)

  const myStore = createReduxStore<States, any, any, any>(rootReducer, middlewares)

  myStore.sagaTask = sagaMiddleware.run(rootSaga)

  return myStore
}

const wrapperStore = createWrapper<States>(store, { debug: process.env.NODE_ENV === 'development' })

export default wrapperStore
