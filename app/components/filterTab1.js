import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const itemWidth = W / 4;

class FilterTab1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected
        }
    }

    render() {
        let active = this.props.selected ? {} : {};
        let textActive = this.props.selected ?   {color: '#f00'} : {color: '#000'} ;
        return (
            <TouchableOpacity  style={[styles.item, active]} onPress = {() => {
                this.props.changeTabState && this.props.changeTabState(this.props.index);
                let params = {id: this.props.value.id};
                this.props.postData(params);
            }}>
                <Text style={textActive} >{this.props.value.name}</Text>
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
    }
});


export default FilterTab1;