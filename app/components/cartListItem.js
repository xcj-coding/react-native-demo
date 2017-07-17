import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput, StyleSheet} from 'react-native';

import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import GoodsNum from './goodsNum';

import Root from '../common/rootConfig';

class CartListItem extends Component {
    constructor(props) {
        super(props);
    }

    _onSelect() {
        this.props.cartSelect(this.props.item.id, !this.props.item.selected);
    }

    _onDelete() {
        this.props.cartRemove(this.props.item.id);
    }

    render() {
        const {theme, item, ...props} = this.props;
        const {id, selected, imageUri, title, summary, price, num, } = item;
        return (
            <View style={styles.container}>
                {/* 商品选择按钮 */}
                <TouchableOpacity activeOpacity={0.8} style={styles.selector} onPress={this._onSelect.bind(this)} >
                    <Image style={styles.selectorImg} source={selected ? Root.cart.selected : Root.cart.select} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.goods} onPress={()=>Actions.detail()} >
                    {/* 商品海报 */}
                    <Image style={styles.goodsImg} source={{uri: imageUri}} />

                    <View style={styles.goodsDetail}>
                        {/* 商品名称 */}
                        <Text style={styles.goodsTitle} numberOfLines={2} >{title}</Text>
                        {/* 商品概要或者标签 */}
                        <Text style={styles.goodsSummary}>{summary}</Text>
                        <View style={styles.goodsFooter}>
                            {/* 商品价格 */}
                            <Text style={styles.goodsPrice}>¥{price}</Text>
                            {/* 商品数量编辑 */}
                            <View style={styles.goodsNum}>
                                <GoodsNum id={id} num={num} max={99} {...props} />
                            </View>
                            {/* 商品从购物车删除按钮 */}
                            <TouchableOpacity style={styles.goodsDelete} onPress={this._onDelete.bind(this)} >
                                <Text style={styles.goodsDeleteText}>删除</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </TouchableOpacity>
            </View>
        );
    }
}

CartListItem.propTypes = {
    item: React.PropTypes.object,
    cartSelect: React.PropTypes.func,
    cartRemove: React.PropTypes.func,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin: 5,
    },
    selector: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    selectorImg: {
        width: 18,
        height: 18,
    },
    goods: {
        flex: 15,
        flexDirection: 'row',
    },
    goodsImg: {
        flex: 1,
        width: 110,
        height: 110,
    },
    goodsDetail: {
        flex: 2,
    },
    goodsTitle: {
        flex: 1,
        fontSize: 14,
    },
    goodsSummary: {
        flex: 1,
        color: 'gray',
        fontSize: 12,
    },
    goodsFooter: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    goodsPrice: {
        flex: 2,
        textAlign: 'left',
        color: 'red',
        fontSize: 18,
    },
    goodsNum: {
        flex: 2,
    },
    goodsDelete: {
        flex: 1,
    },
    goodsDeleteText: {
        textAlign: 'center',
        color: '#f00',
        fontSize: 14,
    },
});

const mapStateToProps = (state) => {
    return {theme: state.Theme};
};

export default connect(mapStateToProps)(CartListItem);
