import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, ScrollView, TabBarIOS, NavigatorIOS, Navigator } from 'react-native';

import Welcome from './welcome/welcome'

class Root extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar
					barStyle='light-content'
					backgroundColor='transparent'
					translucent={true}
					/>
				<Navigator
					initialRoute={{ name: 'Welcome', component: Welcome }}
					configureScene={() => {
						return Navigator.SceneConfigs.PushFromRight;
					} }
					renderScene={(route, navigator) => {
						let Component = route.component;
						return (
							<Component navigator={navigator} route={route} {...route.passProps} />
						)
					} }
					/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	flex: {
		flex: 1
	},
	message: {
		alignItems: 'center',
		marginLeft: 5,
		marginRight: 5
	},
	message_title: {
		fontSize: 18,
		color: '#18B5FF',
		marginBottom: 5
	},
	list: {
		height: 30,
		fontSize: 15,
		marginLeft: 10,
		marginTop: 10
	}
})

export default Root;





