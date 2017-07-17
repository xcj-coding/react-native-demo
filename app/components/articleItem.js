import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import CacheImage from './cacheImage';

import common from '../common/dyCommon';

class ArticleItem extends Component {
    constructor(props) {
        super(props);
    }

    // 文章内容暂时跳转webView
    onPress(data, title) {
        Actions.webViewPage({data, title});
    }

    renderItem(item) {
        if (typeof item === 'undefined') {
            return;
        }
        const {articleId, title, summary, indexImage, authorName, authorPic, showTime, pageView} = item;
        // ListView ScrollView子组件必须有固定高度，一般style={{flex: 1}}
        return (
            <TouchableOpacity
                onPress={() => this.onPress('http://h5.m.jd.com/active/faxian/html/innerpage.html?id=' + articleId, title)}
                activeOpacity={0.6}
                style={style.container}
            >
                <View style={style.body}>
                    {/* 文章标题和简介 */}
                    <View style={style.text}>
                        <Text style={style.title} numberOfLines={2}>{title}</Text>
                        <Text style={style.summary} numberOfLines={3}>{summary}</Text>
                    </View>
                    {/* 文章海报 */}
                    <CacheImage
                        lazyNeed
                        host="recommendList"
                        style={style.image}
                        source={{uri: indexImage,}}
                    />
                </View>

                <View style={style.footer}>
                    {/* 文章作者信息 */}
                    <View style={style.author}>
                        <CacheImage
                            lazyNeed
                            host="recommendList"
                            style={style.authorPic}
                            source={{uri: authorPic,}}
                        />
                        <Text style={style.authorName}>{authorName}</Text>
                    </View>
                    {/* 文章发布时间 */}
                    <View style={style.time}>
                        <Text style={style.showTime}>{showTime}</Text>
                    </View>
                    {/* 文章浏览量 */}
                    <View style={style.view}>
                        <Text style={style.pageView}>{pageView}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        );
    }

    render() {
        const {theme, item} = this.props;
        return this.renderItem(item);
    }
}

ArticleItem.propTypes = {
    item: React.PropTypes.object,
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginBottom: 10,
    },
    body: {
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        flex: 1,
        width: common.window.width / 3,
        height: common.window.width / 3,
    },
    text: {
        flex: 2,
        justifyContent: 'space-around',
        marginLeft: 5,
        paddingRight: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    summary: {
        color: 'gray',
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
    },
    author: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
        paddingRight: 5,
    },
    authorPic: {
        width: 16,
        height: 16,
    },
    authorName: {
        color: 'gray',
        fontSize: 12,
        paddingLeft: 5,
    },
    time: {
        flex: 1,
        alignItems: 'center',
    },
    showTime: {
        color: 'gray',
        fontSize: 12,
        textAlign: 'left',
    },
    view: {
        flex: 1,
        alignItems: 'center',
    },
    pageView: {
        color: 'gray',
        fontSize: 12,
        textAlign: 'right',
    },
});

// 添加主题映射
const mapStateToProps = (state) => {
    return {theme: state.Theme};
};

export default connect(mapStateToProps)(ArticleItem);
