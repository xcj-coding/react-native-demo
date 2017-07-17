import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, ListView, Dimensions} from 'react-native';

import Header from '../components/header';
import FilterNav from '../components/filterNav';
import {Actions} from 'react-native-router-flux';
import Drawer from 'react-native-drawer';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

export default class Other extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(["http://7xk3ee.media1.z0.glb.clouddn.com/yugao.mp4", "http://7xk3ee.media1.z0.glb.clouddn.com/yugao.mp4"])
        };

        this.tabBars = [
            {
                'name': '面部护理',
                'children': []
            },
            {
                'name': '卸妆',
                'children': []
            },
            {
                'name': '洁面',
                'children': []
            },
            {
                'name': '爽肤水',
                'chilren': []
            },
            {
                'name': '彪彪',
                'children': []
            },
            {
                'name': '永利',
                'children': []
            },
            {
                'name': '长江',
                'children': []
            }
        ]
    }

    render() {
        return (
            <Drawer
                ref={(ref) => {this.drawer = ref;}}
                type="overlay"
                content={<View style={styles.container}><Text>drawer</Text></View>}
                tapToClose={true}
                styles={drawerStyles}
            >
                <View style={{flex: 1}}>
                    <Header leftType={"list"} rightType={"notice"} title='斗鱼商城'/>
                    <FilterNav drawer={this.drawer}
                               style={{position: 'relative', height: 100, backgroundColor: '#000'}}/>
                    <View style={{flex: 1}}>
                        <Text>test</Text>
                    </View>
                </View>
            </Drawer>
        );
    }
}

const drawerStyles = {
    drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {
        backgroundColor: 'transparent', alignItems: 'center',
        justifyContent: 'center',
    },
}

const styles = StyleSheet.create({
    backgroundVideo: {
        flex: 1,
        width: 300,
        height: 200
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
})
