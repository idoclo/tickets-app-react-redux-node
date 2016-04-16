import {handleActions} from 'redux-actions'
import Immutable from 'immutable'

const initialState = Immutable.Map({});

export default handleActions({
  'setDeviceType' (state, action) {
    return state.set('deviceType', action.payload)
  },
  'setDeviceModel' (state, action) {
    return state.set('deviceModel', action.payload)
  },
  'setDeviceSerialNo' (state, action) {
    return state.set('deviceSerialNo', action.payload)
  },
  'setDeviceScreenSize' (state, action) {
    return state.set('deviceScreenSize', action.payload)
  },
  'setContactName' (state, action) {
    return state.set('contactName', action.payload)
  },
  'setContactEmail' (state, action) {
    return state.set('contactEmail', action.payload)
  }
}, initialState)
