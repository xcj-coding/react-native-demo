import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, AlertIOS, TouchableOpacity } from 'react-native';

import Video from 'react-native-video';

export default class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paused: this.props.paused ? this.props.paused : true
        }
    }

    // onLoad() {
    //     alert(1);
    //     debugger;
    //     if (this.player) {
    //         debugger;
    //         this.player.presentFullscreenPlayer();
    //         this.player.seek(0);
    //     }
    // }
    // onLoadStart() {
    //     console.log('load start');
    // }
    // onEnd(){
    //     this.setState({paused: true});
    // }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={[styles.backgroundVideo]}
                    onPress={() => {
                        this.setState({
                            paused: !this.state.paused
                        })
                    } }>
                    <View style={[{ zIndex: 100, flex: 1, justifyContent: 'center', alignItems: 'center' }, this.props.style]}>
                        {this.state.paused ? <Image style={{ width: 40, height: 40 }} source={require('../../res/play.png')} /> : null}
                    </View>
                    
                    <Video
                        ref={(_video) => { this.player = _video; } }
                        style={[styles.backgroundVideo]}

                        // 播放速率x1,x2,x3
                        rate={this.props.rate ? this.props.rate : 1.0}
                        // 声音倍数x1,x2,x3
                        volume={this.props.volume ? this.props.volume : 1.0}
                        // 视频源
                        source={this.props.source}
                        // 视屏cover,contain
                        resizeMode={this.props.resizeMode || 'cover'}
                        // 重复播放
                        repeat={this.props.repeat ? this.props.repeat : true}
                        // 暂停
                        paused={this.state.paused}
                        // 缩放
                        controls={false}

                        onLoadStart={this.props.onLoadStart}
                        onLoad={this.props.onLoad}
                        onProgress={this.props.onProgress}
                        onEnd={this.props.onEnd ? this.props.onEnd : () => { AlertIOS.alert('Done!') } }
                        onError={this.props.onError}
                        />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        height: 200
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'black'
    },
});
