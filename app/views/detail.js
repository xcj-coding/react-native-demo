import React, {Component} from 'react';
import {Text,View,ScrollView,StyleSheet} from 'react-native';

class Detail extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<ScrollView style={{flex: 1}}>
				<Text>详情页标题</Text>
				<Text>详情页内容</Text>
			</ScrollView>
		)
	}
}

export default Detail;