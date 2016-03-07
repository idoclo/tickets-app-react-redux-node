import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'

import { loggerMiddleware, thunkMiddleware } from '../middleware'
import reducers from '../reducers'

export default (initialState) => {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(
    loggerMiddleware,
    thunkMiddleware
  )(create);

  const store = createStoreWithMiddleware(reducers, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
