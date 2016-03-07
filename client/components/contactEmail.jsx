import React, { Component } from 'react'
import TextInput from './textInput'

class ContactEmail extends Component {
  handleChange(value) {
    let action = this.props.actions.setContactEmail;
    console.log(this.props.ticket);
    action(value)
  }
  render() {
    let device_type = this.props.ticket.get('device_type');

    if(device_type){
      return (
        <div>
          <h3>What is your email?</h3>
          <TextInput onChange={this.handleChange.bind(this)} />
        </div>
      )
    }else{
      return (
        <div/>
      )
    }
  }
}

export default ContactEmail

