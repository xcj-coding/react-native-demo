import React, { Component } from 'react';
import { Animated, Image, StyleSheet, Text, View, AlertIOS, TouchableOpacity, CameraRoll } from 'react-native';

import { Actions } from 'react-native-router-flux';
import Camera from 'react-native-camera';

import { Header } from '../components/';

import DYcommon from '../common/dyCommon';


class CameraView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topValue: new Animated.Value(0),
            topV: 0
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            if (this.state.topV < 250) {
                this.setState({ topV: (this.state.topV + 2) })
            } else {
                this.setState({ topV: 0 })
            }
        }, 10)
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    onBarCodeRead(e) {
        Actions.cameraRes(e.data);
    }
    takePicture() {
        this.camera.capture()
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }
    getPicture() {
        Camera.constants.CaptureTarget.cameraRoll.getPhotos({ first: 4, groupTyps: 'All', assetType: 'Photos' }, (data) => {
            alert(data);
        }, () => {
            alert('错误');
        })
    }
    render() {
        return (
            <View>
                <Header leftType="back" middleType="text" middleValue="扫一扫" />

                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    } }
                    defaultTouchToFocus
                    mirrorImage={true}
                    onBarCodeRead={this.onBarCodeRead}
                    aspect="Stretch"
                    orientation="PortraitUpsideDown"
                    style={{ height: DYcommon.window.height, width: DYcommon.window.width }}
                    >
                    <View style={{ position: 'absolute', top: (DYcommon.window.height - 250) / 2 + 260, left: 0 }}>
                        <Text style={{ flex: 1, width: DYcommon.window.width, fontSize: 12, color: '#fff', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0)' }}>将二维码／条码放入框内，即可自动扫描</Text>
                    </View>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: DYcommon.window.width, height: (DYcommon.window.height - 250) / 2, backgroundColor: 'rgba(0,0,0,0.5)' }}></View>

                        <View style={{ width: DYcommon.window.width, height: 252, flex: 1, flexDirection: 'row', overflow: 'hidden' }}>
                            <View style={{ width: (DYcommon.window.width - 250) / 2, height: 252, backgroundColor: 'rgba(0,0,0,0.5)' }}></View>

                            <View style={{ width: 250, height: 250, borderWidth: 1, borderColor: '#fff', backgroundColor: 'rgba(255,255,255,0)' }}>
                                <View style={{ position: 'absolute', top: -1, left: -1, width: 20, height: 20, borderWidth: 2, borderColor: '#00ff00', borderRightWidth: 0, borderBottomWidth: 0 }}></View>
                                <View style={{ position: 'absolute', top: -1, right: -1, width: 20, height: 20, borderWidth: 2, borderColor: '#00ff00', borderLeftWidth: 0, borderBottomWidth: 0 }}></View>
                                <View style={{ position: 'absolute', bottom: -1, left: -1, width: 20, height: 20, borderWidth: 2, borderColor: '#00ff00', borderTopWidth: 0, borderRightWidth: 0 }}></View>
                                <View style={{ position: 'absolute', bottom: -1, right: -1, width: 20, height: 20, borderWidth: 2, borderColor: '#00ff00', borderTopWidth: 0, borderLeftWidth: 0 }}></View>

                                <Image style={{ width: 250, height: 2, position: 'absolute', left: 0, top: this.state.topV }} source={require('../../res/line.png')} />
                            </View>

                            <View style={{ width: (DYcommon.window.width - 250) / 2, height: 252, backgroundColor: 'rgba(0,0,0,0.5)' }}></View>
                        </View>

                        <View style={{ width: DYcommon.window.width, height: (DYcommon.window.height - 250) / 2, backgroundColor: 'rgba(0,0,0,0.5)' }}></View>
                    </View>

                </Camera>
            </View>
        )
    }
}

export default CameraView;