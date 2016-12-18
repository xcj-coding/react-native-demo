import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import common from '../common/DYcommon'
class Card extends Component {
    constructor(props) {
        super(props);
    }

    onPress() {
        console.log('touched');
    }

    renderItem (item, style) {
        if(typeof item !== 'undefined') {
            const { imageUri, name, price, footer='footer  footer' } = item;
            return (
                <TouchableOpacity
                    onPress = {() => this.onPress()}
                    activeOpacity = {0.6}
                >
                    <View style={style.card}>
                        <Image
                            style={style.image}
                            source={{uri: imageUri,}}
                        />
                        <View style={style.text}>
                            <Text style={style.name} numberOfLines={2}>{name}</Text>
                            <Text style={style.price}>¥{price}</Text>
                            <Text style={style.footer}>{footer}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }
    }

    render() {
        const { theme, showType, firstItem, secondItem } = this.props;
        let view = showType === 1 ?
            this.renderItem(firstItem, style1) :
            (
                <View style={style2.row}>
                    {this.renderItem(firstItem, style2)}
                    {this.renderItem(secondItem, style2)}
                </View>
            );
        return view;
    }
}

const style1 = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        margin: 1,
    },
    image: {
        flex: 1,
        height: common.window.width  / 3,
    },
    text: {
        flex: 2,
        justifyContent: 'space-around',
        marginLeft: 5,
        paddingRight: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    name: {
        fontSize: 16,
    },
    price: {
        fontSize: 22,
        color: 'red',
    },
    footer: {
        fontSize: 12,
        color: 'gray',
    },
});
const style2 = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    card: {
        flex: 1,
        width: common.window.width / 2,
        margin: 1,
    },
    image: {
        width: common.window.width / 2 - 2,
        height: common.window.width / 2 - 2,
        marginBottom: 5,
    },
    text: {
        flex: 1,
        justifyContent: 'space-around',
        marginLeft: 5,
        paddingRight: 5,
        marginBottom: 10,
    },
    name: {
        fontSize: 14,
    },
    price: {
        fontSize: 22,
        color: 'red',
    },
    footer: {
        fontSize: 12,
        color: 'gray',
    },
});

const mapStateToProps = (state) => {
    return {theme: state.Theme};
};

export default connect(mapStateToProps)(Card);