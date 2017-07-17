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
import CacheImage from '../components/cacheImage';
/**
 * 4.项目Action引入 || 配置文件引入 || 公用方法引入
 */
import * as ClassifyAction from '../actions/classifyAction';
import DYcommon from '../common/dyCommon';

/**
 * 页面内使用常量
 */
const classify_Nav_Array = [
    {
        typeName: '热门推荐',
        typeId: 1
    },
    {
        typeName: '潮流女装',
        typeId: 2
    },
    {
        typeName: '品牌男装',
        typeId: 3
    },
    {
        typeName: '个护化妆',
        typeId: 4
    },
    {
        typeName: '家用电器',
        typeId: 5
    },
    {
        typeName: '电脑办公',
        typeId: 6
    },
    {
        typeName: '手机数码',
        typeId: 7
    },
    {
        typeName: '母婴童装',
        typeId: 8
    },
    {
        typeName: '图书',
        typeId: 9
    },
    {
        typeName: '家居家纺',
        typeId: 10
    },
    {
        typeName: '居家生活',
        typeId: 11
    },
    {
        typeName: '家具建材',
        typeId: 12
    },
    {
        typeName: '食品生鲜',
        typeId: 13
    },
    {
        typeName: '酒水饮料',
        typeId: 14
    },
    {
        typeName: '运动户外',
        typeId: 15
    },
    {
        typeName: '鞋靴箱包',
        typeId: 16
    },
    {
        typeName: '奢品礼品',
        typeId: 17
    },
    {
        typeName: '钟表珠宝',
        typeId: 18
    },
    {
        typeName: '玩具乐器',
        typeId: 19
    },
    {
        typeName: '内衣配饰',
        typeId: 20
    },
    {
        typeName: '汽车用品',
        typeId: 21
    },
    {
        typeName: '音像制品',
        typeId: 22
    },
    {
        typeName: '医药保健',
        typeId: 23
    },
    {
        typeName: '计生情趣',
        typeId: 24
    },
    {
        typeName: '全球购',
        typeId: 25
    },
    {
        typeName: '京东金融',
        typeId: 26
    },
    {
        typeName: '生活旅行',
        typeId: 27
    },
    {
        typeName: '宠物衣资',
        typeId: 28
    },
];
const classify_Home_Cont = {
    type: 1,
    banner: [
        {
            img: 'http://m.360buyimg.com/mobilecms/s528x180_jfs/t3961/249/486652441/45749/d4a117f2/5850fc32Nd93f0c66.jpg',
            name: '热门推广产品1',
            imgLink: 'https://www.baidu.com'
        },
        {
            img: 'http://m.360buyimg.com/mobilecms/s528x180_jfs/t3961/249/486652441/45749/d4a117f2/5850fc32Nd93f0c66.jpg',
            name: '热门推广产品2',
            imgLink: 'http://www.qq.com'
        },
        {
            img: 'http://m.360buyimg.com/mobilecms/s528x180_jfs/t3961/249/486652441/45749/d4a117f2/5850fc32Nd93f0c66.jpg',
            name: '热门推广产品3',
            imgLink: 'https://www.baidu.com'
        },
        {
            img: 'http://m.360buyimg.com/mobilecms/s528x180_jfs/t3961/249/486652441/45749/d4a117f2/5850fc32Nd93f0c66.jpg',
            name: '热门推广产品4',
            imgLink: 'https://www.baidu.com'
        },
    ],
    ItmeCont: [
        {
            title: '专场推荐',
            rankingLink: 'https://www.baidu.com',
            ItmeContList: [
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t2782/149/1998822772/17899/b85cc0f3/57550c12Nba029c3e.png',
                    name: '手机'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t340/186/1520019972/4535/fc9624f9/543c8f8aN9eab4fa0.jpg',
                    name: '笔记本'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t2893/176/1045856721/6331/21075b96/5732d235N90395e10.jpg',
                    name: '空调'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t310/345/1515921787/4739/6bd8f7e4/543cd113Nb6638c8e.jpg',
                    name: '收纳用品'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t331/362/1515835677/3566/461716a8/543c8a67Ne129f018.jpg',
                    name: '炒锅'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t913/290/173123020/11082/e3dd8c46/5507c2e4N78755364.jpg',
                    name: '啤酒'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t3760/77/1369184438/8220/3db891c4/5822ca20N75fef3c0.jpg',
                    name: '时尚羽绒'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t3613/116/686810053/18767/f6c431ac/5811b9b1N1f44e702.jpg',
                    name: '吸顶灯'
                }
            ]
        },
        {
            title: '热门分类',
            rankingLink: 'https://www.baidu.com',
            ItmeContList: [
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t2782/149/1998822772/17899/b85cc0f3/57550c12Nba029c3e.png',
                    name: '手机'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t340/186/1520019972/4535/fc9624f9/543c8f8aN9eab4fa0.jpg',
                    name: '笔记本'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t2893/176/1045856721/6331/21075b96/5732d235N90395e10.jpg',
                    name: '空调'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t310/345/1515921787/4739/6bd8f7e4/543cd113Nb6638c8e.jpg',
                    name: '收纳用品'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t331/362/1515835677/3566/461716a8/543c8a67Ne129f018.jpg',
                    name: '炒锅'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t913/290/173123020/11082/e3dd8c46/5507c2e4N78755364.jpg',
                    name: '啤酒'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t3760/77/1369184438/8220/3db891c4/5822ca20N75fef3c0.jpg',
                    name: '时尚羽绒'
                },
                {
                    img: 'http://m.360buyimg.com/mobile/s100x100_jfs/t3613/116/686810053/18767/f6c431ac/5811b9b1N1f44e702.jpg',
                    name: '吸顶灯'
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
                <Text>分类类型id：{this.props.typeId}</Text>

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
                                    <Text onPress={() => { Actions.rankings() } } style={{ flex: 1, textAlign: 'right', fontSize: 12, color: '#848689' }}>排行榜></Text>
                                </View>
                                <View style={{ backgroundColor: '#fff' }}>
                                    {
                                        <ListView
                                            contentContainerStyle={styles.list}
                                            dataSource={dataSource}
                                            renderRow={(rowData) => {
                                                return (
                                                    <TouchableOpacity style={styles.row} onPress={() => { alert(rowData.name) } }>
                                                        <CacheImage cacheNeed style={{ width: 60, height: 60 }} source={{ uri: rowData.img }} />
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
        this.state = {
            initTypeId: 1
        }
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
                <Header leftType="qrcode" rightType="notice" middleValue="请输入搜索内容" middleCallback={Actions.search} />

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