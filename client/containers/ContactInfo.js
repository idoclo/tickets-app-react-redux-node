import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import InputQuestion from '../components/InputQuestion'
import ActionButton from '../components/actionButton'

const ContactInfo = ({ticket, actions}) => (
  <div>
    <InputQuestion label='What is your name?' value={ticket.get('contact_name')} action={actions.setContactName}/>
    <InputQuestion label='What is your email?' value={ticket.get('contact_email')} action={actions.setContactEmail}/>
    <ActionButton action={actions.submitTicket}/>
  </div>
);

function mapStateToProps(state) {
  return {
    ticket: state.ticketReducers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo)