import { applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import flow from './flow'
import skylink from 'skylink/adapter'

export default applyMiddleware( thunk, flow, skylink )
