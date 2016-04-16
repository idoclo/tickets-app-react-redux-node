import React from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import MultiSelectQuestion from '../components/MultiSelectQuestion';
import InputQuestion from '../components/InputQuestion/InputQuestion';
import NavButton from '../components/NavButton';

const DeviceInfo = ({ticket, actions}) => {
  let isMacBook = ticket.get('deviceType')  === 'MacBook';
  let deviceTypeOptions = (
    isMacBook ? ['MacBookAir', 'MacBookPro'] : ['IPhone6', 'IPhone6S', 'IPhone6Plus', 'IPhone6SPlus']
  );

  return (
    <div>
      <MultiSelectQuestion label='What is your device model?' options={deviceTypeOptions} action={actions.setDeviceModel}/>
      <InputQuestion label='What is your serial number?' value={ticket.get('deviceSerialNo')} action={actions.setDeviceSerialNo} />
      <MultiSelectQuestion label='What is your device size?' options={['11 inch', '13 inch', '15 inch']} action={actions.setDeviceScreenSize} show={ isMacBook }/>
      <NavButton url="/contactInfo"/>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    ticket: state.ticketReducers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

DeviceInfo.propTypes = {
  ticket: React.PropTypes.object.isRequired,
  actions: React.PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(DeviceInfo);