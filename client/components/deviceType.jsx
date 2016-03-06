import Immutable from 'immutable'
import React from 'react'
import { Button } from 'react-bootstrap'

const DeviceType = () => (
  <div>
    <h1>What is your device type?</h1>
    <Button bsSize="large" block>IPhone</Button>
    <Button bsSize="large" block>MacBook</Button>
  </div>
)

export default DeviceType

