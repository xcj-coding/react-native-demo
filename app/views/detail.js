import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

import DYGlobal from '../global/DYGlobal'

import Header from '../components/header'

class ToolBar extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.toolBarItem}>
					<Image source={require('../../res/share.png')} style={{ width: 25, height: 25 }} />
					<Text style={styles.itemTitle}>分享</Text>
				</TouchableOpacity>
				<View style={styles.centerLine} />
				<TouchableOpacity style={styles.toolBarItem}>
					<Image source={require('../../res/favorites-filling.png')} style={{ width: 25, height: 25 }} />
					<Text style={styles.itemTitle}>收藏</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

class Detail extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#fff' }}>
				<Header
					leftIcon={true}
					leftIconAction={() => this.props.navigator.pop()}
					rightIcon={true}
					rightIconAction={() => alert('开发中...')}
					title='详情页面'
					/>

				<ScrollView style={styles.webView}>
					<Text>详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容</Text>
					<Text>详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容</Text>
					<Text>详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容</Text>
					<Text>详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容</Text>
					<Text>详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容</Text>
					<Text>详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容</Text>
					<Text>详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容</Text>
					<Text>详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容</Text>
					<Text>详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容</Text>
					<Text>详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容</Text>
					<Text>详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容</Text>
					<Text>详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容</Text>
					<Text>详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容</Text>
					<Text>详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容</Text>
					<Text>详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容</Text>
					<Text>详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容详情页内容</Text>
				</ScrollView>

				<ToolBar style={{ position: 'absolute', bottom: 0 }} />
			</View>
		)
	}
}

export default Detail;


const styles = StyleSheet.create({
	webView: {
		width: DYGlobal.window.width,
		height: DYGlobal.window.height - 64 - 40,
	},

	container: {
		height: 40,
		flexDirection: 'row',
		alignItems: 'center',
		borderTopColor: '#ccc',
		borderTopWidth: 0.5,
	},

	toolBarItem: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},

	itemTitle: {
		marginLeft: 5,
		fontSize: 12,
		color: 'gray'
	},

	centerLine: {
		position: 'absolute',
		height: 20,
		width: 0.5,
		top: 10,
		right: DYGlobal.window.width * 0.5,
		backgroundColor: '#ccc'
	}
});
