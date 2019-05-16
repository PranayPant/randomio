
import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Alert } from 'react-native';

import ProfileScreen from './Profile.js';

export default class HomeScreen extends React.Component {

	render() {

		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center"}} >
			<Button
				onPress={() => this.props.navigation.navigate('Profile')}
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
