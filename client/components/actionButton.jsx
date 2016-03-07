import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class ActionButton extends Component {
  handleClick(e) {
    let action= this.props.action;
    action(e.target.value);
  }

  render() {
    return (
      <Button bsStyle="primary" bsSize="large" block onClick={this.handleClick.bind(this)}>Submit</Button>
    )
  }
}

export default ActionButton

