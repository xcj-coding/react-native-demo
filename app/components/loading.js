import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

import DYcommon from '../common/dyCommon';

export default class Loading extends Component {
    render() {
        return (
            <View style={styles.loading}>
                <ActivityIndicator color="white" />
                <Text style={styles.loadingTitle}>加载中……</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loading: {
        backgroundColor: 'gray',
        height: 80,
        width: 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: (DYcommon.window.height - 80) / 2,
        left: (DYcommon.window.width - 100) / 2,
    },

    loadingTitle: {
        marginTop: 10,
        fontSize: 14,
        color: 'white'
    }
})