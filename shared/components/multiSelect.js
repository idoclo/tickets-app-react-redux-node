import React from 'react'; 
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

const MultiSelect = ({options, onChange}) => (
  <ButtonGroup>
    {options.map(
      option => <Button bsSize="sm" block onClick={onChange} value={option} key={option}>{option}</Button>
    )}
  </ButtonGroup>
);

MultiSelect.propTypes = {
  options: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default MultiSelect;

