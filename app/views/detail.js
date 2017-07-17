import React, {Component} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity, StyleSheet} from 'react-native';

import {Actions} from 'react-native-router-flux';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Button from 'react-native-button';

import {Header, Swiper, IconList, VideoPlayer, Share} from '../components/';

import DYcommon from '../common/dyCommon';
import DYconfig from '../common/dyConfig';


class ToolBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.toolBarItem}>
                        <Image source={require('../../res/store.png')} style={{ width: 18, height: 18 }}/>
                        <Text style={{fontSize:12,marginTop:2}}>供应商</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toolBarItem}>
                        <Image source={require('../../res/favorite.png')} style={{ width: 18, height: 18 }}/>
                        <Text style={{fontSize:12,marginTop:2}}>关注</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toolBarItem}>
                        <Image source={require('../../res/cart.png')} style={{ width: 18, height: 18 }}/>
                        <Text style={{fontSize:12,marginTop:2}}>购物车</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1}}>
                    <Button
                        onPress={() => { alert('开发中。。。') } }
                        style={{ backgroundColor:'#ffb03f',  color: "#fff",height:40,alignItems: 'center',padding:10,fontSize:14}}>
                        加入购物车
                    </Button>
                </View>
                <View style={{ flex: 1}}>
                    <Button
                        onPress={() => { alert('开发中。。。') } }
                        style={{ backgroundColor:'#f23030',  color: "#fff",height:40,alignItems: 'center',padding:10,fontSize:14}}>
                        立即购买
                    </Button>
                </View>
            </View>
        )
    }
}

class Detail extends Component {
    constructor(props) {
        super(props);
		this.state = {
			shareVisible: false
		}
    }

	changeShareVisible() {
		this.setState({
			shareVisible: !this.state.shareVisible
		});
	}

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#f0f2f5' }}>
                <Header leftType="back" middleType="text" middleValue="产品详情" rightType = "share"
					rightCallback = {this.changeShareVisible.bind(this)}
				/>

                <ScrollView style={[styles.webView, { marginTop: 60 }]}>
                    <Swiper list={DYconfig.home.banner}/>

                    <View style={{ padding: 10, backgroundColor: '#fff' }}>
                        <Text numberOfLines={2} style={{ fontSize: 14, color: '#232326' }}>Apple iPhone 7 Plus (A1661) 32G 银色 移动联通电信移动联通电信4G移动联通电信4G4G手机Apple iPhone 7 Plus (A1661) 32G 银色 移动联通电信4G手机</Text>
                        <Text style={{ fontSize: 20, color: '#f23030', marginTop: 10 }}>¥6388.00</Text>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <ScrollableTabView
                            tabBarPosition='top'
                            renderTabBar={() => <DefaultTabBar />}
                            initialPage={0}
                            onChangeTab={(obj) => {
                                console.log('index:' + obj.i);
                            }}
                            tabBarUnderlineStyle={{ height: 2, backgroundColor: '#222' }}
                            tabBarBackgroundColor='#fff'
                            tabBarActiveTextColor='#252525'
                            tabBarInactiveTextColor='#252525'
                            tabBarTextStyle={{ fontSize: 14 }}
                        >
                            <View tabLabel='商品' style={{backgroundColor:'#fff',minHeight:300}}>
                                <Text>商品基本信息</Text>
                            </View>
                            <View tabLabel='详情' style={{backgroundColor:'#fff',minHeight:300}}>
                                <Text>商品详细信息</Text>
                            </View>
                            <View tabLabel='评价' style={{backgroundColor:'#fff',minHeight:300}}>
                                <Text>评论区</Text>
                            </View>
                        </ScrollableTabView>
                    </View>

                </ScrollView>
				<Share 
					visible = {this.state.shareVisible}
					changeShareVisible = {this.changeShareVisible.bind(this)}
				 />

                <ToolBar style={{ position: 'absolute', bottom: 0 }}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    webView: {
        width: DYcommon.window.width,
        height: DYcommon.window.height - 60 - 40,
    },
    container: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#ccc'
    },
    toolBarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default Detail;


