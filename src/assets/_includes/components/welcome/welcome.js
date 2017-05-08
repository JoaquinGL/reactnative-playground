// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Welcome = () => {
  const { welcome, instructions, container, subtitle} = styles;

  return (
    <View style={container}>
      <Text style={welcome}> Trending in open source </Text>
      <Text style={subtitle}>
        See what the GitHub community is most excited about today.
      </Text>
       <Text style={instructions}>
        Cmd+D or shake for dev menu
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
  subtitle: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 12,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 12,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

// Make the component available to other parts of the app
export default Welcome;
