import React from 'react'; 
import { Input } from 'react-bootstrap';
import './InputQuestion.css';

const InputQuestion = ({label, type, value, action, show}) => {
  let question = (
    <div>
      <label>{label}</label>
      <Input type={type} value={value} onChange={(e) => action(e.target.value)} />
    </div>
  );
  return show ? question : null;
};

InputQuestion.propTypes = {
  label: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool,
  value: React.PropTypes.string,
  type: React.PropTypes.string
};

InputQuestion.defaultProps = {
  show: true,
  type: 'text'
};

export default InputQuestion;

