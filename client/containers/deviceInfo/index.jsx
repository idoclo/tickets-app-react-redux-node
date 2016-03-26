import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'
import DeviceModel from '../../components/deviceModel'
import DeviceSerialNo from '../../components//deviceSerialNo'
import DeviceScreenSize from '../../components//deviceScreenSize'
import NextButton from '../../components/nextButton'

class DeviceInfo extends Component {
  render() {
    let {ticket, actions} = this.props;
    return (
      <div>
        <DeviceModel ticket={ticket} actions={actions}/>
        <DeviceSerialNo ticket={ticket} actions={actions}/>
        <DeviceScreenSize ticket={ticket} actions={actions}/>
        <NextButton nextUrl="/contactInfo"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeviceInfo)