import React, { Component } from 'react'
import MultiSelect from './multiSelect'

class MultiSelectQuestion extends Component {
  handleChange(value) {
    this.props.action(value);
  }

  render() {
    let {label, options, show} = this.props;
    let question = (
      <div>
        <label style={{display: 'block'}}>{label}</label>
        <MultiSelect onChange={this.handleChange.bind(this)} options={options}/>
      </div>
    );
    return (
      <div>
        {show ? question : null}
      </div>
    )
  }
}

MultiSelectQuestion.propTypes = {
  label: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  action: React.PropTypes.func.isRequired
};

MultiSelectQuestion.defaultProps = {
  show: true
};

export default MultiSelectQuestion

