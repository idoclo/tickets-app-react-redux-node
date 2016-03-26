import React, { Component } from 'react'
import MultiSelect from './multiSelect'

class DeviceType extends Component {
  handleChange(value) {
    let action = this.props.actions.setDeviceType;
    console.log(this.props.ticket);
    action(value);
  }

  render() {
    let options = ['IPhone', 'MacBook'];
    return (
      <div>
        <h3>What is your device type?</h3>
        <MultiSelect onChange={this.handleChange.bind(this)} options={options}/>
      </div>
    )
  }
}

export default DeviceType

