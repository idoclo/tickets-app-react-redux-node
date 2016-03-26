import React, { Component } from 'react'
import MultiSelect from './multiSelect'

class MultiSelectQuestion extends Component {
  handleChange(value) {
    this.props.action(value);
  }

  render() {
    const {label, options} = this.props;
    return (
      <div>
        <h3>{label}</h3>
        <MultiSelect onChange={this.handleChange.bind(this)} options={options}/>
      </div>
    )
  }
}

MultiSelectQuestion.propTypes = {
  label: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  action: React.PropTypes.func.isRequired
};

export default MultiSelectQuestion;

