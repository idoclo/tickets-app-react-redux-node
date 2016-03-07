import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'
import ContactName from '../../components/contactName'
import ContactEmail from '../../components/contactEmail'
import ActionButton from '../../components/actionButton'

class App extends Component {
  render() {
    let {ticket, actions} = this.props;
    return (
      <div>
        <ContactName ticket={ticket} actions={actions}/>
        <ContactEmail ticket={ticket} actions={actions}/>
        <ActionButton action={actions.submitTicket}/>
      </div>
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(App)