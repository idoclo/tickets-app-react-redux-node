import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'
import MultiSelectQuestion from '../../components/MultiSelectQuestion'
import DeviceSerialNo from '../../components//deviceSerialNo'
import NextButton from '../../components/nextButton'

class DeviceInfo extends Component {
  render() {
    let {ticket, actions} = this.props;
    let isMacBook = ticket.get('device_type')  === 'MacBook'
    let deviceTypeOptions = (
      isMacBook ? ['MacBookAir', 'MacBookPro'] : ['IPhone6', 'IPhone6S', 'IPhone6Plus', 'IPhone6SPlus']
    );

    return (
      <div>
        <MultiSelectQuestion label='What is your device model?' options={deviceTypeOptions} action={actions.setDeviceModel}/>
        <DeviceSerialNo ticket={ticket} actions={actions}/>
        <MultiSelectQuestion label='What is your device size?' options={['11 inch', '13 inch', '15 inch']} action={actions.setDeviceSize} show={ isMacBook }/>
        <NextButton nextUrl="/#/contactInfo"/>
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