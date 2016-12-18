/**
 * 1.基础第三方框架引入
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Text, View, Image, ListView, ScrollView, StyleSheet, PixelRatio, TouchableOpacity } from 'react-native';
/**
 * 2.第三方组件引入
 */
import { Actions } from 'react-native-router-flux';
/**
 * 3.项目组件引入
 */
import { Header, Swiper, ClassifyNavListItem } from '../components/';
/**
 * 4.项目Action引入 || 配置文件引入 || 公用方法引入
 */
import * as ClassifyAction from '../actions/classifyAction';
import DYcommon from '../common/DYcommon';

/**
 * 页面内使用常量
 */
const classify_Nav_Array = [
    {
        typeName: '分类1',
        typeId: 1
    },
    {
        typeName: '分类2',
        typeId: 2
    },
    {
        typeName: '分类3',
        typeId: 3
    },
    {
        typeName: '分类4',
        typeId: 4
    },
    {
        typeName: '分类5',
        typeId: 5
    },
    {
        typeName: '分类6',
        typeId: 6
    },
    {
        typeName: '分类7',
        typeId: 7
    },
    {
        typeName: '分类8',
        typeId: 8
    },
    {
        typeName: '分类9',
        typeId: 9
    },
    {
        typeName: '分类10',
        typeId: 10
    },
    {
        typeName: '分类11',
        typeId: 11
    },
    {
        typeName: '分类12',
        typeId: 12
    },
    {
        typeName: '分类13',
        typeId: 13
    },
    {
        typeName: '分类14',
        typeId: 14
    },
];
const classify_Home_Cont = {
    type: 1,
    banner: [
        {
            img: 'http://m.360buyimg.com/mobilecms/s528x180_jfs/t3961/249/486652441/45749/d4a117f2/5850fc32Nd93f0c66.jpg',
            name: '唧唧歪歪',
            imgLink: 'https://www.baidu.com'
        },
        {
            img: 'http://m.360buyimg.com/mobilecms/s528x180_jfs/t3961/249/486652441/45749/d4a117f2/5850fc32Nd93f0c66.jpg',
            name: '唧唧歪歪',
            imgLink: 'http://www.qq.com'
        },
        {
            img: 'http://m.360buyimg.com/mobilecms/s528x180_jfs/t3961/249/486652441/45749/d4a117f2/5850fc32Nd93f0c66.jpg',
            name: '唧唧歪歪',
            imgLink: 'https://www.baidu.com'
        },
        {
            img: 'http://m.360buyimg.com/mobilecms/s528x180_jfs/t3961/249/486652441/45749/d4a117f2/5850fc32Nd93f0c66.jpg',
            name: '唧唧歪歪',
            imgLink: 'https://www.baidu.com'
        },
    ],
    ItmeCont: [
        {
            title: '热门xx',
            rankingLink: 'https://www.baidu.com',
            ItmeContList: [
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t2782/149/1998822772/17899/b85cc0f3/57550c12Nba029c3e.png',
                    name: 'xxooxxooxxooxxoo1'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t2782/149/1998822772/17899/b85cc0f3/57550c12Nba029c3e.png',
                    name: 'xxoo2'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t2782/149/1998822772/17899/b85cc0f3/57550c12Nba029c3e.png',
                    name: 'xxoo3'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t2782/149/1998822772/17899/b85cc0f3/57550c12Nba029c3e.png',
                    name: 'xxoo4'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t2782/149/1998822772/17899/b85cc0f3/57550c12Nba029c3e.png',
                    name: 'xxoo5'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t2782/149/1998822772/17899/b85cc0f3/57550c12Nba029c3e.png',
                    name: 'xxoo6'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t2782/149/1998822772/17899/b85cc0f3/57550c12Nba029c3e.png',
                    name: 'xxoo7'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t2782/149/1998822772/17899/b85cc0f3/57550c12Nba029c3e.png',
                    name: 'xxoo8'
                }
            ]
        }
    ]
}

/**
 * 页面类
 */
class ClassifyHomeCont extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Text>请求刷新{this.props.typeId}</Text>

                <Swiper width={DYcommon.window.width - 90} height={100} list={classify_Home_Cont.banner} onPress={(data) => {
                    Actions.webViewPage(data);
                } } />

                {
                    classify_Home_Cont.ItmeCont.map((item, i) => {
                        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                        let dataSource = ds.cloneWithRows(item.ItmeContList);

                        return (
                            <View key={i}>
                                <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, marginBottom: 10, marginRight: 5, }}>
                                    <Text style={{ flex: 4, fontWeight: 'bold', fontSize: 12, color: '#232326' }}>{item.title}</Text>
                                    <Text onPress={() => { alert(item.rankingLink) } } style={{ flex: 1, textAlign: 'right', fontSize: 12, color: '#848689' }}>排行榜></Text>
                                </View>
                                <View style={{ backgroundColor: '#fff' }}>
                                    {
                                        <ListView
                                            contentContainerStyle={styles.list}
                                            dataSource={dataSource}
                                            renderRow={(rowData) => {
                                                return (
                                                    <TouchableOpacity style={styles.row} onPress={() => { alert(rowData.name) } }>
                                                        <Image style={{ width: 60, height: 60 }} source={{ uri: rowData.img }} />
                                                        <Text numberOfLines={1} onPress={() => { alert(rowData.name) } }>{rowData.name}</Text>
                                                    </TouchableOpacity>
                                                )
                                            } }
                                            />
                                    }
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

class Classify extends Component {
    constructor(props) {
        super(props)
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataListViewTest: ds.cloneWithRows(classify_Nav_Array),
            initTypeId: 1
        }
        console.log(this.props)
    }
    classifyTest(data) {
        this.props.classifyTest(data)
    }
    selectFn(typeId) {
        this.setState({ initTypeId: typeId }, () => {
            console.log(this.state.initTypeId)
        })
    }
    render() {
        return (
            <View style={{ backgroundColor: '#f3f5f7' }}>
                <Header leftType={"qrcode"} rightType={"notice"} title='斗鱼商城' />
                <View style={{ flexDirection: "row", marginTop: 60, }}>
                    <ScrollView style={{ marginRight: 10, width: 70, height: DYcommon.window.height - 110, backgroundColor: '#fff' }}>
                        {
                            classify_Nav_Array.map((item, i) => {
                                return <ClassifyNavListItem key={i} selectFn={this.selectFn.bind(this)} initTypeId={this.state.initTypeId} typeId={item.typeId} typeName={item.typeName} />;
                            })
                        }
                    </ScrollView>
                    <ScrollView style={{ width: DYcommon.window.width - 90, height: DYcommon.window.height - 110 }}>
                        <ClassifyHomeCont typeId={this.state.initTypeId} />
                    </ScrollView>
                </View>
            </View>
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
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: DYcommon.window.width - 85
    },
    row: {
        justifyContent: 'center',
        width: (DYcommon.window.width - 85 - 30) / 3,
        height: 90,
        margin: 5,
        alignItems: 'center'
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
        classifyTest: bindActionCreators(ClassifyAction.classifyTest, dispatch)
    };
}


Classify = connect(mapStateToProps, mapDispatchToProps)(Classify)

export default Classify;