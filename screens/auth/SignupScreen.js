
import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';
import { RkButton, RkTextInput, RkAvoidKeyboard } from 'react-native-ui-kitten';

export default class SignupScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: "",
            passwordConfirm: "",
        };
    }

    static navigationOptions = {
        header: null
    }

    onSignupPress = () => {
        if (this.state.password !== this.state.passwordConfirm) {
            Alert.alert("Passwords do not match");
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { }, (error) => { Alert.alert(error.message); });
    }

    onBackToLoginPress = () => {
        var navActions = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: "Login"})]
        });
        this.props.navigation.dispatch(navActions);
    }

    render() {
        return <View style={{ paddingTop: 50, alignItems: "center" }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                textAlign: "center",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Signup
            </Text>

            <RkTextInput rkType="rounded" style={{ width: 300, height: 40, borderWidth: 3 }} value={this.state.email} onChangeText={text => {
                this.setState({ email: text });
              }} placeholder="Email" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} />

            <View style={{ paddingTop: 10 }} />

            <RkTextInput rkType="rounded" style={{ width: 300, height: 40, borderWidth: 3 }} value={this.state.password} onChangeText={text => {
                this.setState({ password: text });
              }} placeholder="Password" secureTextEntry={true} autoCapitalize="none" autoCorrect={false} />

            <View style={{ paddingTop: 10 }} />

            <RkTextInput rkType="rounded" style={{ width: 300, height: 40, borderWidth: 3 }} value={this.state.passwordConfirm} onChangeText={text => {
                this.setState({ passwordConfirm: text });
              }} placeholder="Password (confirm)" secureTextEntry={true} autoCapitalize="none" autoCorrect={false} />

            <RkButton rkType="rounded" onPress={this.onSignupPress} style={{ width: 300, height: 40, backgroundColor: "black" }}>
              Signup
            </RkButton>

            <View style={{ paddingTop: 10 }} />

            <RkButton rkType="rounded" onPress={this.onBackToLoginPress} style={{ backgroundColor: "black" }}>
              Back to Login
            </RkButton>
          </View>;
    }
}

const styles = StyleSheet.create({

});