/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './src/assets/_includes/components/header/header';
import Welcome from './src/assets/_includes/components/welcome/welcome';
import ProjectList from './src/assets/_includes/components/projectlist/projectlist';

const App = () => (
  <View style={styles.container}>
    <View>
      <Header headerText={'Playground!'} />
    </View>
    <View>
      <Welcome />
    </View>
    <View style={{ flex: 1}}>
      <ProjectList />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('playground', () => App);
