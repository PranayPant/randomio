
import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class Home extends React.Component {

	render() {

		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center"}} >
			<Button
				onPress={loginAction}
				title="Login"
				color="#841584"
			/>
			<Button
				onPress={signupAction}
				title="Sign Up"
				color="#841584"
			/>
			</View>
		)
	}
}

const loginAction = () => {
		Alert.alert( 'Login alert!' )
}

const signupAction = () => {
		Alert.alert( 'Sign Up alert!' )
}

AppRegistry.registerComponent('randomio', () => Home);
