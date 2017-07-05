/**
* @providesModule src/router
*/

import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
    LoginScreen,
} from 'src/modules';

const Routes = () => (
  <Router>
    <Scene key={'app_root'}>
      <Scene key={'loginScreen'} title={'Login Screen'} component={LoginScreen} initial hideNavBar />
    </Scene>
  </Router>
);

export default Routes;
