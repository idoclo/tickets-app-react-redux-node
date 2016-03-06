import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'
import { setDeviceType } from '../actions'
import { connect } from 'react-redux'

class DeviceType extends Component {
  handleClick() {
    console.log(this.pros);
    this.pros.dispatch(setDeviceType(e.target.text))
  }
  render() {
    return (
      <div>
        <h1>What is your device type?</h1>
        <ButtonGroup>
          <Button bsSize="sm" block onclick={this.handleClick.bind(this)}>IPhone</Button>
          <Button bsSize="sm" block onclick={this.handleClick.bind(this)}>MacBook</Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default DeviceType

