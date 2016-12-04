import React, {Component} from 'react';
import {View,ScrollView,StyleSheet} from 'react-native';

import Header from '../components/header';
import ListItem from '../components/listItem';
import HotGoods from '../components/hotGoods';

class Cart extends Component {
	constructor(props){
		super(props)
		console.log(this.props);
	}
	render(){
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
			<ScrollView style={{flex: 1}}>
				<Header />
				<ListItem title="第一条商品" />
				<ListItem title="第一条商品" />
				<HotGoods hotGoods={hotGoodsArray} />
			</ScrollView>
		)
	}
}

export default Cart;

const styles = StyleSheet.create({
	flex: {
		flex: 1
	}
})