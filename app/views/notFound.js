/**
 * 1.基础第三方框架引入
 */
import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
/**
 * 2.第三方组件引入
 */
import { Actions } from 'react-native-router-flux';
/**
 * 3.项目组件引入
 */
import { Header, NoContent } from '../components/';
/**
 * 4.项目Action引入 || 配置文件引入 || 公用方法引入
 */

/**
 * 页面类
 */
class NotFound extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header />
				<TouchableOpacity onPress={() => {
					Actions.pop()
				} }>
					<Text>goto home</Text>
				</TouchableOpacity>
				<NoContent />
			</View>
		)
	}
}

export default NotFound;