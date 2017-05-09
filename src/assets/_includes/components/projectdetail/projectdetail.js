// Import libraries for making a component
import React from 'react';
import { Text, View, Image, Linking} from 'react-native';
import Card from '../card/card';
import CardSection from '../cardsection/cardsection';
import Button from '../button/button';

// Make a component
const ProjectDetail = ({ project }) => {

  const {
    title,
    description,
    thumbnail_image,
    image,
    url
  } = project;

  const {
    thumbnailStyle,
    headerContenStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
    descriptionTextStyle,
  } = styles;

  return(
    <Card>

      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={ {uri: thumbnail_image} }/>
        </View>
        <View style={headerContenStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text style={descriptionTextStyle}>{description}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={ {uri: image} }/>
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url) }>
          View in github
        </Button>
      </CardSection>

    </Card>
  );
};

// The onPress prop is not the same as TouchableOpacity onPress prop


const styles = {
  headerContenStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  headerTextStyle: {
    fontSize: 16,
    maxWidth: 200,
    paddingBottom: 5
  },

  descriptionTextStyle: {
    fontSize: 12,
    maxWidth: 220,
    paddingBottom: 5,
    color: '#555',
  },

  thumbnailStyle: {
    height: 50,
    width: 50,
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  imageStyle: {
    height: 150,
    flex: 1,
    width: null
  },
};

// Make the component available to other parts of the app
export default ProjectDetail;


// (props) -> ( { album} ) -> when you have multiple references to props object
