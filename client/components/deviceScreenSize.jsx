import React, { Component } from 'react'
import MultiSelect from './multiSelect'

class DeviceScreenSize extends Component {
  handleChange(value) {
    let action = this.props.actions.setDeviceScreenSize;
    console.log(this.props.ticket);
    action(value);
  }

  render() {
    let device_type = this.props.ticket.get('device_type')

    if(device_type == 'MacBook'){
      let options = ['11 inch', '13 inch', '15 inch']
      return (
        <div>
          <h3>What is your device screen size?</h3>
          <MultiSelect onChange={this.handleChange.bind(this)} options={options}/>
        </div>
      )
    }else{
      return (
        <div/>
      )
    }
  }
}

export default DeviceScreenSize

