// Import libraries for making a component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from '../albumdetail/albumdetail';

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
      <AlbumDetail key={album.title} album={album} /> // the prop name don't have to be the same the name of the variable
    );
  }

  render(){

    console.log(this.state);

  	return ( // expect to be scrollable
    	<ScrollView>
      	{this.renderAlbums()}
    	</ScrollView>
  	);
  }
}

// Make the component available to other parts of the app
export default Albumlist;
