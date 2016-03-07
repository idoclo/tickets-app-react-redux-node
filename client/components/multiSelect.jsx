import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'

class MultiSelect extends Component {
  handleClick(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    let options= this.props.options;
    return (
      <ButtonGroup>
        {options.map(
          option => <Button bsSize="sm" block onClick={this.handleClick.bind(this)} value={option} key={option}>{option}</Button>
        )}
      </ButtonGroup>
    )
  }
}

export default MultiSelect

