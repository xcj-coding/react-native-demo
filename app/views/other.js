import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ListView,
    Dimensions
} from 'react-native';

import Swiper from '../components/swiper';
import IconList from '../components/iconList';
import Header from '../components/header';
import VideoPlayer from '../components/videoPlayer';
import ScrollTabView from '../components/scrollTabView';
import {Actions} from 'react-native-router-flux';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

export default class Other extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(["http://7xk3ee.media1.z0.glb.clouddn.com/yugao.mp4", "http://7xk3ee.media1.z0.glb.clouddn.com/yugao.mp4"])
        }

        this.swiper = [
            {
                img: 'https://staticlive.douyucdn.cn/upload/signs/201612131014528859.jpg',
            },
            {
                img: 'https://staticlive.douyucdn.cn/upload/signs/201612131035293782.jpg',
            },
            {
                img: 'https://staticlive.douyucdn.cn/upload/signs/201612131013335925.jpg',
            },
            {
                img: 'https://staticlive.douyucdn.cn/upload/signs/201612131035293782.jpg',
            },
            {
                img: 'https://staticlive.douyucdn.cn/upload/signs/201612131013335925.jpg',
            }
        ];
        this.icons = [
            {
                img: 'https://staticlive.douyucdn.cn/upload/game_cate/67b6c31daee46b0e9d9ec9d420721149.jpg',
                name: '天猫'
            },
            {
                img: 'https://staticlive.douyucdn.cn/upload/game_cate/67b6c31daee46b0e9d9ec9d420721149.jpg',
                name: '聚划算'
            },
            {
                img: 'https://staticlive.douyucdn.cn/upload/game_cate/67b6c31daee46b0e9d9ec9d420721149.jpg',
                name: '天猫国际'
            },
            {
                img: 'https://staticlive.douyucdn.cn/upload/game_cate/67b6c31daee46b0e9d9ec9d420721149.jpg',
                name: '外卖'
            },
            {
                img: 'https://staticlive.douyucdn.cn/upload/game_cate/67b6c31daee46b0e9d9ec9d420721149.jpg',
                name: '天猫超市'
            },
            {
                img: 'https://staticlive.douyucdn.cn/upload/game_cate/67b6c31daee46b0e9d9ec9d420721149.jpg',
                name: '充值中心',
            },
            {
                img: 'https://staticlive.douyucdn.cn/upload/game_cate/67b6c31daee46b0e9d9ec9d420721149.jpg',
                name: '飞猪旅行'
            },
            {
                img: 'https://staticlive.douyucdn.cn/upload/game_cate/67b6c31daee46b0e9d9ec9d420721149.jpg',
                name: '领金币'
            },
            {
                img: 'https://staticlive.douyucdn.cn/upload/game_cate/67b6c31daee46b0e9d9ec9d420721149.jpg',
                name: '到家'
            },
            {
                img: 'https://staticlive.douyucdn.cn/upload/game_cate/67b6c31daee46b0e9d9ec9d420721149.jpg',
                name: 'test'
            },
            {
                img: 'https://staticlive.douyucdn.cn/upload/game_cate/67b6c31daee46b0e9d9ec9d420721149.jpg',
                name: '分类'
            }
        ];

        this.tabBars = [
            {
                'name': '面部护理',
                'children': []
            },
            {
                'name': '卸妆',
                'children': []
            },
            {
                'name': '洁面',
                'children': []
            },
            {
                'name': '爽肤水',
                'chilren': []
            },
            {
                'name': '彪彪',
                'children': []
            },
            {
                'name': '永利',
                'children': []
            },
            {
                'name': '长江',
                'children': []
            }
        ]
    }

    render() {
        let uri = 'broadchurch';
        let remote_uri = 'http://7xk3ee.media1.z0.glb.clouddn.com/yugao.mp4';

        return (
            <View>
                <Header leftType={"list"} rightType={"notice"} title='斗鱼商城' />
                <ScrollView>
                    <ScrollTabView
                        tabs = {this.tabBars}
                    >
                    </ScrollTabView>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {
        flex: 1,
        width: 300,
        height: 200
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      },
})