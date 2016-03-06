import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import App from './components/app'
import store from './store'

const history = syncHistoryWithStore(browserHistory, store)

let reactElement = document.getElementById('react')
render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}></Route>
    </Router>
  </Provider>
  ,
  reactElement
)
