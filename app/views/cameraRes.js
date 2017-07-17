import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, AlertIOS, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { Header } from '../components/';

import DYcommon from '../common/dyCommon';


class CameraRes extends Component {
    constructor(props) {
        super(props)
        console.log(props);
    }
    render() {
        return (
            <View>
                <Header leftType="back" middleType="text" middleValue="摄像头扫描结果页" />
                <View style={{ marginTop: 60 }}>
                    <Text>{this.props.data}</Text>
                </View>
            </View>
        )
    }
}

export default CameraRes;