import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class NoContent extends Component {
    render() {
        return (
            <View>
                <Text>--------------</Text>
                <Text>404</Text>
                <Text>没找到这个内容</Text>
                <Text>--------------</Text>
            </View>
        )
    }
}

