import ticketReducer from './ticketReducer'
import {routerReducer } from 'react-router-redux'
import {combineReducers} from 'redux'

export default combineReducers({
  routing: routerReducer,
  ticketReducer
})