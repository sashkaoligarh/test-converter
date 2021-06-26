import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
// middlewares
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

export const history = createBrowserHistory()
const middlewares = [thunk]
function createMyStore() {
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  const enhancer = compose(applyMiddleware(...middlewares))

  const store = createStore(rootReducer(history), {}, enhancer)
  return store
}

const store = createMyStore()

export default store