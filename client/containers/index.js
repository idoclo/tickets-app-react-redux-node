import React, { Component } from 'react'
import Home from './home'
import DeviceInfo from './deviceInfo'

class Master extends Component {
  render() {
    return (
      <div>
        <h1>Create a new ticket</h1>
        {this.props.children}
      </div>
    )
  }
}

export default Master