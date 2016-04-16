import React from 'react'; 
import MultiSelect from './multiSelect';

const MultiSelectQuestion = ({label, options, action, show}) => {
  let question = (
    <div>
      <label style={{display: 'block'}}>{label}</label>
      <MultiSelect onChange={(e) => action(e.target.value)} options={options}/>
    </div>
  );
  return (
    <div>
      {show ? question : null}
    </div>
  );
};

MultiSelectQuestion.propTypes = {
  label: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  action: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool
};

MultiSelectQuestion.defaultProps = {
  show: true
};

export default MultiSelectQuestion;

