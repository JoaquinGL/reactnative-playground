// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Play ground!</Text>
    </View>
  );
};

// Styles
const styles = {

  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },

  viewStyle: {
    padding: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#F8F8F8',
  }
};

// Make the component available to other parts of the app
export default Header;
