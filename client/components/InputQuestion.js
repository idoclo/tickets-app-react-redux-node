import React, { Component } from 'react'
import { Input } from 'react-bootstrap'

const InputQuestion = ({label, type, value, action, show}) => {
  let question = (
    <div>
      <label style={{display: 'block'}}>{label}</label>
      <Input type={type} value={value} onChange={(e) => action(e.target.value)} />
    </div>
  );
  return (
    <div>
      {show ? question : null}
    </div>
  )
};

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

