import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, PixelRatio } from 'react-native';

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: '请输入商品名称'
		}
	}
	render() {
		// <View style={[styles.flex]}>
		// 	<Text style={styles.font}>
		// 		<Text style={styles.font_1}>TEST</Text>
		// 		<Text style={styles.font_2}>Header</Text>
		// 		<Text>TEST</Text>
		// 	</Text>
		// </View>
		return (
			<View style={styles.headerWrap}>
				<TouchableOpacity
					activeOpacity={0.75}
					style={styles.searchInput}
					onPress={this.props.searchAction}
					>
					<Image
						style={styles.searchIcon}
						source={require('../../res/ic_search.jpg')}
						/>
					<TextInput
						style={[styles.searchPlaceholder,{ width: 100,  borderColor: 'gray', borderWidth: 1 }]}
						onChangeText={(text) => this.setState({ text })}
						placeholder={this.state}
						value={this.state.text}
						/>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.75}
					onPress={this.props.scanAction}
					>
					<Image
						style={styles.scanIcon}
						source={require('../../res/ic_scan.jpg')}
						/>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	flex: {
		height: 50,
		borderBottomWidth: 3 / PixelRatio.get(),
		borderBottomColor: '#ef2d36',
		alignItems: 'center',
		justifyContent: 'center',
	},
	font: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	font_1: {
		color: '#cd1d1c'
	},
	font_2: {
		color: '#fff',
		backgroundColor: '#cd1d1c'
	},


	headerWrap: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#000',
		borderBottomColor: '#ccc',
		borderBottomWidth: 0.5,
		height: 44,
	},
	searchInput: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 24,
		// width: Common.window.width - 30 - 6 * 3,
		marginTop: 16,
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

export default Header;
