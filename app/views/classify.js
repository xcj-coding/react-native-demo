/**
 * 1.基础第三方框架引入
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Text, View, TouchableOpacity, ListView, ScrollView, StyleSheet, PixelRatio } from 'react-native';
/**
 * 2.第三方组件引入
 */
import { Actions } from 'react-native-router-flux';
/**
 * 3.项目组件引入
 */
import { SearchHeader, ListItem } from '../components/';
/**
 * 4.项目Action引入 || 配置文件引入 || 公用方法引入
 */
import * as ClassifyAction from '../actions/classifyAction';


/**
 * 页面内使用常量
 */
const ListView_Test_Array = ['商品1', '商品2', '商品3', '商品4'];

/**
 * 页面类
 */
class Classify extends Component {
    constructor(props) {
        super(props)
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataListViewTest: ds.cloneWithRows(ListView_Test_Array)
        }
    }
    classifyTest(data) {
        this.props.classifyTest(data)
    }
    render() {
        return (
            <ScrollView style={styles.flex}>
                <SearchHeader />

                <View style={styles.container}>
                    <View style={[styles.item, styles.center]}>
                        <Text numberOfLines={1}>
                            商品1商品1商品1商品1
						</Text>
                    </View>
                    <View style={[styles.item, styles.lineLeftRight]}>
                        <View style={[styles.center, styles.flex, styles.lineCenter]}>
                            <Text>商品2</Text>
                        </View>
                        <View style={[styles.center, styles.flex]}>
                            <Text>商品3</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={[styles.center, styles.flex, styles.lineCenter]}>
                            <Text>商品4</Text>
                        </View>
                        <View style={[styles.center, styles.flex]}>
                            <Text>商品5</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={() => { this.classifyTest('传入一个数据流到classify') } }>
                    <Text>Test reducer</Text>
                </TouchableOpacity>

                <Text>{this.props.test}</Text>

                <TouchableOpacity onPress={() => {
                    Actions.home()
                } }>
                    <Text>goto home</Text>
                </TouchableOpacity>

                <ListView
                    dataSource={this.state.dataListViewTest}
                    renderRow={(rowData) => {
                        return <ListItem testVal={rowData} />;
                    } }
                    />
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        height: 84,
        borderWidth: 1,
        flexDirection: 'row',
        borderRadius: 5,
        padding: 2,
        backgroundColor: '#ccc'
    },
    item: {
        flex: 1,
        height: 80,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex: {
        flex: 1
    },
    font: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    lineLeftRight: {
        borderLeftWidth: 1 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get(),
        borderColor: '#fff'
    },
    lineCenter: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#fff'
    }
})


function mapStateToProps(state) {
    let test = state.ClassifyRD.get('test');
    return {
        test: test
    };
}

function mapDispatchToProps(dispatch) {
    return {
        classifyTest: bindActionCreators(ClassifyAction.classifyTest, dispatch),
    };
}


Classify = connect(mapStateToProps, mapDispatchToProps)(Classify)

export default Classify;