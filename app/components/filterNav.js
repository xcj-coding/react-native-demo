import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import FilterTab1 from './filterTab1';
import FilterTab2 from './filterTab2';
import FilterTab3 from './filterTab3';
import FilterTab4 from './filterTab4';
import FilterTab5 from './filterTab5';
import Mock from '../mock';

import Icon from 'react-native-vector-icons/Ionicons';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const itemWidth = W / 4;

class FilterNav extends Component {
    constructor(props) {
        super(props);
        this.tabs = [
            {
                name: '综合',
                type: 3,
                id: 1001,
                choose: 3001,
                list: [
                    {
                        name: '综合排序',
                        id: 3001
                    },
                    {
                        name: '新品优先',
                        id: 3002
                    },
                    {
                        name: '评论从高到低',
                        id: 3003
                    }
                ]
            },
            {
                selected: true,
                name: '销量', 
                type: 1,
                id: 1002
            },
            {
                id: 1003,
                name: '价格',
                type: 2,
            },
            {
                id: 1004,
                name: '筛选',
                type: 4,

            }
        ];
        this.staticTabs = Mock.listFilter;

        this.state = {
            tabsActive: this.tabs.map((val) => {return val.selected}),
            staticTabsActive: this.staticTabs.map((val) => {return val.selected})
        };
    }

    renderItem(val, active) {
        let content;
        let textActive = active ? {color: '#fff'} : {};
        let textNotActive = active ? {} : {color: '#fff'};
        switch (val.type) {
            // 普通选择按钮
            case 1:
            content =  (<Text style={textActive} >{val.name}</Text>);
            break;
            // 升降序按钮
            case 2:
            content = (
                <View style={{flexDirection: 'row'}}>
                    <View style={{backgroundColor: '#f70', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={textActive} >{val.name}</Text>
                    </View>
                    <View>
                        <Icon name ='md-arrow-dropup' color={textActive.color}/>
                        <Icon name ='md-arrow-dropdown' color={textNotActive.color}/>
                    </View>
                </View>
            );
            break;
            // 综合按钮
            case 3:
            content = (
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Text>{val.name}</Text>
                    </View>
                    <View>
                        <Icon name='md-arrow-dropdown'/>
                    </View>
                </View>
            )
            break;
        }
        return content;
    }

    getTabsParams(isActive, index, val) {
        let params = {};
        switch(val) {
            case 1:
            params.select = isActive;
            break;
            case 2:
            // params.select = isActive;
            params.filter = this.state.tabsActive[index].params.filter == 'highToLow' ? 'lowTohigh' : 'highToLow';
            break;
            case 3:
            break;
        }
        return params;
    }

    renderTabs() {
        let html = this.tabs.map((val, index) => {

            let active = index == 0 ? true : false;

            switch(val.type) {
                case 1:
                return (
                    <FilterTab1 key={index} selected = {this.state.tabsActive[index]} index = {index} value={val} changeTabState= {(index) => {
                        // console.log(index);
                        let newArray = this.state.tabsActive.map((val, i) => { return (i === index ? true :false); });
                        this.setState({
                            tabsActive: newArray
                        });
                    }}
                    postData = {(params) => { alert(params.id)}}
                    />
                );
                break;
                case 2:
                return (
                    <FilterTab2 key={index} selected = {this.state.tabsActive[index]} index = {index} value={val} changeTabState= {(index) => {
                        // console.log(index);
                        let newArray = this.state.tabsActive.map((val, i) => { return (i === index ? true :false); });
                        this.setState({
                            tabsActive: newArray
                        });
                    }}
                    postData = {(params) => { alert(params.filter)}}
                    />
                );
                break;
                case 3:
                return (
                    <FilterTab3 key={index} selected = {this.state.tabsActive[index]} index = {index} value={val} changeTabState= {(index) => {
                        // console.log(index);
                        let newArray = this.state.tabsActive.map((val, i) => { return (i === index ? true :false); });
                        this.setState({
                            tabsActive: newArray
                        });
                    }}
                    postData = {(params) => { alert(params.filter)}}
                    />
                );

                break;
                case 4:
                return (
                    <FilterTab4 key={index} openDrawer={this.props.openDrawer.bind(this)} drawer={this.props.drawer} selected = {this.state.tabsActive[index]} index = {index} value={val} changeTabState= {(index) => {
                        // console.log(index);
                        let newArray = this.state.tabsActive.map((val, i) => { return (i === index ? true :false); });
                        this.setState({
                            tabsActive: newArray
                        });
                    }}
                    postData = {(params) => { alert(params.id)}}
                    />
                );
                break;
            }
        });

        return html;
    }

    renderStaticTabs() {
        let html = this.staticTabs.map((val, index) => {
            let active = this.state.staticTabsActive[index] ? {backgroundColor: '#ff0'} : {};
            let textActive = this.state.staticTabsActive[index] ? { color: '#f00'} : {};
            switch(val.type) {
                case 1:
                return (
                    <FilterTab1 key={index} selected = {this.state.staticTabsActive[index]} index = {index} value={val} changeTabState= {(index) => {
                        // console.log(index);
                        let newArray = this.state.staticTabsActive.map((val, i) => { return (i === index ? true :false); });
                        this.setState({
                            staticTabsActive: newArray
                        });
                    }}
                    postData = {(params) => { alert(params.id)}}
                    />
                );
                break;
                case 5:
                return (
                    <FilterTab5 showPanel = {this.props.showPanel} key={index} selected = {this.state.staticTabsActive[index]} index = {index} value={val} changeTabState= {(index) => {
                        // console.log(index);
                        let newArray = this.state.staticTabsActive.map((val, i) => { return (i === index ? true :false); });
                        this.setState({
                            staticTabsActive: newArray
                        });
                    }}
                    postData = {(params) => { alert(params)}}
                    />
                );
                break;
            }
        });

        return html;
    }

    render() {
        let content1 = this.renderTabs();
        let content2 = this.renderStaticTabs();

        return (
            
            <View style={styles.container}>
                <View style={[styles.row,{position: 'relative', zIndex:1, borderBottomColor: '#ccc', borderBottomWidth: 1}]}>
                    {content1}
                </View>
                <View style={[styles.row, {position: 'relative', zIndex:0, borderBottomColor: '#ccc', borderBottomWidth: 1}]}>
                    {content2}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        position: 'absolute',
        top: 60,
        zIndex: 9999,
    },
    row: {
        flexDirection: 'row',
        height: 50,
    },
    item: {
        width: itemWidth - 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        backgroundColor: '#f00'
    }
});

export default FilterNav;
