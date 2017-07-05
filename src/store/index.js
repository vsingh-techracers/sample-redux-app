/**
* @providesModule src/store
*/

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers from 'src/rootReducers';

export const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState, reduxLogger) {
  const middleWares = [sagaMiddleware];
  const addRemoteDevTools = true;

  if (reduxLogger) {
    middleWares.push(createLogger());
  }
  const enhancer = addRemoteDevTools
    ? composeWithDevTools(applyMiddleware(...middleWares))
    : compose(applyMiddleware(...middleWares));

  const Store = createStore(reducers, initialState, enhancer);

  if (module.hot) {
    module.hot.accept(() => {
      /* eslint-disable global-require */
      const nextRootReducer = require('../reducers').default;
      Store.replaceReducer(nextRootReducer);
    });
  }

  return Store;
}

// passing true here for enabling redux logger
export const store = configureStore({}, true);
