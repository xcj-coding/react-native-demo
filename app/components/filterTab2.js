import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const itemWidth = W / 4;

class FilterTab2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected,
            filter: this.props.filter ? this.props.filter : 'highToLow'
        }
    }

    onPress() {
        this.setState({
            filter: this.state.filter === 'highToLow' ? 'lowToHigh' : 'highToLow'
        });
        let params = {
            id: this.props.value.id,
            filter: this.state.filter
        };
        this.props.changeTabState && this.props.changeTabState(this.props.index);
        this.props.postData(params);
    }

    render() {
        let active = this.props.selected ? {} : {};
        let textActive = this.props.selected ?   {color: '#f00'} : {color: '#000'} ;
        let textColors = [{color: '#000'} , {color: '#999'}] ;
        if(this.state.filter === 'lowToHigh') {
            let newOne = textColors[0];
            textColors[0] = textColors[1];
            textColors[1] = newOne;
        }
        return (
            <TouchableOpacity  style={[styles.item, active]} onPress = {this.onPress.bind(this)}>
                <View style={{backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={textActive}>{this.props.value.name}</Text>
                </View>
                <View>
                    <Icon name ='md-arrow-dropup' color={textColors[0].color}/>
                    <Icon name ='md-arrow-dropdown' color={textColors[1].color}/>
                </View>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f',
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
        flexDirection: 'row'
    }
});


export default FilterTab2;
