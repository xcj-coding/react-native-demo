import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    AlertIOS,
    TouchableOpacity,
} from 'react-native';

import Video from 'react-native-video';

export default class VideoPlayer extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            paused: this.props.paused ? this.props.paused : false
        }
    }

    onLoad() {
        console.log('xx');
        debugger;
        if(this.player) {
            debugger;
            this.player.presentFullscreenPlayer();
            this.player.seek(0);
        }
    }

    onLoadStart() {
        console.log('load start');
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
            <TouchableOpacity style={[styles.backgroundVideo]} onPress={() => {this.setState({
                paused: !this.state.paused
            })}}>
                <Video 
                    ref={(_video) => {this.player = _video;}}
                    style={[styles.backgroundVideo]}
                    source={this.props.source}
                    resizeMode={this.props.resizeMode || 'cover'}
                    repeat={this.props.repeat? this.props.repeat : true}
                    paused={this.state.paused }

                    onLoadStart = {this.onLoadStart}
                    onLoad = {this.onLoad}
                    onError = {this.props.onError}
                    onProgress = {this.props.onProgress}
                    onEnd = {this.props.onEnd}
                    controls = {true}
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
        backgroundColor: 'black',
      },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#f00'
    },
});
