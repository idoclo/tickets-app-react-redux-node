import { Router, Route, useRouterHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import { createHashHistory } from 'history'
import { render } from 'react-dom'
import React from 'react'
import Master from './containers'
import Home from './containers/home'
import DeviceInfo from './containers/deviceInfo'
import ContactInfo from './containers/contactInfo'
import configure from './store'

const store = configure();
const cleanHashHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const history = syncHistoryWithStore(cleanHashHistory, store);

let reactElement = document.getElementById('react');
render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Master}>
        <IndexRoute component={Home}/>
        <Route path="deviceInfo" component={DeviceInfo}/>
        <Route path="contactInfo" component={ContactInfo}/>
      </Route>
    </Router>
  </Provider>,
  reactElement
);
