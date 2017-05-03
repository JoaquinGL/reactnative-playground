// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Welcome = () => {
  const { welcome, instructions, container} = styles;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}> Welcome </Text>
      <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu
      </Text>
      <Text style={styles.instructions}>
        To get started, edit index.ios.js
      </Text>
    </View>
  );
};

// Styles
const styles = {
  welcome: {
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

// Make the component available to other parts of the app
export default Welcome;
