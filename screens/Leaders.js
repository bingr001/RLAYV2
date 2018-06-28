import React, { Component } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import JonFitz from '../components/LeaderBios/JonFitz';

//Create a components

class Leaders extends Component {
  render() {
    return (

      <ScrollView >
        <Text
          style={{fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',}}
        >  
        Leaders
        </Text>

        <Text>Brent Ingram</Text>
        <Text>Olivia M</Text>
        <Text>Dave Creel</Text>
        <Text>Lauren Creel</Text>
        <Text>Erika Ruiz</Text>
        <Text>AC Sanford</Text>
        < JonFitz />

      </ScrollView>

    );


}

};

const styles = StyleSheet.create({

});

export default Leaders;
