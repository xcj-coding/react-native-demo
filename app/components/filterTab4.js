import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import Drawer from 'react-native-drawer';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const itemWidth = W / 4;

class Panel extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <View style={{backgroundColor:'#326945',flex: 1}}>
                <Text>Panel</Text>
            </View>
        )
    }
}

class FilterTab4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected,
            showDrawer: true
        }
    }

    renderDrawer() {
        let content;
        return content;
    }

    render() {
        let active = this.props.selected ? {} : {};
        let textActive = this.props.selected ? {color: '#f00'} : {color: '#000'};

        let content = this.renderDrawer();

        return (
            <TouchableOpacity  style={[styles.item, active]} onPress = {() => {
                this.props.changeTabState && this.props.changeTabState(this.props.index);
                let params = {id: this.props.value.id};

                this.props.openDrawer();
                // this.props.postData(params);
            }}>
                <Text style={textActive} >{this.props.value.name}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        height: 50,
    },
    item: {
        width: itemWidth - 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
});

export default FilterTab4;
