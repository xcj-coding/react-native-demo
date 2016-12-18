/**
 * 1.基础第三方框架引入
 */
import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import ListItem from '../components/listItem';
import Header from '../components/header';

import config from '../common/DYconfig';
/**
 * 页面类
 */
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listType: 1,
        };
    }

    changeListType() {
        this.setState({
            listType: this.state.listType === 1 ? 2 : 1,
        });
    }

    render() {
        let list = [];
        if (this.state.listType === 1) {
            list = config.list.map((item, index) => {
                return (
                    <ListItem
                        key={index}
                        showType = {this.state.listType}
                        firstItem = {item}
                    />
                );
            });
        } else {
            for (let i = 0; i < config.list.length / 2; i++) {
                if (2 * i + 1 < config.list.length) {
                    list.push(
                        <ListItem
                            key={i}
                            showType = {this.state.listType}
                            firstItem = {config.list[2 * i]}
                            secondItem = {config.list[2 * i + 1]}
                        />
                    );
                } else {
                    list.push(
                        <ListItem
                            key={i}
                            showType = {this.state.listType}
                            firstItem = {config.list[2 * i]}
                        />
                    );
                }
            }
        }
        return (
            <View style={{flex: 1}}>
                <Header leftType={"back"} rightType={'list-' + this.state.listType} rightCallback={this.changeListType.bind(this)} title='斗鱼商城' />
                <ScrollView style={{flex:1}}>
                    <View style={{height: 10, marginTop: 70,}} />
                    {list}
                </ScrollView>
            </View>
        )
    }
}


export default List;
