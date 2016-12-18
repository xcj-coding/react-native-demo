/**
 * 1.基础第三方框架引入
 */
import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import ArticleItem from '../components/articleItem';
import Header from '../components/header';

import config from '../common/DYconfig';
/**
 * 页面类
 */
class Best extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header leftType={'list'} middleType={'text'} middleValue={'推荐'} rightType={'notice'} />
                <ScrollView style={{flex:1}}>
                    <View style={{height: 70}} />
                    {
                        config.recomend.content.map((item, index) => {
                            return (
                                <ArticleItem
                                    key={index}
                                    item={item}
                                />
                            );
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}


export default Best;
