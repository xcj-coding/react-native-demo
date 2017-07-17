/**
 * 1.基础第三方框架引入
 */
import React, {Component} from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity, TextInput, Button, StyleSheet} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

/**
 * 2.第三方组件引入
 */
import {Actions} from 'react-native-router-flux';
/**
 * 3.项目组件引入
 */

import common from '../common/dyCommon';

import Header from '../components/header';
import CartListItem from '../components/cartListItem';
import CartSettlement from '../components/cartSettlement';

/**
 * 4.项目Action引入 || 配置文件引入 || 公用方法引入
 */
import * as CartAction from '../actions/cartAction';

/**
 * 页面类
 */
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // mode: 1,
            cart: this.props.cart,
        };
    }

    chgMode() {
        // this.setState({
        //     mode: this.state.mode === 1 ? 2 : 1,
        // });
        const data = {
            imageUri: "http://m.360buyimg.com/mobilecms/s357x357_jfs/t3334/118/950912833/79547/3301c78b/58194797N47934bdf.jpg!q50.jpg",
            price: "2799.00",
            title: " OPPO R9s 全网通4G+64G 双卡双待手机 黑色",
            summary: "全网通",
            num: 1,
            selected: true,
        };
        this.props.cartAdd({
            ...data,
            id: Math.max(...[
                ...this.state.cart.map(item => item.id),
                0,
            ]) + 1,
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.cart !== nextProps.cart) {
            this.setState({
                cart: nextProps.cart,
            });
        }
    }

    render() {
        const selected = this.state.cart.filter((item)=>item.selected);
        const selectedAll = selected.length === this.state.cart.length;
        const selectedNum = selected.map(item => item.num).reduce((a, b) => a + b, 0);
        const totalPrice = selected.map(item => parseFloat(item.price) * item.num).reduce((a, b) => a + b, 0);
        return (
            <View style={styles.flex}>
                <Header
                    middleType="text"
                    middleValue="购物车"
                    rightType="text"
                    rightValue='新增'
                    rightCallback={this.chgMode.bind(this)}
                />

                <View>
                    <ScrollView style={styles.cart}>
                        {this.state.cart.map((item, index) => <CartListItem key={index} item={item} {...this.props}/>)}
                    </ScrollView>
                </View>

                <CartSettlement style={styles.settlement} totalPrice={totalPrice} selectedNum={selectedNum} selectedAll={selectedAll} {...this.props} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    cart: {
        marginTop: 60,
        height: common.window.height - 160,
    },
    settlement: {
        flex: 1,
        height: 50,
    }
});

function mapStateToProps(state) {
    return {
        cart: state.CartRD,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        cartAdd: bindActionCreators(CartAction.cartAdd, dispatch),
        cartRemove: bindActionCreators(CartAction.cartRemove, dispatch),
        cartSelect: bindActionCreators(CartAction.cartSelect, dispatch),
        cartSelectAll: bindActionCreators(CartAction.cartSelectAll, dispatch),
        cartGoodsNumChg: bindActionCreators(CartAction.cartGoodsNumChg, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
