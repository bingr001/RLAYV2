
import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';
import { RkButton, RkTextInput, RkAvoidKeyboard} from 'react-native-ui-kitten';



export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: "",
        };
    }

    onLoginPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { }, (error) => { Alert.alert(error.message); });
    }

    onCreateAccountPress = () => {
        var navActions = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: "Signup"})]
        });
        this.props.navigation.dispatch(navActions);
    }

    onForgotPasswordPress = () => {
        var navActions = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: "ForgotPassword"})]
        });
        this.props.navigation.dispatch(navActions);
    }

    render() {
        return <RkAvoidKeyboard onStartShouldSetResponder={e => true} onResponderRelease={e => Keyboard.dismiss()} style={{ paddingTop: 50, alignItems: "center" }}>
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
              Login
            </Text>

            <View style={{ paddingBottom: 60 }} />

            <RkTextInput rkType="rounded" style={{ width: 300, height: 40, borderWidth: 3 }} value={this.state.email} onChangeText={text => {
                this.setState({ email: text });
              }} placeholder="Email" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} />

            <View style={{ paddingTop: 10 }} />

            <RkTextInput rkType="rounded" style={{ width: 300, height: 40, borderWidth: 3 }} value={this.state.password} onChangeText={text => {
                this.setState({ password: text });
              }} placeholder="Password" secureTextEntry={true} autoCapitalize="none" autoCorrect={false} />

            <View style={{ paddingTop: 10 }} />

            <RkButton onPress={this.onLoginPress} rkType="rounded" style={{ width: 300, height: 40 }}>
              Login
            </RkButton>

            <View style={{ paddingTop: 10 }} />

            <RkButton onPress={this.onCreateAccountPress} rkType="rounded" style={{ width: 200, height: 40 }}>
              CREATE ACCOUNT...
            </RkButton>

            <View style={{ paddingTop: 10 }} />

            <RkButton onPress={this.onForgotPasswordPress} rkType="rounded" style={{ width: 200, height: 40 }}>
              FORGOT PASSWORD...
            </RkButton>
          </RkAvoidKeyboard>;
    }
}

const styles = StyleSheet.create({

});