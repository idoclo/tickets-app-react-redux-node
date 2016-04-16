import { createStore, applyMiddleware } from 'redux';

import { loggerMiddleware, thunkMiddleware } from '../middleware';
import reducers from '../reducers';

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
      const nextReducer = require('../reducers/index');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
