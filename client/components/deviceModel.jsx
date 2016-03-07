import React, { Component } from 'react'
import MultiSelect from './multiSelect'

class DeviceModel extends Component {
  render() {
    let action = this.props.actions.setDeviceType;
    let device_type = this.props.ticket.get('device_type')

    if(device_type){
      let options = ['IPhone6', 'IPhone6S', 'IPhone6Plus', 'IPhone6SPlus']
      if(device_type === 'MacBook'){
        options = ['MacBookAir', 'MacBookPro'];
      }
      return (
        <div>
          <h1>What is your device model?</h1>
          <MultiSelect action={action} options={options}/>
        </div>
      )
    }else{
      return (
        <div/>
      )
    }
  }
}

export default DeviceModel

