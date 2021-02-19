import { MakeStore } from 'next-redux-wrapper'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '~/store/rootReducer'
import rootSaga from '~/store/rootSaga'

const configureStore: MakeStore | any = (preloadedState: any, { isServer = true, req = null }: any) => {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware]

  const enhancer: any = applyMiddleware(...middlewares)

  const store: any = createStore(rootReducer(), preloadedState, enhancer)

  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  return store
}

export default configureStore
