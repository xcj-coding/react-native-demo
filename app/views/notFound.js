// 404页面
import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import * as Components from '../components/components';
// import Header from '../components/header'
// import NoContent from '../components/noContent'

class NotFound extends Component {
	constructor(props) {
		super(props)
	}
	personalTest(data) {
		this.props.personalTest(data)
	}
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Components.Header />

				<Components.NoContent />
			</View>
		)
	}
}

export default NotFound;