import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Text, View, Image, ListView, ScrollView, RefreshControl, StyleSheet, PixelRatio, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import { Header, Swiper, ClassifyNavListItem } from '../components/';

import * as ClassifyAction from '../actions/classifyAction';
import DYcommon from '../common/dyCommon';

const rankings_Const = {
    rankings_Const_Nav: [
        {
            name: '手机通讯',
            typeId: 1
        },
        {
            name: '休闲食品',
            typeId: 2
        },
        {
            name: '男装',
            typeId: 3
        },
        {
            name: '中外名酒',
            typeId: 4
        },
        {
            name: '生活电器',
            typeId: 5
        },
        {
            name: '大家电',
            typeId: 6
        },
        {
            name: '尿布湿巾',
            typeId: 7
        },
        {
            name: '护理护具',
            typeId: 8
        },
    ],
    rankings_Const_Cont: [
        {
            title: 'Apple iPhone 7 Plus (A1661) 128G',
            img: 'http://m.360buyimg.com/n1/s220x220_jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg',
            price: '7188',
            no: '1'
        },
        {
            title: '荣耀 V8 全网通 高配版 4GB+64GB 典雅灰 移动联通电信4G手机 双卡双待双通',
            img: 'http://m.360buyimg.com/n1/s220x220_jfs/t3046/287/4228128516/574753/fe5eac49/58366695N68e61cfe.png',
            price: '7188',
            no: '2'
        },
        {
            title: '荣耀 V8 全网通 高配版 4GB+64GB 典雅灰 移动联通电信4G手机 双卡双待双通',
            img: 'http://m.360buyimg.com/n1/s220x220_jfs/t2365/168/1185439740/249828/68820aeb/564c5465N82d8e969.jpg',
            price: '7188',
            no: '3'
        },
        {
            title: 'Apple iPhone 7 Plus (A1661) 128G 黑色 移动联通电信4G手机',
            img: 'http://m.360buyimg.com/n1/s220x220_jfs/t2848/212/2061821427/214980/a1de2acb/57578b03Neb0f9bcf.jpg',
            price: '7188',
            no: '4'
        },
        {
            title: 'Apple iPhone 7 Plus (A1661) 128G 黑色 移动联通电信4G手机',
            img: 'http://m.360buyimg.com/n1/s220x220_jfs/t3286/271/2692886276/116415/743fa573/57e4a37aN4b5421ed.jpg',
            price: '7188',
            no: '5'
        },
        {
            title: 'Apple iPhone 7 Plus (A1661) 128G',
            img: 'http://m.360buyimg.com/n1/s220x220_jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg',
            price: '7188',
            no: '6'
        },
        {
            title: '荣耀 V8 全网通 高配版 4GB+64GB 典雅灰 移动联通电信4G手机 双卡双待双通',
            img: 'http://m.360buyimg.com/n1/s220x220_jfs/t3046/287/4228128516/574753/fe5eac49/58366695N68e61cfe.png',
            price: '7188',
            no: '7'
        },
        {
            title: '荣耀 V8 全网通 高配版 4GB+64GB 典雅灰 移动联通电信4G手机 双卡双待双通',
            img: 'http://m.360buyimg.com/n1/s220x220_jfs/t2365/168/1185439740/249828/68820aeb/564c5465N82d8e969.jpg',
            price: '7188',
            no: '8'
        },
        {
            title: 'Apple iPhone 7 Plus (A1661) 128G 黑色 移动联通电信4G手机',
            img: 'http://m.360buyimg.com/n1/s220x220_jfs/t2848/212/2061821427/214980/a1de2acb/57578b03Neb0f9bcf.jpg',
            price: '7188',
            no: '9'
        },
        {
            title: 'Apple iPhone 7 Plus (A1661) 128G 黑色 移动联通电信4G手机',
            img: 'http://m.360buyimg.com/n1/s220x220_jfs/t3286/271/2692886276/116415/743fa573/57e4a37aN4b5421ed.jpg',
            price: '7188',
            no: '10'
        },
    ]
}


class RankingItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity
                onPress={()=>{alert('开发中...')}}
                activeOpacity={0.6}
                style={{ flex: 1, flexDirection: 'row', padding: 5, margin: 10, borderBottomWidth: 1, borderBottomColor: '#eee' }}
                >
                <Image
                    style={{ flex: 1, margin: 4, height: DYcommon.window.width / 3 }}
                    source={{ uri: this.props.item.img }}
                    />

                <View style={{ flex: 2, justifyContent: 'space-around', marginLeft: 5, paddingRight: 5 }}>
                    <Text style={{ flex: 3, fontSize: 16, paddingTop: 10 }} numberOfLines={2}>{this.props.item.title}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', marginBottom: 5, backgroundColor: '#f3f5f7', alignItems: 'center', justifyContent: 'space-around' }}>
                        <Text style={{ fontSize: 14 }}>¥{this.props.item.price}</Text>
                        <Text style={{ fontSize: 14, color: 'red' }}>排名{this.props.item.no}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

class Rankings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initTypeId: 1,
            isRefreshing: false
        }
    }
    selectFn(typeId) {
        this.setState({ initTypeId: typeId }, () => {
            console.log(this.state.initTypeId)
        })
    }
    _onRefresh() {
        this.setState({ isRefreshing: true });
        setTimeout(() => {
            this.setState({
                isRefreshing: false,
            });
        }, 2000);
    }
    render() {
        return (
            <View>
                <Header leftType="back" middleType="text" middleValue="排行榜" />

                <View style={{ marginTop: 60 }}>
                    <View>
                        <ScrollView horizontal style={{ borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                            {
                                rankings_Const.rankings_Const_Nav.map((item, i) => {
                                    return (
                                        <Button key={i} style={this.state.initTypeId === item.typeId ? { width: 80, padding: 10, color: 'red', fontSize: 12, borderBottomWidth: 1, borderBottomColor: 'red' } : { width: 80, padding: 10, color: '#232326', fontSize: 12 }} onPress={() => { this.selectFn(item.typeId) } }>{item.name}</Button>
                                    );
                                })
                            }
                        </ScrollView>
                    </View>

                    <ScrollView refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            tintColor="#000"
                            title="Loading..."
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor="#ffff00"
                            />
                    }>
                        <Text>排行类型id：{this.state.initTypeId}</Text>
                        {
                            rankings_Const.rankings_Const_Cont.map((item, i) => {
                                return (
                                    <RankingItem key={i} item={item} />
                                );
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default Rankings;