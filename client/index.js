import { Router, Route, useRouterHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import { createHashHistory } from 'history'
import { render } from 'react-dom'
import React from 'react'
import Layout from './containers/Layout'
import Home from './containers/Home'
import DeviceInfo from './containers/DeviceInfo'
import ContactInfo from './containers/ContactInfo'
import ThankYou from './containers/ThankYou'
import configure from './store'

const store = configure();
const cleanHashHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const history = syncHistoryWithStore(cleanHashHistory, store);

let reactElement = document.getElementById('react');
render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home}/>
        <Route path="deviceInfo" component={DeviceInfo}/>
        <Route path="contactInfo" component={ContactInfo}/>
        <Route path="thankYou" component={ThankYou}/>
      </Route>
    </Router>
  </Provider>,
  reactElement
);
