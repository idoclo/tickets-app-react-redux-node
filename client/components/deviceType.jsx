import React, { Component } from 'react'
import MultiSelect from './multiSelect'

class DeviceType extends Component {
  render() {
    let action = this.props.actions.setDeviceType;
    let options = ['IPhone', 'MacBook'];
    return (
      <div>
        <h1>What is your device type?</h1>
        <MultiSelect action={action} options={options}/>
      </div>
    )
  }
}

export default DeviceType

