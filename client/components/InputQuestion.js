import React, { Component } from 'react'
import { Input } from 'react-bootstrap'

class InputQuestion extends Component {
  handleChange(e) {
    this.props.action(e.target.value);
  }

  render() {
    let {label, type, value, show} = this.props;
    let question = (
      <div>
        <label style={{display: 'block'}}>{label}</label>
        <Input type={type} value={value} onChange={this.handleChange.bind(this)} />
      </div>
    );
    return (
      <div>
        {show ? question : null}
      </div>
    )
  }
}


InputQuestion.propTypes = {
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool,
  type: React.PropTypes.string
};

InputQuestion.defaultProps = {
  show: true,
  type: 'text'
};

export default InputQuestion;

