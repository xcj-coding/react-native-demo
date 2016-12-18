/**
 * 1.基础第三方框架引入
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Modal, ListView, ScrollView, Image, Text, View, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';

/**
 * 2.第三方组件引入
 */
import { Actions } from 'react-native-router-flux';

/**
 * 3.项目组件引入
 */
import { Header, Swiper, IconList, VideoPlayer } from '../components/';

/**
 * 4.项目Action引入 || 配置文件引入 || 公用方法引入
 */
import * as HomeAction from '../actions/homeAction';
import DYcommon from '../common/DYcommon';
import DYconfig from '../common/DYconfig';

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
            headerTransparent: true,
            dataSource: ds.cloneWithRows(DYconfig.home.videos)
        }
    }
    homeTest(data) {
        this.props.homeTest(data)
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    onScroll(e) {
        let transparent = false;
        if (e.nativeEvent.contentOffset.y > 135) {
            transparent = false;
        } else {
            transparent = true;
        }
        this.setState({
            headerTransparent: transparent,
        });
    }
    render() {
        var _scrollView: ScrollView;
        return (
            <View>
                <Header leftType={"qrcode"} rightType={"notice"} transparent={this.state.headerTransparent} />
                <ScrollView
                    onScroll ={this.onScroll.bind(this)}
                >
                    <Swiper list={DYconfig.home.banner} onPress={(data)=>{
                        Actions.webViewPage(data);
                    }} />

                    <IconList tabs={DYconfig.home.category} onPress={(e) => {
                        Actions.list({ type: 'push' });
                     } } />

                    <Swiper height={120} list={DYconfig.home.advertisement} onPress={(data)=>{
                        data = 'https://m.baidu.com';
                        Actions.webViewPage('https://m.baidu.com/');
                    }} />

                    <View style={{flex:1,marginTop:10,marginBottom:10,justifyContent:'center',alignItems: 'center'}}>
                        <Text style={{color:'#f70'}}> - 正在直播 - </Text>
                    </View>

                    <ListView style={{flex:1}} dataSource={this.state.dataSource} renderRow={(data) => {
                        return (<VideoPlayer style={{width:400, height: 100 }} source={{ uri: data }} />);
                    } } />

                    <View style={{flex:1,marginTop:10,marginBottom:10,justifyContent:'center',alignItems: 'center'}}>
                        <Text style={{color:'#f70'}}> - 直播预告 - </Text>
                    </View>

                    <ListView style={{flex:1}} dataSource={this.state.dataSource} renderRow={(data) => {
                        return (<VideoPlayer style={{width:400, height: 100 }} source={{ uri: data }} />);
                    } } />

                </ScrollView>
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
