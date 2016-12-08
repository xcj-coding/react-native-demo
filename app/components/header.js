/**
 * 导航栏标题
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import DYGlobal from '../global/DYGlobal'

export default class Header extends Component {
    render() {
        let NavigationBar = [];

        // 左边图片按钮
        if (this.props.leftIcon) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'leftIcon'}
                    activeOpacity={0.75}
                    style={styles.leftIcon}
                    onPress={this.props.leftIconAction}
                    >
                    <Image source={require('../../res/back.png')} style={{ marginTop: 5, width: 25, height: 25 }} />
                </TouchableOpacity>
            )
        }

        // 标题
        if (this.props.title != undefined) {
            NavigationBar.push(
                <View key={'title'} style={styles.titleWrap}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
            )
        }

        // 右边图片按钮
        if (this.props.rightIcon != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'rightIcon'}
                    activeOpacity={0.75}
                    style={styles.rightIcon}
                    onPress={this.props.rightIconAction}
                    >
                    <Image source={require('../../res/category.png')} style={{ marginTop: 5, width: 25, height: 25 }} />
                </TouchableOpacity>
            )
        }

        return (
            <View style={styles.navigationBarContainer}>
                {NavigationBar}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navigationBarContainer: {
        flexDirection: 'row',
        height: 44,
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        backgroundColor: 'white'
    },
    titleWrap: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 15,
        marginLeft: -40,
    },
    leftIcon: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    rightIcon: {
        position: 'absolute',
        right: 10,
        top: 7
    },
    rightButton: {
        position: 'absolute',
        right: 10,
        height: 44,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonTitleFont: {
        color: 'white',
        fontSize: 15,
    },
    rightMenu: {
        position: 'absolute',
        right: 10,
        height: 44,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
});