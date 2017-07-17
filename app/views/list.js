import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ListView,
    RefreshControl,
    RecyclerViewBackedScrollView,
    Dimensions
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {LazyloadListView} from 'react-native-lazyload';

import config from '../common/dyConfig';

import Header from '../components/header';
import ListItem from '../components/listItem';
import Indicator from '../components/indicator';

import FilterNav from '../components/filterNav';
import Drawer from 'react-native-drawer';
import ControlPanel from '../components/controlPanel';
import DropDownPanel from '../components/drowDownPanel';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
const PAGESIZE = 6; // 假定每个分页为 **6** 个商品

export default class List extends Component {
    constructor(props) {
        super(props);
        this.data = this.getData(0);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            loaded: 12,
            ds: ds.cloneWithRows(this.data),
            drawer: {},
            listType: 1,
            dropdownSource: {},
            showDropDown: false,
            indexOffset: 1,
            showIndicator: false,
        };

        this.loading = true;

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
        ];
        this.choices = [
            {
                'title': '品牌',
                'list': ['三星 (SAMSUNG)', '华为 (HUAWEI)', 'Apple', '小米 (MI)', 'oppo', 'vivo' , '魅族 (MEIZU)', '中兴 (ZTE)' , '21KE']
            },
            {
                'title': '颜色',
                'list': [
                    '黑色',
                    '灰色',
                    '白色',
                    '粉色',
                    '红色',
                    '绿色',
                    '黄色',
                    '橙色',
                    '驼色'
                ]
            },
            {
                'title': '前置摄像头像素',
                'list': ['1600万及以上', '800万-1599万', '500万-799万', '200万-499万', '120万-199万', '120万以下', '无', '其他']
            },
            {
                'title': '后置摄像头像素',
                'list': ['后置双摄像头', '2000万及以下', '1200万-1999万', '500万-1199万', '500万以下', '无', '其他']
            },
            {
                'title': '屏幕尺寸',
                'list': ['5.6英寸及以上', '5.5-5.1英寸', '5.0-4.6英寸', '4.5-3.1英寸', '其他', '3.0英寸及以下']
            },
            {
                'title': '网络',
                'list': [ '移动4G/联通4G/电信4G', '移动4G', '联通4G', '电信4G', '双卡单4G', '双卡双4G', '双卡', '其他']
            },
            {
                'title': '热点',
                'list': ['以旧换新', '骁龙芯片', '双卡双待', '老人手机', '快速充电', '指纹识别', 'Type-C', 'VoLTE', '金属机身', '2K屏', '拍照神器', '支持NFC', '女性手机', '三防手机', '儿童手机', '合约机', '直板键盘', '非智能机', '翻盖', '其他', '后置双摄像头']
            },
            {
                'title': '系统',
                'list': [ '安卓 (Android)', '苹果 (IOS)', '微软 (Windows Mobile)', '无', '其他']
            },
            {
                'title': '机身内存',
                'list': [ '128GB', '64GB', '32GB', '16GB', '8GB', '8GB以下', '支持内存卡', '无', '其他']
            },
            {
                'title': '运行内存',
                'list': [ '6GB', '4GB', '3GB', '2GB', '无', '其他']
            },
            {
                'title': 'CPU核数',
                'list': [ '十核', '八核', '双四核', '四核', '双核', '单核', '', '其他']
            },
            {
                'title': '电池容量',
                'list': [ '1200mAh以下', '1200mAh-1999mAh以下', '2000mAh-2999mAh以下', '3000mAh-3999mAh以下', '4000mAh-5999mAh以下', '6000mAh及以上']
            }
        ]
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    changeListType() {
        this.setState({
            listType: this.state.listType === 1 ? 2 : 1,
        });
    }

    // 循环获取数组数据
    getData(start) {
        const data = config.list;
        const len = data.length;
        const step = start % len + 12;
        const end = step <= len ? step : len - step;
        return end < 0 ? data.slice(start % len).concat(data.slice(0, -end)) : data.slice(start % len, end);
    }

    onEndReached() {
        this.timer = setTimeout(() => {
            this.data = this.getData(this.state.loaded).concat(this.data);
            this.setState({
                loaded: this.state.loaded + 12,
                ds: this.state.ds.cloneWithRows(this.data),
            });
        }, 1000);
    }

    onChangeVisibleRows(visibleRows) {
        if (visibleRows.s1 === undefined) {
            return;
        }
        const visible = Object.keys(visibleRows.s1);
        const height = parseInt(visible[visible.length - 1]);
        if (this.loading) { // 初始化时不显示Indicator
            this.loading = false;
            return;
        }
        this.setState({
            showIndicator: true,
            indexOffset: parseInt(height / PAGESIZE) + 1,
        });
    }

    hideIndicator() {
        this.setState({
            showIndicator: false,
        });
    }

    openDrawer() {
        this.drawer.open();
        if (this.state.showDropDown) {
            this.setState({
                showDropDown: false
            });
        }
    }

    closeDrawer() {
        this.drawer.close();
    }

    showDropDown(opts) {
        this.setState({
            dropdownSource: {...opts},
            showDropDown: true
        });
    }

    renderDropDownPanel() {
        if (!this.state.showDropDown) return;
        return (
            <DropDownPanel dropdownSource={this.state.dropdownSource} postData={(data) => {
                this.setState({
                    showDropDown: false
                });
            }}/>
        );
    }

    render() {
        const dropDownPanel = this.renderDropDownPanel();

        return (
            <Drawer
                ref={(c) => {
                    this.drawer = c;
                }}
                content={<ControlPanel closeDrawer={() => {
                    this.drawer.close();
                }} choices={this.choices}/>}
                type="overlay"
                openDrawerOffset={0.2}
                tapToClose={true}
                styles={drawerStyles}
                side={'right'}
            >
                <View>
                    <Header
                        leftType="back"
                        rightType={'list-' + (this.state.listType === 1 ? 2 : 1)}
                        rightCallback={this.changeListType.bind(this)}
                        middleValue="手机"
                        middleCallback={Actions.search}
                    />

                    <FilterNav openDrawer={this.openDrawer.bind(this)} showPanel={this.showDropDown.bind(this)}
                               style={styles.filter}/>

                    <LazyloadListView
                        name="GoodsList"
                        scrollRenderAheadDistance={500}
                        renderDistance={100}
                        stickyHeaderIndices={[]}
                        renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                        key={'listType-' + this.state.listType}
                        style={[styles.list, {paddingTop: (this.state.listType === 1 ? 0 : 2)}]}
                        contentContainerStyle={this.state.listType !== 1 ? styles.content : {}}
                        initialListSize={PAGESIZE / 2}
                        pageSize={PAGESIZE}
                        dataSource={this.state.ds}
                        renderRow={(rowData) => <ListItem showType={this.state.listType} item={rowData} />}
                        onEndReachedThreshold={500}
                        onEndReached={this.onEndReached.bind(this)}
                        renderFooter={()=><Text style={{width: W, textAlign: 'center', paddingVertical: 10,}}>数据加载中......</Text>}
                        onChangeVisibleRows={this.onChangeVisibleRows.bind(this)}
                        onMomentumScrollEnd={this.hideIndicator.bind(this)}
                        onScrollEndDrag={this.hideIndicator.bind(this)}
                    />

                    <Indicator
                        indexOffset={this.state.indexOffset}
                        counts={500}
                        show={this.state.showIndicator}
                    />

                    {dropDownPanel}
                </View>
            </Drawer>
        )
    }
}

const drawerStyles = {
    drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {backgroundColor: 'transparent'},
};

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
    filter: {
        backgroundColor: '#fff'
    },
    list: {
        marginTop: 160,
        backgroundColor: '#eee'
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    }
});
