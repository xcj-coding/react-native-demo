import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

import * as PersonalAction from '../actions/personalAction';

import * as Components from '../components/components';
// import SearchHeader from '../components/searchHeader';

class Personal extends Component {
	constructor(props) {
		super(props)
	}
	personalTest(data) {
		this.props.personalTest(data)
	}
	render() {
		return (
			<ScrollView style={{ flex: 1 }}>
				<Components.SearchHeader />
				<Text>Personal页面</Text>

				<TouchableOpacity onPress={() => { this.personalTest('传入一个数据流到personal') } }>
					<Text>Test reducer</Text>
				</TouchableOpacity>
				<Text>{this.props.test}</Text>
			</ScrollView>
		)
	}
}


function mapStateToProps(state) {
	let test = state.PersonalRD.get('test');
	return {
		test: test
	};
}

function mapDispatchToProps(dispatch) {
	return {
		personalTest: bindActionCreators(PersonalAction.personalTest, dispatch),
	};
}


Personal = connect(mapStateToProps, mapDispatchToProps)(Personal)

export default Personal;