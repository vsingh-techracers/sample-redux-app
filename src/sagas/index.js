/**
* @providesModule src/rootSaga
*/

import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from 'src/store';
import watchApi from 'src/api/saga';
import StartupSaga from './startupSaga';

function* root() {
  yield fork(StartupSaga);
  yield fork(watchApi);
}

const run = () => sagaMiddleware.run(root);

export default run;
