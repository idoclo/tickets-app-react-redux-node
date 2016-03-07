import React, { Component } from 'react'
import { Input } from 'react-bootstrap'

class TextInput extends Component {
  handleKeyUp(e) {
    if(e.keyCode === 13) {
      this.props.onChange(e.target.value)
    }
  }

  render() {
    let value = this.props.value;
    return (
      <Input
        type="text"
        value={value}
        onKeyUp={this.handleKeyUp.bind(this)} />
    )
  }
}

export default TextInput

