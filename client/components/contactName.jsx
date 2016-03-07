import React, { Component } from 'react'
import TextInput from './textInput'

class ContactName extends Component {
  handleChange(value) {
    let action = this.props.actions.setContactName;
    console.log(this.props.ticket);
    action(value)
  }
  render() {
    let device_type = this.props.ticket.get('device_type');

    if(device_type){
      return (
        <div>
          <h3>What is your name?</h3>
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

export default ContactName

