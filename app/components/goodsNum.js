import React, {Component} from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity, TextInput, Button, StyleSheet} from 'react-native';

import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

class GoodsNum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: this.props.num,
        };
    }

    chgNum() {
        this.props.cartGoodsNumChg(this.props.id, this.state.num);
    }

    validate(text) {
        const num = parseInt(text);
        if (num > 0 && num <= this.props.max) {
            return num;
        }
        return false;
    }

    onChangeText(text) {
        const num = this.validate(text);
        if (num) {
            this.setState({
                num: num,
            }, this.chgNum);
        } else {
            this.setState({
                num: this.props.num,
            }, this.chgNum);
        }
    }

    onPlus() {
        if (this.state.num < this.props.max) {
            this.setState({
                num: this.state.num + 1
            }, this.chgNum);
        }
    }

    onMinus() {
        if (this.state.num > 1) {
            this.setState({
                num: this.state.num - 1
            }, this.chgNum);
        }
    }

    render() {
        const {theme} = this.props;
        const minusStyle = this.state.num > 1 ? {} : {color: '#ccc'};
        const plusStyle = this.state.num < this.props.max ? {} : {color: '#ccc'};
        return (
            <View style={styles.goodsNum}>
                <TouchableOpacity style={styles.mountMinus} activeOpacity={0.9} onPress={this.onMinus.bind(this)} >
                    <Text style={[styles.mountText, minusStyle]}>-</Text>
                </TouchableOpacity>

                <TextInput
                    style={styles.mount}
                    keyboardType="numeric"
                    maxLength={3}
                    selectTextOnFocus
                    onChangeText={this.onChangeText.bind(this)}
                    value={'' + this.state.num}
                />

                <TouchableOpacity style={styles.mountPlus} activeOpacity={0.9} onPress={this.onPlus.bind(this)} >
                    <Text style={[styles.mountText, plusStyle]}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

GoodsNum.propTypes = {
    id: React.PropTypes.number,
    num: React.PropTypes.number,
    max: React.PropTypes.number,
    cartGoodsNumChg: React.PropTypes.func,
};

const styles = StyleSheet.create({
    goodsNum: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mount: {
        width: 30,
        height: 25,
        fontSize: 13,
        textAlign: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'rgb(203, 203, 203)',
        alignSelf: 'center',
    },
    mountPlus: {
        width: 25,
        height: 25,
        borderColor: 'rgb(203, 203, 203)',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    mountMinus: {
        width: 25,
        height: 25,
        borderColor: 'rgb(203, 203, 203)',
        borderWidth: 1,
        borderRightWidth: 0,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    mountText: {
        fontSize: 18,
        textAlign: 'center',
        alignSelf: 'center',
    }
});

const mapStateToProps = (state) => {
    return {theme: state.Theme};
};

export default connect(mapStateToProps)(GoodsNum);
