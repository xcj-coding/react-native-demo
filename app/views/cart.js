import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

import * as CartAction  from '../actions/cartAction';

import SearchHeader from '../components/searchHeader';
import ListItem from '../components/listItem';
import HotGoods from '../components/hotGoods';

class Cart extends Component {
	constructor(props) {
		super(props)
		console.log(this.props);
	}
	cartTest(data){
		this.props.cartTest(data)
	}
	render() {
		let hotGoodsArray = [
			{
				name: '热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1热门商品1',
				img: 'https://img.alicdn.com/imgextra/i2/2406728216/TB22LVnkpXXXXcqXpXXXXXXXXXX_!!2406728216.jpg'
			},
			{
				name: '热门商品2热门商品2热门商品2热门商品2热门商品2热门商品2热门商品2',
				img: 'https://img.alicdn.com/imgextra/i2/2406728216/TB22LVnkpXXXXcqXpXXXXXXXXXX_!!2406728216.jpg'
			},
			{
				name: '热门商品3热门商品3热门商品3热门商品3热门商品3热门商品3热门商品3',
				img: 'https://img.alicdn.com/imgextra/i2/2406728216/TB22LVnkpXXXXcqXpXXXXXXXXXX_!!2406728216.jpg'
			},
			{
				name: '热门商品4热门商品4热门商品4热门商品4热门商品4热门商品4热门商品4',
				img: 'https://img.alicdn.com/imgextra/i2/2406728216/TB22LVnkpXXXXcqXpXXXXXXXXXX_!!2406728216.jpg'
			},
		]
		return (
			<ScrollView style={{ flex: 1 }}>
				<SearchHeader />
				<ListItem testVal="第一条商品" />
				<ListItem testVal="第一条商品" />
				<HotGoods hotGoods={hotGoodsArray} />

				<TouchableOpacity onPress={() => { this.cartTest('传入一个数据流到cart') } }>
					<Text>Test reducer</Text>
				</TouchableOpacity>
				<Text>{this.props.test}</Text>
			</ScrollView>
		)
	}
}


const styles = StyleSheet.create({
	flex: {
		flex: 1
	}
})


function mapStateToProps(state) {
	let test = state.CartRD.get('test');
	return {
		test: test
	};
}

function mapDispatchToProps(dispatch) {
	return {
		cartTest: bindActionCreators(CartAction.cartTest, dispatch),
	};
}


Cart = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default Cart;
