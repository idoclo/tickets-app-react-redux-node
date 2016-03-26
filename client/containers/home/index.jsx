import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'
import NextButton from '../../components/nextButton'
import MultiSelectQuestion from '../../components/MultiSelectQuestion'

const App = ({action}) => (
  <div>
    <MultiSelectQuestion options={['IPhone', 'MacBook']} label="What is your device type?" action={actions.setDeviceType}/>
    <NextButton nextUrl="/deviceInfo"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)