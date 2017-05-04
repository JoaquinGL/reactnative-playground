// Import libraries for making a component
import React from 'react';
import { Text } from 'react-native';
import Card from '../card/card';
import CardSection from '../cardsection/cardsection';

// Make a component
const AlbumDetail = (props) => {
  return(
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

// Make the component available to other parts of the app
export default AlbumDetail;
