import React from 'react'; 
import MultiSelect from './MultiSelect';

const MultiSelectQuestion = ({label, options, action, show}) => {
  let question = (
    <div>
      <label style={{display: 'block'}}>{label}</label>
      <MultiSelect onChange={(e) => action(e.target.value)} options={options}/>
    </div>
  );
  return show ? question : null;
};

MultiSelectQuestion.propTypes = {
  label: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool,
  options: React.PropTypes.array.isRequired
};

MultiSelectQuestion.defaultProps = {
  show: true
};

export default MultiSelectQuestion;

