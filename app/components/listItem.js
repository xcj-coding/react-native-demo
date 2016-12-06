import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,PixelRatio} from 'react-native';

class ListItem extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<View style={styles.list_item}>
				<Text style={styles.list_item_font}>{this.props.testVal}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	flex: {
		flex: 1
	},
	list_item: {
		height: 40,
		marginLeft: 10,
		marginRight: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		justifyContent: 'center'
	},
	list_item_font: {
		fontSize: 16
	}
})

export default ListItem;