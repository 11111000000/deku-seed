import { combineReducers, compose, createStore } from 'redux'
import reducers from './reducers'
import middleware from './middleware'

export default function configureStore(initialState = {}) {

  const storeCreator = compose(
    middleware,
    (window.devToolsExtension ? window.devToolsExtension() : it => it)
  )(createStore)

  const store = storeCreator(combineReducers(reducers), initialState)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = combineReducers(require('./reducers').default)
      store.replaceReducer(nextReducer)
    })
  }

  return store

}
