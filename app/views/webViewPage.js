/**
 * 1.基础第三方框架引入
 */
import React, { Component } from 'react';
import { WebView, Text, View, Image, StyleSheet } from 'react-native';
/**
 * 2.第三方组件引入
 */
import { Actions } from 'react-native-router-flux';
/**
 * 3.项目组件引入
 */
import { Header, Share } from '../components/';
/**
 * 4.项目Action引入 || 配置文件引入 || 公用方法引入
 */
import DYcommon from '../common/dyCommon';

/**
 * 页面类
 */
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
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Header leftType={"back"} middleType={'text'} middleValue={this.props.title} rightType={"share"} 
                    rightCallback = {this.changeShareVisible.bind(this)}
                />

                <WebView
                    ref={'webview'}
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={{ uri: this.props.data }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    onNavigationStateChange={this.onNavigationStateChange}
                    onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                    startInLoadingState={true}
                    scalesPageToFit={true}
                    />
                <Share 
					visible = {this.state.shareVisible}
					changeShareVisible = {this.changeShareVisible.bind(this)}
				 />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    webView: {
        marginTop: 60,
        width: DYcommon.window.width,
        height: DYcommon.window.height - 64 - 40,
    },

    container: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopColor: '#ccc',
        borderTopWidth: 0.5,
    },

    toolBarItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    itemTitle: {
        marginLeft: 5,
        fontSize: 12,
        color: 'gray'
    },

    centerLine: {
        position: 'absolute',
        height: 20,
        width: 0.5,
        top: 10,
        right: DYcommon.window.width * 0.5,
        backgroundColor: '#ccc'
    }
});


export default Detail;

