import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    Image,
    Text,
    View,
    Dimensions,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

const W = Dimensions.get('window').width;

class Header extends Component {
    constructor(props) {
        super(props);
    }

    renderLeft() {
        const {leftType, leftCallback, transparent = false} = this.props;
        const type = leftType || 'default';
        const color = transparent ? 'white' : 'gray';
        const callback = () => {
            if (typeof leftCallback === 'function') {
                leftCallback();
            }
        };
        switch (type) {
            case 'back':
                return (
                    <TouchableOpacity style={styles.arrow} onPress={() => { callback(); Actions.pop(); } }>
                        <Icon name="ios-arrow-back" size={25} color={color} />
                    </TouchableOpacity>
                );
            case 'list':
                return (
                    <TouchableOpacity style={styles.arrow} onPress={callback}>
                        <Icon name="ios-list-box" size={25} color={color} />
                    </TouchableOpacity>
                );
            case 'qrcode':
                return (
                    <TouchableOpacity style={styles.arrow} onPress={() => { callback(); Actions.camera(); } }>
                        <Icon name="md-qr-scanner" size={25} color={color} />
                    </TouchableOpacity>
                );
            default:
                return (
                    <View style={styles.arrow} />
                );
        }
    }

    renderRight() {
        const {rightType, rightValue, rightCallback, transparent = false} = this.props;
        const type = rightType || 'default';
        const color = transparent ? 'white' : 'gray';
        const callback = () => {
            if (typeof rightCallback === 'function') {
                rightCallback();
            }
        };
        switch (type) {
            case 'notice':
                return (
                    <TouchableOpacity style={styles.rightDefault} onPress={callback}>
                        <Icon name="ios-chatboxes" size={25} color={color} />
                    </TouchableOpacity>
                );
            case 'list-1':
                return (
                    <TouchableOpacity style={styles.rightDefault} onPress={callback}>
                        <Icon name="ios-list-box-outline" size={25} color={color} />
                    </TouchableOpacity>
                );
            case 'list-2':
                return (
                    <TouchableOpacity style={styles.rightDefault} onPress={callback}>
                        <Icon name="ios-keypad-outline" size={25} color={color} />
                    </TouchableOpacity>
                );
            case 'share':
                return (
                    <TouchableOpacity style={styles.rightDefault} onPress={callback}>
                        <Icon name="md-share-alt" size={25} color={color} />
                    </TouchableOpacity>
                );
            case 'text':
                return (
                    <TouchableOpacity style={styles.rightDefault} onPress={callback}>
                        <Text style={{ flex: 1, color: color, lineHeight: 40, }}>
                            {rightValue}
                        </Text>
                    </TouchableOpacity>
                );
            default:
                return (
                    <View style={styles.rightDefault} />
                );
        }
    }

    renderMiddle() {
        const {middleType, middleValue = '', middleCallback, transparent = false} = this.props;
        const color = transparent ? 'white' : 'gray';
        const type = middleType || 'search';
        const callback = () => {
            if (typeof middleCallback === 'function') {
                middleCallback();
            }
        };
        switch (type) {
            case 'search':
                return (
                    <TouchableOpacity activeOpacity={0.5} style={styles.search} onPress={callback}>
                        <Icon name="ios-search" size={24} color={color} style={{width: 25,}} />
                        <Text style={{color: color, fontSize: 15}}>{middleValue}</Text>
                    </TouchableOpacity>
                );
            case 'text':
                return (
                    <View style={styles.middle}>
                        <Text style={{ flex: 1, fontSize: 16, lineHeight: 30, color: color, overflow: 'hidden' }}>
                            {middleValue}
                        </Text>
                    </View>
                );
            case 'image':
                return (
                    <View style={styles.middle}>
                        <Image source={{ uri: middleValue }} />
                    </View>
                );
            case 'input':
                return (
                    <View style={styles.middle}>
                        {this.props.children}
                    </View>
                );
        }
    }

    render() {
        const {transparent = false} = this.props;
        const containerStyle = {
            backgroundColor: transparent ? 'rgba(0, 0, 0, 0.1)' : '#eee'
        };

        const left = this.renderLeft();

        const right = this.renderRight();

        const middle = this.renderMiddle();

        return (
            <View style={[styles.container, containerStyle, this.props.style]}>
                <StatusBar />
                {left}
                {middle}
                {right}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#eee',
        width: W,
        paddingTop: 20,
        position: 'absolute',
        top: 0,
        zIndex: 9999,
    },
    arrow: {
        width: 25,
        height: 25,
        marginLeft: 10,
        marginRight: 10
    },
    search: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    middle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
    },
    rightDefault: {
        width: 50,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const mapStateToProps = () => {
};

export default Header;
