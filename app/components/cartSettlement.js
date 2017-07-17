import React, {Component} from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity, TextInput, Button, StyleSheet} from 'react-native';

import {connect} from 'react-redux';

import {Actions} from 'react-native-router-flux';

import Root from '../common/rootConfig';

class CartSettlement extends Component {
    constructor(props) {
        super(props);
    }

    onSelect() {
        this.props.cartSelectAll(!this.props.selectedAll);
    }

    render() {
        const {theme, style={}, totalPrice, selectedAll, selectedNum,} = this.props;
        return (
            <View style={[styles.container, style]}>
                {/* 全选按钮 */}
                <TouchableOpacity activeOpacity={0.9} style={styles.selector} onPress={this.onSelect.bind(this)} >
                    <Image style={styles.selectorImg} source={selectedAll ? Root.cart.selected : Root.cart.select} />
                    <Text>全选</Text>
                </TouchableOpacity>
                {/* 被选中商品小计 */}
                <View style={styles.total}>
                    <Text style={styles.totalText}>合计：¥{totalPrice.toFixed(2)}</Text>
                    <Text style={styles.totalSummary}>不含运费</Text>
                </View>
                {/* 结算按钮 */}
                <TouchableOpacity style={styles.settle}>
                    <Text style={styles.settleText}>结算({selectedNum})</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

CartSettlement.propTypes = {
    selectedAll: React.PropTypes.bool,
    totalPrice: React.PropTypes.number,
    selectedNum: React.PropTypes.number,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#eee',
        paddingRight: 0,
    },
    selector: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },
    selectorImg: {
        width: 18,
        height: 18,
        marginRight: 10,
    },
    total: {
        flex: 3,
        justifyContent: 'flex-end',
    },
    totalText: {
        fontSize: 16,
        textAlign: 'right',
    },
    totalSummary: {
        fontSize: 12,
        textAlign: 'right',
        color: '#666',
    },
    settle: {
        flex: 2,
        height: 50,
        backgroundColor: "#f00",
        marginLeft: 10,
    },
    settleText: {
        fontSize: 18,
        lineHeight: 50,
        textAlign: 'center',
        color: '#fff',
    },
});

const mapStateToProps = (state) => {
    return {theme: state.Theme};
};

export default connect(mapStateToProps)(CartSettlement);
