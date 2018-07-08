
import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button, Alert } from 'react-native';
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
    
    static navigationOptions = {
        header: null
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
        return <View style={{ paddingTop: 50, alignItems: "center" }}>
            <View>
              <Image style={{ height: 200 }} resizeMode="contain" source={require("../../assets/images/RLa-youth.png")} />
            </View>

            <View style={{ paddingBottom: 10 }} />

            <RkTextInput rkType="rounded" style={{ width: 300, height: 40, borderWidth: 3 }} value={this.state.email} onChangeText={text => {
                this.setState({ email: text });
              }} placeholder="Email" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} />

            <View style={{ paddingTop: 10 }} />

            <RkTextInput rkType="rounded" style={{ width: 300, height: 40, borderWidth: 3 }} value={this.state.password} onChangeText={text => {
                this.setState({ password: text });
              }} placeholder="Password" secureTextEntry={true} autoCapitalize="none" autoCorrect={false} />

            <View style={{ paddingTop: 10 }} />

            <RkButton onPress={this.onLoginPress} rkType="rounded" style={{ width: 300, height: 40, backgroundColor: "black" }}>
              LOGIN
            </RkButton>

            <View style={{ paddingTop: 10 }} />

            <RkButton onPress={this.onCreateAccountPress} rkType="rounded" style={{ width: 200, height: 40, backgroundColor: "black" }}>
              CREATE ACCOUNT
            </RkButton>

            <View style={{ paddingTop: 10 }} />

            <RkButton onPress={this.onForgotPasswordPress} rkType="rounded" style={{ width: 200, height: 40, backgroundColor: "black" }}>
              FORGOT PASSWORD
            </RkButton>
          </View>;
    }
}

const styles = StyleSheet.create({

});