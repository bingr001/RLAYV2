import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, } from 'react-native';
import JonFitz from '../components/LeaderBios/JonFitz';
import DaveCreel from "../components/LeaderBios/DaveCreel";
import OliviaMazurek from "../components/LeaderBios/OliviaMazurek";
import ACSanford from '../components/LeaderBios/ACSanford';
import ErikaRuiz from '../components/LeaderBios/ErikaRuiz';
import LaurenCreel from '../components/LeaderBios/LaurenCreel';
import BrentIngram from '../components/LeaderBios/BrentIngram';


//Create a components

class Leaders extends Component {
  render() {
    return <ScrollView>
        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          Leaders
        </Text>

        <ACSanford />
        <BrentIngram />
        <DaveCreel />
        <ErikaRuiz />
        <JonFitz />
        <LaurenCreel />
        <OliviaMazurek />
      </ScrollView>;


}

};

const styles = StyleSheet.create({

});

export default Leaders;
