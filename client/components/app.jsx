import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import DeviceType from './deviceType'
import DeviceModel from './deviceModel'
import DeviceSerialNo from './deviceSerialNo'
import DeviceScreenSize from './deviceScreenSize'
import ContactName from './contactName'
import ContactEmail from './contactEmail'

class App extends Component {
  render() {
    let {ticket, actions} = this.props;
    return (
      <div>
        <DeviceType ticket={ticket} actions={actions}/>
        <DeviceModel ticket={ticket} actions={actions}/>
        <DeviceSerialNo ticket={ticket} actions={actions}/>
        <DeviceScreenSize ticket={ticket} actions={actions}/>
        <ContactName ticket={ticket} actions={actions}/>
        <ContactEmail ticket={ticket} actions={actions}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ticket: state.ticketReducers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)