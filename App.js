import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './views/Home.js';
import ProfileScreen from './views/Profile.js';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AuthenticationNavigator = createStackNavigator({
  Home: HomeScreen,
});

const AppNavigator = createStackNavigator({
  /*
   * Rather than being rendered by a screen component, the
   * AuthenticationNavigator is a screen component
   */
  Home: AuthenticationNavigator,
  Profile: ProfileScreen,
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
