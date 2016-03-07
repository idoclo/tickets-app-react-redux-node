import React, { Component } from 'react'
import TextInput from './textInput'

class DeviceSerialNo extends Component {
  handleChange(value) {
    let action = this.props.actions.setDeviceSerialNo;
    console.log(this.props.ticket);
    action(value)
  }
  render() {
    let device_type = this.props.ticket.get('device_type');

    if(device_type){
      return (
        <div>
          <h1>What is your device serial number?</h1>
          <TextInput onChange={this.handleChange.bind(this)} />
        </div>
      )
    }else{
      return (
        <div/>
      )
    }
  }
}

export default DeviceSerialNo

