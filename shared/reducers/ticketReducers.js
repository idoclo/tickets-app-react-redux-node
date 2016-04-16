import {handleActions} from 'redux-actions'
import Immutable from 'immutable'

const initialState = Immutable.Map({});

export default handleActions({
  'set_device_type' (state, action) {
    return state.set('device_type', action.payload)
  },
  'set_device_model' (state, action) {
    return state.set('device_model', action.payload)
  },
  'set_device_serial_no' (state, action) {
    return state.set('device_serial_no', action.payload)
  },
  'set_device_screen_size' (state, action) {
    return state.set('device_screen_size', action.payload)
  },
  'set_contact_name' (state, action) {
    return state.set('contact_name', action.payload)
  },
  'set_contact_email' (state, action) {
    return state.set('contact_email', action.payload)
  }
}, initialState)
