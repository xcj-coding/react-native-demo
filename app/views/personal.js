import React, {Component} from 'react';
import {Text,View,ScrollView} from 'react-native';

class Personal extends Component {
	constructor(props){
		super(props)
		console.log(props);
	}
	render(){
		return (
			<ScrollView style={{flex: 1}}>
				<Text>Personal页面</Text>
			</ScrollView>
		)
	}
}

export default Personal;