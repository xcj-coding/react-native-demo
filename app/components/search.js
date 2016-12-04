import React, {Component} from 'react';
import {Text,View,TextInput,StyleSheet} from 'react-native';

class Search extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<View style={[styles.flex,styles.flexDirection]}>
				<View style={styles.flex}>
					<TextInput style={styles.input} returnKeyType="search" />
				</View>
				<View style={styles.btn}>
					<Text style={styles.search}>搜索</Text>
				</View>
			</View>
		)
	}
}

export default Search;