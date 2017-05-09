// Import libraries for making a component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import ProjectDetail from '../projectdetail/projectdetail';

// Make a component
class ProjectList extends Component {
  state = { project: [] } // init the state

  componentWillMount() { // automatic call as soon as this component is render in the screen fantastic place to load some data
    axios.get('https://d2.flipdrive.com/oa8jF') //return a promise
      .then (
        response => this.setState({ project: response.data}) // update state
      );
  }

  // helper method
  renderProjects() {
    return this.state.project.map(project =>
      <ProjectDetail key={project.title} project={project} /> // the prop name don't have to be the same the name of the variable
    );
  }

  render(){

    console.log(this.state);

  	return ( // expect to be scrollable
    	<ScrollView>
      	{this.renderProjects()}
    	</ScrollView>
  	);
  }
}

// Make the component available to other parts of the app
export default ProjectList;
