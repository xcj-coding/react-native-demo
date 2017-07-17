import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {LazyloadImage} from 'react-native-lazyload';

import common from '../common/dyCommon'

class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    // 跳转商品详情，需要带商品标志，这里省略
    _onPress() {
        Actions.detail();
    }

    renderItem(item, style) {
        if (typeof item === 'undefined') {
            return;
        }
        const {imageUri, name, price, footer = '吐血推荐'} = item;
        return (
            <TouchableOpacity
                onPress={this._onPress.bind(this)}
                activeOpacity={0.6}
                style={style.card}
            >
                {/* 商品海报 */}
                <LazyloadImage
                    host="GoodsList"
                    style={style.image}
                    source={{uri: imageUri,}}
                />
                <View style={style.text}>
                    {/* 商品名称 */}
                    <Text style={style.name} numberOfLines={2}>{name}</Text>
                    {/* 商品价格 */}
                    <Text style={style.price}>¥{price}</Text>
                    {/* 商品简要描述或者标签 */}
                    <Text style={style.footer}>{footer}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const {theme, showType, item} = this.props;
        return this.renderItem(item, (showType === 1 ? style1 : style2 ));
    }
}

ListItem.propTypes = {
    item: React.PropTypes.object,
};

const style1 = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    image: {
        flex: 1,
        margin: 4,
        height: common.window.width / 3,
    },
    text: {
        flex: 2,
        justifyContent: 'space-around',
        marginLeft: 5,
        paddingRight: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
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
    card: {
        width: common.window.width / 2 - 4,
        margin: 2,
        backgroundColor: '#fff',
    },
    image: {
        height: common.window.width / 2 - 4,
        marginBottom: 5,
    },
    text: {
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

export default connect(mapStateToProps)(ListItem);
