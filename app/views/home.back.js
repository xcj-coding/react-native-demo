/**
 * 1.基础第三方框架引入
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Platform, requireNativeComponent, DeviceEventEmitter, NativeModules, Modal, ListView, ScrollView, Image, Text, View, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';

/**
 * 2.第三方组件引入
 */
import ViewPager from 'react-native-viewpager';
import { Actions } from 'react-native-router-flux';
// import BarcodeScanner from 'react-native-barcode-scanner-universal';
import Camera from 'react-native-camera';

/**
 * 3.项目组件引入
 */
import {Header, SearchHeader, HomeViewItem, NoContent } from '../components/';
/**
 * 4.项目Action引入 || 配置文件引入 || 公用方法引入
 */
import * as HomeAction from '../actions/homeAction';

/**
 * 页面内使用常量
 */
const BANNER_IMGS = [
    { uri: 'https://img.alicdn.com/imgextra/i2/2406728216/TB22LVnkpXXXXcqXpXXXXXXXXXX_!!2406728216.jpg' },
    { uri: 'https://img.alicdn.com/imgextra/i2/2406728216/TB22LVnkpXXXXcqXpXXXXXXXXXX_!!2406728216.jpg' },
    { uri: 'https://img.alicdn.com/imgextra/i2/2406728216/TB22LVnkpXXXXcqXpXXXXXXXXXX_!!2406728216.jpg' },
    { uri: 'https://img.alicdn.com/imgextra/i2/2406728216/TB22LVnkpXXXXcqXpXXXXXXXXXX_!!2406728216.jpg' }
];

// 测试接入ios原生模块
let DYTestManager = NativeModules.DYTestManager;
DYTestManager.BBB('我想接入', '接入成功', (error, message) => {
    if (error) {
        console.log(error);
    } else {
        console.log("message:", message);
    }
});
let DYTestManagerConst = DYTestManager.YEAR;
console.log(DYTestManagerConst)
var subscription = DeviceEventEmitter.addListener(
    'EventReminder',
    (reminder) => console.log(reminder.name)
);
DeviceEventEmitter.emit('EventReminder', { name: '订阅' })
subscription.remove();
DeviceEventEmitter.emit('EventReminder', { name: '订阅' })
DeviceEventEmitter.emit('EventReminder', { name: '订阅' })
// module.exports = requireNativeComponent('RCTMap', null);
// import MapView from './mapView'
// 测试接入ios原生模块

/**
 * 页面类
 */
class Home extends Component {
    constructor(props, context) {
        super(props, context);

        // 用于构建DataSource对象  
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        // 实际的DataSources存放在state中  
        this.state = {
            dataSource: dataSource.cloneWithPages(BANNER_IMGS),
            isRefreshing: false,
            modalVisible: false,
            LOADINGTIP: false,
            code: "初始化"
        }
        console.log(this.props);
        this._show = this._show.bind(this);
    }
    homeTest(data) {
        this.props.homeTest(data)
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    _renderPage(data, pageID) {
        return (
            <Image source={data} style={styles.page} />
        );
    }
    goToDetail() {
        Actions.detail({ type: 'push' })
    }
    takePicture() {
        this.camera.capture()
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }
    _show(val) {
        this.setState({
            code: val.data
        })
    }
    render() {
        // <View style={{ flex: 1 }}>
        //             <MapView />
        //         </View>

        let scanArea = null;
        if (Platform.OS === 'ios') {
            scanArea = (
                <View style={styles.rectangleContainer}>
                    <View style={styles.rectangle} />
                </View>
            )
        }
        // <View>
        //     <Text style={[{ color: "red" }, { fontSize: 16 }]}>{this.state.code}</Text>
        //     <BarcodeScanner
        //         onBarCodeRead={(code) => this._show(code)}
        //         style={styles.camera}>
        //         {scanArea}
        //     </BarcodeScanner>
        // </View>
        // <View style={styles.container}>
        //     <Camera
        //         ref={(cam) => {
        //             this.camera = cam;
        //         } }
        //         style={styles.preview}
        //         aspect={Camera.constants.Aspect.fill}>
        //         <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        //     </Camera>
        // </View>
        return (
            <ScrollView style={{ flex: 1 }}>
                <Header
					rightIcon={true}
					rightIconAction={() => alert('开发中...')}
					title='斗鱼商城'
					/>
                <ViewPager
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true} />
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { alert("Modal has been closed.") } }
                    >
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>随便写写!</Text>
                            <Text>随便写写!</Text>
                            <Text>随便写写!</Text>

                            <TouchableHighlight onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            } }>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </Modal>
                <TouchableHighlight onPress={() => {
                    this.setModalVisible(true)
                } }>
                    <Text>Show Modal</Text>
                </TouchableHighlight>

                <TouchableOpacity onPress={() => { this.homeTest('传入一个数据流到home') } }>
                    <Text>Test reducer</Text>
                </TouchableOpacity>
                <Text>{this.props.test}</Text>

                <TouchableOpacity onPress={() => {
                    Actions.notFound({ type: 'push' })
                } }>
                    <Text>goto 404</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    Actions.detail()
                } }>
                    <Text>goto detail</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    Actions.error('不是我的错，姐')
                } }>
                    <Text>goto error</Text>
                </TouchableOpacity>
                <Text>1232131</Text>
                <Text>{this.props.routerSceneKey}</Text>

                <TouchableOpacity onPress={() => {
                    Actions.webViewPage('https://m.baidu.com/')
                } }>
                    <Text>goto webViewPage</Text>
                </TouchableOpacity>

                <HomeViewItem {...this.props} goToDetail={this.goToDetail} title="类别一" />
                <HomeViewItem {...this.props} goToDetail={this.goToDetail} title="类别二" />
                <HomeViewItem {...this.props} goToDetail={this.goToDetail} title="类别三" />

            </ScrollView>
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
