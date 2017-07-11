import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import Routes from 'src/router';
import runRootSaga from 'src/rootSaga';

console.disableYellowBox = true;

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
    runRootSaga();
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
