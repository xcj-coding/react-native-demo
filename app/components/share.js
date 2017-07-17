import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    Image,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

import DYconfig from '../common/dyConfig';

class Icon extends Component {
    constructor(props) {
        super(props);
    }

    toShare(name) {
        alert('分享到'+ name);
    }

    render() {
        return (
            <TouchableOpacity activeOpacity ={0.5} style={styles.view} underlayColor = {'#eee'} onPress = {this.toShare.bind(this, this.props.name)} >
                <Image 
                style={styles.image}
                source={this.props.url}
                />
                <Text>{this.props.name}</Text>
            </TouchableOpacity>
        )
    }
}

export default class Share extends Component {
    constructor(props) {
        super(props);
        this.configs = [
            {
                name: '微信',
                url: DYconfig.share.wx
            },
            {
                name: '朋友圈',
                url: DYconfig.share.friends
            },
            {
                name: 'QQ',
                url: DYconfig.share.qq
            },
            {
                name: 'QQ空间',
                url: DYconfig.share.qqzone
            },
            {
                name: '微博',
                url: DYconfig.share.weibo
            },
            {
                name: '复制链接',
                url: DYconfig.share.copy
            },
            {
                name: '更多',
                url: DYconfig.share.more
            }
        ];
    }

    render() {
        return (
            <Modal
            visible = {this.props.visible}
            transparent = {true}
            animationType = 'slide'
            >
            <TouchableOpacity style={styles.overlay} onPress = {this.props.changeShareVisible }>
            </TouchableOpacity>
            <View style={styles.wrapper}>
                <View style={styles.head}>
                    <Text>—— —— —— —— 分享到 —— —— —— ——</Text>
                </View>
                <View style={styles.container}>
                    {
                        this.configs.map((val, i) => {
                            return (
                                <Icon key = {i} url={val.url} name = {val.name} />  
                            );
                        })
                    }
                </View>
                <TouchableHighlight underlayColor = {'#eee'} style={styles.cancel} onPress = {this.props.changeShareVisible }>
                    <Text>取消</Text>
                </TouchableHighlight>
            </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1
    },
    wrapper: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/3 + 30,
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(255,255,255, 0.95)',
        paddingLeft: 10,
        paddingRight: 10
    },
    container: {
        justifyContent: 'flex-start',

        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginTop: 10
    },
    view: {
        width: Dimensions.get('window').width /4 - 5,
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: 10
    },
    head: {
        height: 40,
        width: Dimensions.get('window').width - 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancel: {
        height: 40,
        borderTopWidth:1,
        borderTopColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 48,
        height: 48,
        marginBottom: 5
    }
});
