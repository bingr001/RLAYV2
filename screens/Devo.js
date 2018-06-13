import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text, TextInput, Button, Alert } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return (
        <ScrollView>
          <Text
                style={{fontSize: 30,
                fontWeight: 'bold',
                textAlign: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',}}
          >
                  Devotional Questions
          </Text>

          <Text
                style={{fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',}}
              >
        {"\n"}Day 1: Read Psalm 27{"\n"}
      </Text>

      <Text>
              1. What stood out to you about this Psalm?{"\n"}
      </Text>

      <TextInput
      style={{
           height: 100,
           borderColor: 'gray',
           borderWidth: 1,
           textAlign: 'center',
           flexDirection: 'column',
           alignItems: 'center',
           justifyContent: 'center',
           textAlign: 'center',
           flexWrap: 'wrap',
      }}
          multiline = {true}
          placeholder = 'Type your answer here!'



      />

      <Button
        onPress={() => {
          Alert.alert('You tapped the button!');
        }}
        title="Save Answer"
      />


        </ScrollView>
    );
  }
}

// skip these lines if using Create React Native App
//Not sure if I need these
/*AppRegistry.registerComponent(
  'AwesomeProject',
  () => IScrolledDownAndWhatHappenedNextShockedMe);
  */
