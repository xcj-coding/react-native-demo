import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';

import common from '../common/DYcommon';

class ArticleItem extends Component {
    constructor(props) {
        super(props);
    }

    onPress(data, title) {
        Actions.webViewPage({data, title});
    }

    renderItem (item) {
        if(typeof item !== 'undefined') {
            const { articleId, title, summary, indexImage, authorName, authorPic, showTime, pageView } = item;
            return (
                <TouchableOpacity
                    onPress = {() => this.onPress('http://h5.m.jd.com/active/faxian/html/innerpage.html?id=' + articleId, title)}
                    activeOpacity = {0.6}
                >
                    <View style={style.container}>
                        <View style={style.body}>
                            <View style={style.text}>
                                <Text style={style.title} numberOfLines={2}>{title}</Text>
                                <Text style={style.summary} numberOfLines={2}>{summary}</Text>
                            </View>
                            <Image
                                style={style.image}
                                source={{uri: indexImage,}}
                            />
                        </View>
                        <View style={style.footer}>
                            <View style={style.author}>
                                <Image
                                    style={style.authorPic}
                                    source={{uri: authorPic,}}
                                />
                                <Text style={style.authorName}>{authorName}</Text>
                            </View>
                            <View style={style.time}>
                                <Text style={style.showTime}>{showTime}</Text>
                            </View>
                            <View style={style.view}>
                                <Text style={style.pageView}>{pageView}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }
    }

    render() {
        const { theme, item } = this.props;
        let view = this.renderItem(item);
        return view;
    }
}

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
        height: common.window.width  / 3,
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

const mapStateToProps = (state) => {
    return {theme: state.Theme};
};

export default connect(mapStateToProps)(ArticleItem);
