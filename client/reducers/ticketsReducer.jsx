import {handleActions} from 'redux-actions'
import {SET_DEVICE_TYPE, SET_DEVICE_MODEL, SET_DEVICE_SERIAL_NO, SET_DEVICE_SCREEN_SIZE,
  SET_CONTACT_NAME, SET_CONTACT_EMAIL, SUBMIT_TICKET} from '../actions/actionTypes'
import $ from 'jquery';
import Immutable from 'immutable'

const initialState = Immutable.Map({
  device_type: null,
  device_model: null,
  device_serial_no: null,
  device_screen_size: null,
  contact_name: null,
  contact_email: null,
  submitted: false,
  errors: null
})

let submitTicket = (state, action) => {
  $.ajax({
    type: 'POST',
    url: '/api/tickets',
    data: JSON.stringify(action.payload),
    contentType: 'application/json',
    success(response) {
      return state.set('submitted', true)
    }, error(xhr, ajaxOptions, thrownError) {
      return state.set('errors', xhr.status + ': ' + thrownError)
    }
  })
}

export default handleActions({
  SET_DEVICE_TYPE (state, action) {
    return state.set('device_type', action.payload)
  },
  SET_DEVICE_MODEL (state, action) {
    return state.set('device_model', action.payload)
  },
  SET_DEVICE_SERIAL_NO (state, action) {
    return state.set('device_serial_no', action.payload)
  },
  SET_DEVICE_SCREEN_SIZE (state, action) {
    return state.set('device_screen_size', action.payload)
  },
  SET_CONTACT_NAME (state, action) {
    return state.set('contact_name', action.payload)
  },
  SET_CONTACT_EMAIL (state, action) {
    return state.set('contact_email', action.payload)
  },
  SUBMIT_TICKET (state, action) {
    return submitTicket(state, action)
  }
}, initialState)
