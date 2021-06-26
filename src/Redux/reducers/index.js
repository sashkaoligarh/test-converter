import { combineReducers } from 'redux'
import currencies from './currencies'


import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
  router:connectRouter(history),
  currencies,
})

export default rootReducer