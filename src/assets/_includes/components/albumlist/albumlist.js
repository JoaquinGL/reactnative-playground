// Import libraries for making a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

// Make a component
class Albumlist extends Component {
  state = { albums: [] } // init the state

  componentWillMount() { // automatic call as soon as this component is render in the screen fantastic place to load some data
    axios.get('https://rallycoding.herokuapp.com/api/music_albums') //return a promise
      .then (
        response => this.setState({ albums: response.data}) // update state
      );
  }

  // helper method

  renderAlbums() {
    return this.state.albums.map(album =>
      <Text key={album.title}>{album.title}</Text> // key must to be unique
    );
  }

  render(){

    console.log(this.state);

  	return (
    	<View>
      	{this.renderAlbums()}
    	</View>
  	);
  }
}

// Make the component available to other parts of the app
export default Albumlist;
