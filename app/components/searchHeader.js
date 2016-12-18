import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, PixelRatio } from 'react-native';

import DYcommon from '../common/DYcommon';

export default class SearchHeader extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: '请输入商品名称'
		}
	}
	render() {
		return (
			<View style={styles.headerWrap}>
				<TouchableOpacity
					activeOpacity={0.75}
					style={styles.searchInput}
					onPress={() => {
						alert('加载搜索组件')
						this.props.searchAction
					} }
					>
					<Image
						style={styles.searchIcon}
						source={require('../../res/search.png')}
						/>
					<Text style={styles.searchPlaceholder}>请输入商品名称</Text>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.75}
					onPress={() => {
						alert('加载扫描组件')
						this.props.searchAction
					} }
					>
					<Image
						style={styles.scanIcon}
						source={require('../../res/scanning.png')}
						/>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	headerWrap: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#eee',
		borderBottomColor: '#ccc',
		borderBottomWidth: 0.5,
		height: 60,
	},
	searchInput: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 24,
		width: DYcommon.window.width - 30 - 16 - 6 * 3,
		marginTop: 16,
		marginRight: 16,
		backgroundColor: '#fff',
		borderRadius: 2,
	},
	searchIcon: {
		width: 20,
		height: 20,
	},
	scanIcon: {
		marginTop: 16,
		width: 20,
		height: 20,
	},
	searchPlaceholder: {
		marginLeft: 10,
		textAlign: 'center',
		fontSize: 15,
		color: 'gray'
	}
})
