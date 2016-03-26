import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import MultiSelectQuestion from '../components/MultiSelectQuestion'
import NextButton from '../components/nextButton'

const Home = ({actions}) =>  (
  <div>
    <MultiSelectQuestion label='What is your device type?' options={['IPhone', 'MacBook']} action={actions.setDeviceType}/>
    <NextButton nextUrl="/#/deviceInfo"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)