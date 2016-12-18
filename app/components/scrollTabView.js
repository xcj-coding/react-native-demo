import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

const WINDOW_WIDTH = Dimensions.get('window').width;


class ScrollTabView extends Component {
    constructor(props) {
        super(props);
        
    }

    measureTab(event:any, i:number, length:number):void {
        // var {x} = event.nativeEvent.layout;
        this._scrollView.scrollTo({x: i * ( WINDOW_WIDTH / length ) });
    }

    renderSecondaryTabs() {
        let content = [1,2,3,4,5,6,7].map((val) => {
            return (
                <View style={styles.container}>
                    <Text>{val}</Text>
                </View>);
            });
        return content;
    }

    render() {
        // debugger;
        let tabs = this.props.tabs.map((value) => {
            return value.name;
        });

        let content = this.renderSecondaryTabs();
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor="transparent"
                    translucent ={true}/>
                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar tabs={tabs} />}>
                    {content}
                </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabs: {
    flex: 1,
    flexDirection: 'row',
    height: 45 + 24,
    backgroundColor: '#fff'
    },

    tab: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    tabItem: {
    backgroundColor: '#FF7700',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45 + 24,
    marginVertical: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 0,
    paddingTop: 24
    },

  tabItemIndicator: {
    borderBottomWidth: 2,
    borderBottomColor: '#fff'
  }
});

export default ScrollTabView;
