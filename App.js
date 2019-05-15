import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './views/Home.js';

class App extends React.Component {
  render() {
    return (
      Home
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: Home}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppNav = createAppContainer(MainNavigator);

export default AppNav;
