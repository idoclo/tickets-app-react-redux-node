import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from '../store'

let reactElement = document.getElementById('react')
render(
  <Provider store={store}>
    <p>Hello</p>
  </Provider>,
  reactElement
)
