// Import libraries for making a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Make a component
class Albumlist extends Component {
  render(){
  	return (
    	<View>
      	<Text> Album list </Text>
    	</View>
  	);
  }
}

// Make the component available to other parts of the app
export default Albumlist;
