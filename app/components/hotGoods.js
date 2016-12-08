import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, PixelRatio } from 'react-native';

export default class HotGoods extends Component {
	constructor(props) {
		super(props)
	}
	show(title) {
		alert(title)
	}
	render() {
		let hotGoodsArray = this.props.hotGoods;
		return (
			<View style={styles.flex}>
				<Text style={styles.hotgoods_title}>热门商品</Text>
				{
					hotGoodsArray.map((item, i) => {
						return (
							<View style={[styles.hotgoods_item, styles.flex]} key={i}>
								<View style={styles.flex_img}>
									<Image style={{ width: 70, height: 70 }} source={{ uri: item.img }} />
								</View>
								<View style={styles.flex_text}>
									<Text
										onPress={this.show.bind(this, item.name)}
										numberOfLines={2}
										>
										{item.name}
									</Text>
								</View>
							</View>
						);
					})
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	flex: {
		flex: 1
	},
	flex_img: {
		flex: 1
	},
	flex_text: {
		flex: 3
	},
	hotgoods_title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#cd1d1c',
		marginLeft: 10,
		marginTop: 15,
		marginBottom: 10,
	},
	hotgoods_item: {
		margin: 10,
		height: 80,
		flexDirection: 'row'
	}
})
