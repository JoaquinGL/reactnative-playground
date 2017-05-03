// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Welcome = () => {
  const { welcome, instructions } = styles;

  return (
    <View>
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
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
};

// Make the component available to other parts of the app
export default Welcome;
