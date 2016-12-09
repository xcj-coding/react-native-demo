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
                <Text>出错了，哥～</Text>
                <Text>我是传过来的值：{this.props.data}</Text>
                
				<TouchableOpacity onPress={() => {
					Actions.pop()
				} }>
					<Text>goto home</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default NotFound;