import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { TestComponent } from './../components/AppComponents';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { setanswer1, watchPersonData } from './../redux/app-redux';

const mapStateToProps1 = (state) => {
  return {
    answer1: state.answer1,
    personData: state.personData,
  };
}

const mapDispatchToProps1 = (dispatch) => {
  return {
    setanswer1: (text) => { dispatch(setanswer1(text)) },
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


  render() {
    return (
      <View style={{paddingTop:20}}>
        <Text>{this.props.answer1}</Text>

        <TextInput style={{borderWidth:1, width: 200, height: 40}}
          value={this.state.answer1}
          onChangeText={(text) => { this.setState({answer1: text}) }}
        />
        <Button title="Please Work" onPress={this.onSetFavoriteAnimalPress1} />

        <Text>{this.props.personData.firstName}</Text>
        <Text>{this.props.personData.lastName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default connect(mapStateToProps1, mapDispatchToProps1)(Devo);

/*export default class ScrollingView extends Component {
  render() {
      return (
        <ScrollView style={{paddingTop:20}}>
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

*/

// skip these lines if using Create React Native App
//Not sure if I need these
/*AppRegistry.registerComponent(
  'AwesomeProject',
  () => IScrolledDownAndWhatHappenedNextShockedMe);
  */
