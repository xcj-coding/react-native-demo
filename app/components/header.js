import React, {Component} from 'react';
import {View,Text,StyleSheet,PixelRatio} from 'react-native';

class Header extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<View style={[styles.flex]}>
				<Text style={styles.font}>
					<Text style={styles.font_1}>TEST</Text>
					<Text style={styles.font_2}>Header</Text>
					<Text>TEST</Text>
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	flex: {
		height: 50,
		borderBottomWidth: 3/PixelRatio.get(),
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
	}
})

export default Header;