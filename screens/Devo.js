import React from 'react';
import { ScrollView, View, KeyboardAvoidingView, StyleSheet, Text,TextInput, Button } from 'react-native';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import {
  setanswer1, setanswer2, setanswer3, setanswer4,
  setanswer5, setanswer6, watchPersonData
        } from './../redux/app-redux';

const mapStateToProps1 = (state) => {
  return {
    answer1: state.answer1,
    answer2: state.answer2,
    answer3: state.answer3,
    answer4: state.answer4,
    answer5: state.answer5,
    answer6: state.answer6,
    personData: state.personData,
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
    return <KeyboardAvoidingView 
    behavior="padding"
    style={{ flex: 1, padding: 20, paddingTop: 20 }}>
        <ScrollView>
          <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            Devotional Questions
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            {"\n"}Day 1: Read Psalm 27{"\n"}
          </Text>

          <Text>{this.props.personData.question1}</Text>
          <Text>{this.props.answer1}</Text>
          <TextInput style={{ height: 100, borderColor: "gray", borderWidth: 1, textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flexWrap: "wrap" }} multiline={true} numberOfLines={4} value={this.state.answer1} onChangeText={text => {
              this.setState({ answer1: text });
            }} />
          <Button title="Save" onPress={this.onSetFavoriteAnimalPress1} />

          <Text>{this.props.personData.question2}</Text>
          <Text>{this.props.answer2}</Text>
          <TextInput style={{ height: 100, borderColor: "gray", borderWidth: 1, textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flexWrap: "wrap" }} multiline={true} numberOfLines={4} value={this.state.answer2} onChangeText={text => {
              this.setState({ answer2: text });
            }} />
          <Button title="Save" onPress={this.onSetFavoriteAnimalPress2} />

          <Text>{this.props.personData.question3}</Text>
          <Text>{this.props.answer3}</Text>
          <TextInput style={{ height: 100, borderColor: "gray", borderWidth: 1, textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flexWrap: "wrap" }} multiline={true} numberOfLines={4} value={this.state.answer3} onChangeText={text => {
              this.setState({ answer3: text });
            }} />
          <Button title="Save" onPress={this.onSetFavoriteAnimalPress3} />

          <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            {"\n"}Day 2: Read Exodus 1{"\n"}
          </Text>

          <Text>{this.props.personData.question4}</Text>
          <Text>{this.props.answer4}</Text>
          <TextInput style={{ height: 100, borderColor: "gray", borderWidth: 1, textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flexWrap: "wrap" }} multiline={true} numberOfLines={4} value={this.state.answer4} onChangeText={text => {
              this.setState({ answer4: text });
            }} />
          <Button title="Save" onPress={this.onSetFavoriteAnimalPress4} />

          <Text>{this.props.personData.question5}</Text>
          <Text>{this.props.answer5}</Text>
          <TextInput style={{ height: 100, borderColor: "gray", borderWidth: 1, textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flexWrap: "wrap" }} multiline={true} numberOfLines={4} onChangeText={text => {
              this.setState({ answer5: text });
            }} />
          <Button title="Save" onPress={this.onSetFavoriteAnimalPress5} />

          <Text>{this.props.personData.question3}</Text>
          <Text>{this.props.answer6}</Text>
          <TextInput style={{ height: 100, borderColor: "gray", borderWidth: 1, textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flexWrap: "wrap" }} multiline={true} numberOfLines={4} value={this.state.answer6} onChangeText={text => {
              this.setState({ answer6: text });
            }} />
          <Button title="Save" onPress={this.onSetFavoriteAnimalPress6} />
        <View style={{ height: 60 }} />

        </ScrollView>
      </KeyboardAvoidingView>;
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
