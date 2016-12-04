import React, {Component} from 'react';
import {Text,View,Image,StyleSheet,PixelRatio} from 'react-native';

import Detail from '../views/detail';

class HomeViewItem extends Component {
	constructor(props){
		super(props)
		this._goTo = this._goTo.bind(this);

		console.log(this.props);
	}
	_goTo(){
		this.props.navigator.push({
			component: Detail,
			title: '详情页面',
			rightButtonTitle: '购物车',
			onRightButtonPress: ()=>{
				alert('进入购物车')
			}
		})
	}
	render(){
		return (
			<View style={{flex: 1}}>
				<View style={[styles.title, styles.center]}>
					<Text style={styles.fontTitle}>✨✨{this.props.title}✨✨</Text>
				</View>
				<View style={styles.container}>
					<View style={[styles.item,styles.lineRight]}>
						<Image source={{uri:'https://img.alicdn.com/imgextra/i2/2406728216/TB22LVnkpXXXXcqXpXXXXXXXXXX_!!2406728216.jpg'}} style={[styles.item,styles.centerBottom]}>
							<Text style={{fontSize: 12}} numberOfLines={1}
							onPress={this._goTo}>
							商品1商品1商品1商品1
							</Text>
						</Image>
					</View>
					<View style={[styles.item]}>
						<Image source={{uri:'https://img.alicdn.com/imgextra/i2/2406728216/TB22LVnkpXXXXcqXpXXXXXXXXXX_!!2406728216.jpg'}} style={[styles.item,styles.centerBottom]}>
							<Text style={{fontSize: 12}} numberOfLines={1}
							onPress={this._goTo}>
							商品1商品1商品1商品1
							</Text>
						</Image>
					</View>
				</View>
				<View style={[styles.itemBottom,styles.lineTop,{flexDirection: 'row'}]}>
					<View style={[styles.itemBottom,styles.lineLeftRight]}>
						<Image source={{uri:'https://img.alicdn.com/imgextra/i2/2406728216/TB22LVnkpXXXXcqXpXXXXXXXXXX_!!2406728216.jpg'}} style={[styles.itemBottom,styles.centerBottom]}>
							<Text style={{fontSize: 12}} numberOfLines={1}
							onPress={this._goTo}>
							商品1商品1商品1商品1
							</Text>
						</Image>
					</View>
					<View style={[styles.itemBottom,styles.lineLeftRight]}>
						<Image source={{uri:'https://img.alicdn.com/imgextra/i2/2406728216/TB22LVnkpXXXXcqXpXXXXXXXXXX_!!2406728216.jpg'}} style={[styles.itemBottom,styles.centerBottom]}>
							<Text style={{fontSize: 12}} numberOfLines={1}
							onPress={this._goTo}>
							商品1商品1商品1商品1
							</Text>
						</Image>
					</View>
					<View style={[styles.itemBottom,styles.lineLeftRight]}>
						<Image source={{uri:'https://img.alicdn.com/imgextra/i2/2406728216/TB22LVnkpXXXXcqXpXXXXXXXXXX_!!2406728216.jpg'}} style={[styles.itemBottom,styles.centerBottom]}>
							<Text style={{fontSize: 12}} numberOfLines={1}
							onPress={this._goTo}>
							商品1商品1商品1商品1
							</Text>
						</Image>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	title: {
		height: 30,
	},
	container: {
		height: 100,
		flexDirection: 'row',
	},
	item: {
		flex: 1,
		height: 100,
	},
	itemBottom: {
		flex: 1,
		height: 70,
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	centerBottom: {
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	fontTitle: {
		color: '#000',
		fontSize: 12,
		fontWeight: 'bold'
	},
	lineLeftRight: {
		borderLeftWidth: 1/PixelRatio.get(),
		borderRightWidth: 1/PixelRatio.get(),
		borderColor: '#fff'
	},
	lineRight: {
		borderRightWidth: 1/PixelRatio.get(),
		borderColor: '#fff'
	},
	lineTop: {
		borderTopWidth: 1/PixelRatio.get(),
		borderColor: '#fff'
	}
})

export default HomeViewItem;