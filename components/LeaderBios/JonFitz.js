import React from 'react';
import { Text, View, Image } from 'react-native';

// Create a component
const JonFitz = () => {
  return(
    <View>
      <Image resizeMode="contain"  source={require('./LeaderImages/fitzpic.jpg')} />

      <Text>Jon "Fitz" Fitzgerald</Text>

    </View>

  )
};

//make it available for other parts of the app

export default JonFitz;
