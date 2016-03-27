import configureStore from './store'
import render from './render'
import 'styles'
import { appInit } from './actions'

requestAnimationFrame(function () {
  const store = configureStore()
  store.dispatch(appInit())
  render(store)
})
