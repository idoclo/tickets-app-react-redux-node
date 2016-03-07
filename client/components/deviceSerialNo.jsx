import React, { Component } from 'react'
import { Input } from 'react-bootstrap'

class DeviceSerialNo extends Component {
  handleChange(e) {
    let action = this.props.actions.setDeviceSerialNo;

    if(e.keyCode === 13) {
      console.log(this.props.ticket);
      action(e.target.value)
    }
  }
  render() {
    let device_type = this.props.ticket.get('device_type');
    let device_serial_no = this.props.ticket.get('device_serial_number');

    if(device_type){
      return (
        <div>
          <h1>What is your device serial number?</h1>
          <Input
            type="text"
            value={device_serial_no}
            onKeyUp={this.handleChange.bind(this)} />
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

