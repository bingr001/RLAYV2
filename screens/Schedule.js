import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { TestComponent } from './../components/AppComponents';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { event1, event2, event3, event4,
  watchPersonData
        } from './../redux/app-redux';

const mapStateToProps1 = (state) => {
  return {

    personData: state.personData,
    event1: state.event1,
    event2: state.event2,
    event3: state.event3,
    event4: state.event4,
  };
}


const mapDispatchToProps1 = (dispatch) => {
  return {
    setanswer1: (text) => { dispatch(setanswer1(text)) },
    setanswer2: (text) => { dispatch(setanswer2(text)) },
    setanswer3: (text) => { dispatch(setanswer3(text)) },
    setanswer4: (text) => { dispatch(setanswer4(text)) },
    setanswer5: (text) => { dispatch(setanswer5(text)) },
    setanswer6: (text) => { dispatch(setanswer6(text)) },


    watchPersonData: () => { dispatch(watchPersonData()) },
  };
}

class Devo extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      answer1: this.props.answer1,
    }

    this.props.watchPersonData();
  }

  onSignoutPress = () => {
    firebase.auth().signOut();
  }

  onSetFavoriteAnimalPress1 = () => {
    this.props.setanswer1(this.state.answer1);
  }
  onSetFavoriteAnimalPress2 = () => {
    this.props.setanswer2(this.state.answer2);
  }
  onSetFavoriteAnimalPress3 = () => {
    this.props.setanswer3(this.state.answer3);
  }
  onSetFavoriteAnimalPress4 = () => {
    this.props.setanswer4(this.state.answer4);
  }
  onSetFavoriteAnimalPress5 = () => {
    this.props.setanswer5(this.state.answer5);
  }
  onSetFavoriteAnimalPress6 = () => {
    this.props.setanswer6(this.state.answer6);
  }


  render() {
    return (

      <ScrollView style={{flex: 1, padding: 20, paddingTop:20}}>
        <Text
          style={{fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',}}
        > 

          Day One</Text>

        <Text>{this.props.personData.event1}</Text>
        <Text>{this.props.personData.event2}</Text>
        <Text>{this.props.personData.event3}</Text>
        <Text>{this.props.personData.event4}</Text>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({

});

export default connect(mapStateToProps1, mapDispatchToProps1)(Devo);
