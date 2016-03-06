import React from 'react'
import { Button } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'

const DeviceType = () => (
  <div>
    <h1>What is your device type?</h1>
    <ButtonGroup>
      <Button bsSize="sm" block>IPhone</Button>
      <Button bsSize="sm" block>MacBook</Button>
    </ButtonGroup>
  </div>
)

export default DeviceType

