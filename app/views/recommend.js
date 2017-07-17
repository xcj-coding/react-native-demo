/**
 * 1.基础第三方框架引入
 */
import React, {Component} from 'react';
import {ScrollView, ListView, View, RefreshControl, RecyclerViewBackedScrollView, Image, Text, Alert, StyleSheet} from 'react-native';

import {LazyloadListView} from 'react-native-lazyload';

import ArticleItem from '../components/articleItem';
import Header from '../components/header';
import Indicator from '../components/indicator';

import RNFS, { DocumentDirectoryPath } from 'react-native-fs';

// RNFS.readDir(DocumentDirectoryPath)
//     .then((result) => {
//         console.log('GOT RESULT', result);
//     })
//
// RNFS.unlink(DocumentDirectoryPath + '/m.360buyimg.com/')
//     .then(() => {
//         console.log('FILE DELETED');
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });
//
// RNFS.unlink(DocumentDirectoryPath + '/img.alicdn.com/')
//     .then(() => {
//         console.log('FILE DELETED');
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });


import config from '../common/dyConfig';
import common from '../common/dyCommon';

const PAGESIZE = 6; // 假定每个分页为 **6**
/**
 * 页面类
 */

class Recommend extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.data = this.getData(0);
        this.state = {
            isRefreshing: false,
            loaded: 12,
            ds: ds.cloneWithRows(this.data),
            indexOffset: 1,
            showIndicator: false,
        };
        this.loading = true;
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    // 循环获取数组数据
    getData(start) {
        const data = config.recommend.content;
        const len = data.length;
        const step = start % len + 12;
        const end = step <= len ? step : len - step;
        return end < 0 ? data.slice(start % len).concat(data.slice(0, -end)) :  data.slice(start % len, end);
    }

    onRefresh() {
        this.setState({isRefreshing: true});
        this.timer = setTimeout(() => {
            this.data = this.getData(this.state.loaded).concat(this.data);
            this.setState({
                loaded: this.state.loaded + 12,
                isRefreshing: false,
                ds: this.state.ds.cloneWithRows(this.data),
            });
        }, 1000);
    }

    onEndReached() {
        this.timer = setTimeout(() => {
            this.data = this.data.concat(this.getData(this.state.loaded));
            this.setState({
                loaded: this.state.loaded + 12,
                isRefreshing: false,
                ds: this.state.ds.cloneWithRows(this.data),
            });
        }, 1000);
    }

    onChangeVisibleRows(visibleRows, changedRows) {
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

    render() {
        return (
            <View style={{flex: 1}}>
                <Header leftType="list" middleType="text" middleValue="推荐" rightType="notice"/>

                <LazyloadListView
                    name="recommendList"
                    scrollRenderAheadDistance={500}
                    renderDistance={100}
                    stickyHeaderIndices={[]}
                    renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                    style={{overflow:'hidden', paddingTop: 10, marginTop: 60,}}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.onRefresh.bind(this)}
                        />
                    }
                    initialListSize={PAGESIZE / 2}
                    pageSize={PAGESIZE}
                    dataSource={this.state.ds}
                    renderRow={(rowData) => <ArticleItem item={rowData} />}
                    onEndReachedThreshold={500}
                    onEndReached={this.onEndReached.bind(this)}
                    renderFooter={()=><Text style={{width: common.window.width, textAlign: 'center', paddingVertical: 10,}}>数据加载中......</Text>}
                    onChangeVisibleRows={this.onChangeVisibleRows.bind(this)}
                    onMomentumScrollEnd={this.hideIndicator.bind(this)}
                    onScrollEndDrag={this.hideIndicator.bind(this)}
                />

                <Indicator
                    indexOffset={this.state.indexOffset}
                    counts={500}
                    show={this.state.showIndicator}
                />
            </View>
        )
    }
}

export default Recommend;
