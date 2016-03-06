import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'

class DeviceType extends Component {
  handleClick(e) {
    let {actions} = this.props;
    actions.setDeviceType(e.target.value);
  }
  render() {
    return (
      <div>
        <h1>What is your device type?</h1>
        <ButtonGroup>
          <Button bsSize="sm" block onClick={this.handleClick.bind(this)} value="IPhone">IPhone</Button>
          <Button bsSize="sm" block onClick={this.handleClick.bind(this)} value="MacBook">MacBook</Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default DeviceType

