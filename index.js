/**
 * @format
 */

import { AppRegistry } from 'react-native';
import React from 'react';
import { name as appName } from './app.json';
import { App } from './App';

//  flexible for future context wrappers
const Root = () => <App />;

AppRegistry.registerComponent(appName, () => Root);
