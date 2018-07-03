import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { setFavoriteAnimal, watchPersonData } from './../redux/app-redux';



class SignOut extends React.Component {
  static navigationOptions = {
    header: null,
  };


  

  onSignoutPress = () => {
    firebase.auth().signOut();
  }


  render() {
    return (
      <View style={{ paddingTop: 20 }}>
        <Button title="Signout" onPress={this.onSignoutPress} />

        
        

      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default SignOut;