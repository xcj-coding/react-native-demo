import React, {Component} from 'react';
import {
    StatusBar,
    StyleSheet,
    Image,
    Text,
    View,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native'; 

import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

const W = Dimensions.get('window').width;

class Header extends Component {
    constructor(props) {
        super(props);
    }

    renderLeft() {
        const { leftType, leftCallback, transparent=false } = this.props;
        const type = leftType || 'default';
        const color = transparent ? 'white': 'gray';
        const callback = () => {
            if (typeof leftCallback === 'function') {
                leftCallback();
            }
        };
        switch (type) {
            case 'back':
                return (
                    <TouchableOpacity style={styles.arrow} onPress={() => {callback();Actions.pop();}}>
                        <Icon name="ios-arrow-back" size={25} color={color}/>
                    </TouchableOpacity>
                );
            case 'list':
                return (
                    <TouchableOpacity style={styles.arrow} onPress={callback}>
                        <Icon name="ios-list-box" size={25} color={color}/>
                    </TouchableOpacity>
                );
            case 'qrcode':
                return (
                    <TouchableOpacity style={styles.arrow} onPress={callback}>
                        <Icon name="md-qr-scanner" size={25} color={color}/>
                    </TouchableOpacity>
                );
            default:
                return (
                    <View style={styles.arrow} />
                );
        }
    }

    renderRight() {
        const { rightType, rightCallback, transparent=false } = this.props;
        const type = rightType || 'default';
        const color = transparent ? 'white': 'gray';
        const callback = () => {
            if (typeof rightCallback === 'function') {
                rightCallback();
            }
        };
        switch (type) {
            case 'notice':
                return (
                    <TouchableOpacity style={styles.rightDefault} onPress={callback}>
                        <Icon name="ios-chatboxes" size={25} color={color}/>
                    </TouchableOpacity>
                );
            case 'list-1':
                return (
                    <TouchableOpacity style={styles.rightDefault} onPress={callback}>
                        <Icon name="ios-list-box-outline" size={25} color={color}/>
                    </TouchableOpacity>
                );
            case 'list-2':
                return (
                    <TouchableOpacity style={styles.rightDefault} onPress={callback}>
                        <Icon name="ios-keypad-outline" size={25} color={color}/>
                    </TouchableOpacity>
                );
            case 'share':
                return (
                    <TouchableOpacity style={styles.rightDefault} onPress={callback}>
                        <Icon name="md-share-alt" size={25} color={color}/>
                    </TouchableOpacity>
                );
            default:
                return (
                    <View style={styles.rightDefault} />
                );
        }
    }

    renderMiddle() {
        const { middleType, middleValue='', middleCallback } = this.props;
        const type = middleType || 'search';
        const callback = () => {
            if (typeof middleCallback === 'function') {
                middleCallback();
            }
        };
        switch (type) {
            case 'search':
                return (
                    <TouchableOpacity style={styles.search} onPress={callback}>
                        <TextInput style= {{flex: 1, fontSize: 14, paddingLeft: 10}} placeholder='搜索商品'/>
                    </TouchableOpacity>
                );
            case 'text':
                return (
                    <View style={styles.middle}>
                        <Text style= {{flex: 1, fontSize: 16, lineHeight: 30, overflow: 'hidden'}} >
                            {middleValue}
                        </Text>
                    </View>
                );
            case 'image':
                return (
                    <View style={styles.middle}>
                        <Image source={{uri: middleValue}} />
                    </View>
                );
        }
    }

    render() {
        const { transparent=false } = this.props;
        const containerStyle = {
            backgroundColor: transparent ? 'rgba(0, 0, 0, 0.1)': '#eee'
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
        paddingTop: 5,
        paddingBottom: 5,
        height: 30,
        backgroundColor: '#dedede'
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

function mapStateToProps() {

}

module.exports = Header;
