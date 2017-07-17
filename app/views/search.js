/**
 * 1.基础第三方框架引入
 */
import React, { Component } from 'react';
import { ScrollView, Text, View, Image, StyleSheet, TextInput } from 'react-native';
/**
 * 2.第三方组件引入
 */
import { Actions } from 'react-native-router-flux';
/**
 * 3.项目组件引入
 */
import { Header } from '../components/';
/**
 * 4.项目Action引入 || 配置文件引入 || 公用方法引入
 */
import DYcommon from '../common/dyCommon';

/**
 * 页面类
 */
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
        this.recent = [
            '锤子手机',
            'iPhone 7 plus',
            'MacBook Pro',
            '三只松鼠',
            '良品铺子',
            '波司登',
            '眼镜',
            '手机',
        ];
        this.recommend = [
            'Apple',
            '华为',
            '小米',
            '连衣裙',
            '羽绒服',
            '眼睛框',
            '木九十',
            '发发发',
        ];
        this.inputRecommend = [
            '第一个推荐的搜索结果',
            '第二个推荐的搜索结果',
            '第三个推荐的搜索结果',
            '第四个推荐的搜索结果',
            '第五个推荐的搜索结果',
            '第六个推荐的搜索结果',
            '第七个推荐的搜索结果',
            '第八个推荐的搜索结果',
        ];
    }

    search() {
        console.log('search');
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    style={{backgroundColor: 'transparent'}}
                    leftType="back"
                    middleType="input"
                    rightType="text"
                    rightValue="搜索"
                    rightCallBack={this.search.bind(this)}
                >
                    <TextInput
                        style={{height: 30, fontSize: 15, }}
                        autoFocus
                        returnKeyType="search"
                        placeholder="请输入搜索内容"
                        selectionColor="red"
                        value={this.state.search}
                        onChangeText={text => this.setState({search: text.trim()})}
                    />
                </Header>

                {
                    this.state.search === '' ? (
                        <ScrollView style={styles.body}>
                            <Text style={styles.textTitle}>最近搜索</Text>
                            <View style={styles.list}>
                                {this.recent.map((item, index) => <Text key={index} style={styles.textItem}>{item}</Text>)}
                            </View>

                            <Text style={styles.textTitle}>猜你想找</Text>
                            <View style={styles.list}>
                                {this.recommend.map((item, index) => <Text key={index} style={styles.textItem}>{item}</Text>)}
                            </View>
                        </ScrollView>
                    ) : (
                        <ScrollView style={styles.body}>
                            {this.inputRecommend.map((item, index) => (
                                <Text key={index} style={styles.inputRecommend}>{item}</Text>
                            ))}
                        </ScrollView>
                    )
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    body: {
        flex: 1,
        marginTop: 60,
    },
    textTitle: {
        margin: 10,
        color: 'gray'
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    textItem: {
        backgroundColor: '#eee',
        paddingHorizontal: 15,
        paddingVertical: 5,
        margin: 5,
    },
    inputRecommend: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
});


export default Search;

