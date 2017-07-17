/**
 * 1.基础第三方框架引入
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Modal, ListView, ScrollView, RefreshControl, Image, Text, View, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';

/**
 * 2.第三方组件引入
 */
import { Actions } from 'react-native-router-flux';
import {LazyloadScrollView, LazyloadView} from 'react-native-lazyload';

/**
 * 3.项目组件引入
 */
import { Header, Swiper, IconList, VideoPlayer } from '../components/';

/**
 * 4.项目Action引入 || 配置文件引入 || 公用方法引入
 */
import * as HomeAction from '../actions/homeAction';
import DYcommon from '../common/dyCommon';
import DYconfig from '../common/dyConfig';

/**
 * 页面内使用常量
 */


/**
 * 页面类
 */
class Home extends Component {
    constructor(props, context) {
        super(props, context);

        // 用于构建DataSource对象  
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        // 实际的DataSources存放在state中  
        this.state = {
            isRefreshing: false,
            modalVisible: false,
            LOADINGTIP: false,
            headerVisible: true,
            headerTransparent: true,
            dataSource: ds.cloneWithRows(DYconfig.home.videos),
        }
    }

    homeTest(data) {
        this.props.homeTest(data)
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    onScroll(e) {
        const offset = e.nativeEvent.contentOffset.y;
        this.setState({
            headerVisible: offset >= -10,
            headerTransparent: Math.abs(offset) <= 60,
        });
    }
    onRefresh() {
        this.setState({isRefreshing: true});
        this.timer = setTimeout(() => {
            this.setState({
                isRefreshing: false,
            });
        }, 500);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    render() {
        return (
            <View>
                {
                    this.state.headerVisible ? <Header
                        leftType="qrcode"
                        rightType="notice"
                        middleValue="请输入搜索内容"
                        middleCallback={Actions.search}
                        transparent={this.state.headerTransparent}
                    /> : null
                }

                <LazyloadScrollView
                    name="home"
                    onScroll={this.onScroll.bind(this)}
                    scrollEventThrottle={10}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.onRefresh.bind(this)}
                        />
                    }
                >

                    <Swiper host="home" autoplay list={DYconfig.home.banner} onPress={(data) => {
                        Actions.webViewPage(data);
                    } } />

                    <IconList host="home" style={{ marginBottom: 10 }} tabs={DYconfig.home.category} onPress={(e) => {
                        Actions.list({ type: 'push' });
                    } } />

                    <Swiper host="home" height={120} list={DYconfig.home.advertisement} onPress={(data) => {
                        data = 'https://m.baidu.com';
                        Actions.webViewPage('https://m.baidu.com/');
                    } } />

                    <View
                        style={{ flex: 1, marginTop: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#f70' }}> - 正在直播 - </Text>
                    </View>

                    <ListView style={{ flex: 1 }} dataSource={this.state.dataSource} renderRow={(data) => {
                        return (<VideoPlayer source={require("../../broadchurch.mp4")} />);
                    } } />

                    <View
                        style={{ flex: 1, marginTop: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#f70' }}> - 直播预告 - </Text>
                    </View>

                    <ListView style={{ flex: 1 }} dataSource={this.state.dataSource} renderRow={(data) => {
                        return (<VideoPlayer source={{ uri: 'http://7xk3ee.media1.z0.glb.clouddn.com/yugao.mp4' }} />);
                    } } />

                </LazyloadScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 7,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        borderRadius: 3,
    },
    page: {
        flex: 1,
        height: 150,
        resizeMode: 'stretch'
    }
});


function mapStateToProps(state) {
    let test = state.HomeRD.get('test');
    let routerSceneKey = state.Routes.scene.sceneKey;
    return {
        test: test,
        routerSceneKey: routerSceneKey
    };
}

function mapDispatchToProps(dispatch) {
    return {
        homeTest: bindActionCreators(HomeAction.homeTest, dispatch),
    };
}


Home = connect(mapStateToProps, mapDispatchToProps)(Home)

export default Home;
