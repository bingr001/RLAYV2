import React, { Component } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import JonFitz from '../components/LeaderBios/JonFitz';
import DaveCreel from "../components/LeaderBios/DaveCreel";
import OliviaMazurek from "../components/LeaderBios/OliviaMazurek";


//Create a components

class Leaders extends Component {
  render() {
    return <ScrollView>
        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          Leaders
        </Text>

        <DaveCreel />
        <JonFitz />
        <OliviaMazurek />
        <Text>Brent Ingram</Text>
        <Text>Lauren Creel</Text>
        <Text>Erika Ruiz</Text>
        <Text>AC Sanford</Text>
      </ScrollView>;


}

};

const styles = StyleSheet.create({

});

export default Leaders;
