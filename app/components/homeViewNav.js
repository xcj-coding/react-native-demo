import React, {Component} from 'react';
import {TouchableOpacity,Text,View,Image,StyleSheet,PixelRatio} from 'react-native';

import Classify from '../views/classify';

class HomeViewNav extends Component {
	constructor(props){
		super(props)
		this._goTo = this._goTo.bind(this);

		console.log(this.props);
	}
	_goTo(){
		this.props.navigator.push({
			component: Classify,
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
				<View style={{flex: 1,flexDirection: 'row'}}>
					<TouchableOpacity style={[styles.center,{flex: 1}]} onPress={this._goto}>
					<Image
					style={styles.button}
					source={require('image!star')}
					/>
					<Text>1111</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.center,{flex: 1}]} onPress={this._goto}>
					<Image
					style={styles.button}
					source={require('image!star')}
					/>
					<Text>2222</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.center,{flex: 1}]} onPress={this._goto}>
					<Image
					style={styles.button}
					source={require('image!star')}
					/>
					<Text>3333</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.center,{flex: 1}]} onPress={this._goto}>
					<Image
					style={styles.button}
					source={require('image!star')}
					/>
					<Text>4444</Text>
					</TouchableOpacity>
				</View>
				<View style={{flex: 1,flexDirection: 'row'}}>
					<TouchableOpacity style={[styles.center,{flex: 1}]} onPress={this._goto}>
					<Image
					style={styles.button}
					source={require('image!star')}
					/>
					<Text>1111</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.center,{flex: 1}]} onPress={this._goto}>
					<Image
					style={styles.button}
					source={require('image!star')}
					/>
					<Text>2222</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.center,{flex: 1}]} onPress={this._goto}>
					<Image
					style={styles.button}
					source={require('image!star')}
					/>
					<Text>3333</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.center,{flex: 1}]} onPress={this._goto}>
					<Image
					style={styles.button}
					source={require('image!star')}
					/>
					<Text>4444</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	button: {
		height: 30,
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center'
	},
})

export default HomeViewNav;