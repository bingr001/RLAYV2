import React from 'react';
import { StyleSheet,  View,  Button } from 'react-native';
import * as firebase from 'firebase';
import { RkButton, RkAvoidKeyboard } from "react-native-ui-kitten";




class SignOut extends React.Component {
  static navigationOptions = {
    header: null,
  };


  

  onSignoutPress = () => {
    firebase.auth().signOut();
  }


  render() {
    return <View style={{ 
      paddingTop: 20, 
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      }}>
        <RkButton 
        rkType="rounded" 
        style={{ 
          width: 300, 
          height: 40,}} 
        onPress={this.onSignoutPress}>
          Signout
        </RkButton>
      </View>;
  }
}

const styles = StyleSheet.create({

});

export default SignOut;