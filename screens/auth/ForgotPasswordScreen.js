
import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';
import { RkButton, RkTextInput, RkAvoidKeyboard } from "react-native-ui-kitten";


export default class ForgotPasswordScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            email: "",
        };
    }

    static navigationOptions = {
        header: null
    }

    onResetPasswordPress = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                Alert.alert("Password reset email has been sent.");
            }, (error) => {
                Alert.alert(error.message);
            });
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
            <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              Forgot Password
            </Text>

            <RkTextInput rkType="rounded" style={{ width: 300, height: 40, borderWidth: 3 }} value={this.state.email} onChangeText={text => {
                this.setState({ email: text });
              }} placeholder="Email" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} />

            <View style={{ paddingTop: 20 }} />

            <RkButton rkType="rounded" style={{ backgroundColor: "black" }} onPress={this.onResetPasswordPress}>
              Reset Password
            </RkButton>

            <View style={{ paddingTop: 10 }} />

            <RkButton rkType="rounded" style={{ backgroundColor: "black" }} onPress={this.onBackToLoginPress}>
              Back to Login..
            </RkButton>
          </View>;
    }
}

const styles = StyleSheet.create({

});