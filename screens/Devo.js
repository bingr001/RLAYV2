import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet, Image, View, Text, TextInput, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { setFavoriteAnimal1, watchPersonData } from './../redux/app-redux2';

const mapStateToProps = (state) => {
  return {
    favoriteAnimal1: state.favoriteAnimal1,
    personData: state.personData,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFavoriteAnimal1: (text) => { dispatch(setFavoriteAnimal1(text)) },
    watchPersonData: () => { dispatch(watchPersonData()) },
  };
}

class TestScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      favoriteAnimal1: this.props.favoriteAnimal1,
    }

    this.props.watchPersonData();
  }

  onSignoutPress = () => {
    firebase.auth().signOut();
  }

  onSetFavoriteAnimal1Press = () => {
    this.props.setFavoriteAnimal1(this.state.favoriteAnimal1);
  }


  render() {
    return (
      <View style={{paddingTop:20}}>
        <Button title="Signout" onPress={this.onSignoutPress} />
        <Text>{this.props.favoriteAnimal1}</Text>

        <TextInput style={{borderWidth:1, width: 200, height: 40}}
          value={this.state.favoriteAnimal1}
          onChangeText={(text) => { this.setState({favoriteAnimal1: text}) }}
        />
        <Button title="Set Favorite Animal" onPress={this.onSetFavoriteAnimal1Press} />

        <Text>{this.props.personData.firstName}</Text>
        <Text>{this.props.personData.lastName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default connect(mapStateToProps, mapDispatchToProps)(TestScreen);

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
