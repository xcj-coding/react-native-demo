import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, PixelRatio } from 'react-native';

import * as ClassifyAction from '../actions/classifyAction';

import Detail from './detail';

class Classify extends Component {
	constructor(props) {
		super(props)
		console.log(this.props);
	}
	goTo() {
		// alert(this.props)
		this.props.navigator.push({
			component: Detail,
			title: '详情页面',
			rightButtonTitle: '购物车',
			onRightButtonPress: () => {
				alert('进入购物车')
			}
		})
	}
	classifyTest(data) {
		this.props.classifyTest(data)
	}
	render() {
		return (
			<ScrollView style={{ flex: 1 }}>
				<View style={styles.container}>
					<View style={[styles.item, styles.center]}>
						<Text numberOfLines={1}
							onLayout={(e) => {
								// console.log(e.nativeEvent)
							} }
							onPress={this.goTo.bind(this)}>
							商品1商品1商品1商品1
						</Text>
					</View>
					<View style={[styles.item, styles.lineLeftRight]}>
						<View style={[styles.center, styles.flex, styles.lineCenter]}>
							<Text>商品2</Text>
						</View>
						<View style={[styles.center, styles.flex]}>
							<Text>商品3</Text>
						</View>
					</View>
					<View style={styles.item}>
						<View style={[styles.center, styles.flex, styles.lineCenter]}>
							<Text>商品4</Text>
						</View>
						<View style={[styles.center, styles.flex]}>
							<Text>商品5</Text>
						</View>
					</View>
				</View>

				<TouchableOpacity onPress={() => { this.classifyTest('传入一个数据流到classify') } }>
					<Text>Test reducer</Text>
				</TouchableOpacity>
				<Text>{this.props.test}</Text>
			</ScrollView>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		marginTop: 5,
		marginLeft: 5,
		marginRight: 5,
		height: 84,
		borderWidth: 1,
		flexDirection: 'row',
		borderRadius: 5,
		padding: 2,
		backgroundColor: '#ccc'
	},
	item: {
		flex: 1,
		height: 80,
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	flex: {
		flex: 1
	},
	font: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold'
	},
	lineLeftRight: {
		borderLeftWidth: 1 / PixelRatio.get(),
		borderRightWidth: 1 / PixelRatio.get(),
		borderColor: '#fff'
	},
	lineCenter: {
		borderBottomWidth: 1 / PixelRatio.get(),
		borderColor: '#fff'
	}
})


function mapStateToProps(state) {
	let test = state.ClassifyRD.get('test');
	return {
		test: test
	};
}

function mapDispatchToProps(dispatch) {
	return {
		classifyTest: bindActionCreators(ClassifyAction.classifyTest, dispatch),
	};
}


Classify = connect(mapStateToProps, mapDispatchToProps)(Classify)

export default Classify;