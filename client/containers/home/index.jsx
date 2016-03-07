import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'
import DeviceType from '../../components/deviceType'
import NextButton from '../../components/nextButton'

class App extends Component {
  render() {
    let {ticket, actions} = this.props;
    return (
      <div>
        <DeviceType ticket={ticket} actions={actions}/>
        <NextButton nextUrl="/#/deviceInfo"/>
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