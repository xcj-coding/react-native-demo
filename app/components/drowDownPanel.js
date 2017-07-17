import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import DYCommon from '../common/dyCommon';
import Icon from 'react-native-vector-icons/Ionicons';

export default class dropdownSource extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choices: Array.from({length: this.props.dropdownSource.list.length}, () => false),
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps !== undefined) {
            this.setState({
                choices: Array.from({length: this.props.dropdownSource.list.length}, () => false),
            });
        }
    }

    renderItem(val, index) {
        let icon;
        if(this.state.choices[index] == true) {
            icon = (<Icon name='ios-checkmark' size={30} color='#f00'/>);
        }
        return (
            <TouchableOpacity activeOpacity ={1} key={index} style={[styles.listItem, this.state.choices[index] == true ? styles.activeBtn: null] } onPress={() => {
                let isActive = !this.state.choices[index];
                let newArray = this.state.choices.slice();
                newArray[index] = isActive;
                this.setState({
                    choices: newArray
                });
            }}>
                <Text style={ this.state.choices[index] == true ? {color: '#f00'}: {}}>{val.name}</Text>
                {icon}
            </TouchableOpacity>
        )
    }

    reset() {
        this.setState({
            choices: Array.from({length: this.props.dropdownSource.list.length}, () => false)
        });
    }

    confirm() {
        let valArr = [];
        this.state.choices.forEach((val, index) => {
            if(val === true) {
                valArr.push(this.props.dropdownSource.list[index]);
                return index;
            }
        });
        this.props.postData(valArr);
    }

    render() {
        const {height, list, top, left} = {...this.props.dropdownSource};
        const sl = {
            height: DYCommon.window.height - top,
            top: top
        };

        const items = list.map((val, index) => {
            return this.renderItem(val, index);
        });

        return (
            <View style={[styles.menu, sl]}>
                <ScrollView style={{backgroundColor: '#fff'}}>
                <View style={styles.box}>
                    {items}
                </View>
                </ScrollView>
                <View style={[styles.bottom, {top: 40* 6}]}>
                    <TouchableOpacity activeOpacity ={1} style={styles.bottomBtn} onPress={this.reset.bind(this)}>
                        <Text>重置</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity ={1} style={[styles.bottomBtn, styles.bottomRed]} onPress={this.confirm.bind(this)}>
                        <Text style={{color: '#fff'}}>确定</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menu: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        right: 0,
        bottom: 0,
        top: 0,
        width: DYCommon.window.width,
        borderTopWidth: 1,
        borderTopColor: '#000',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        zIndex: 10000
    },
    box: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        width: DYCommon.window.window,
        height: 240
    },
    listItem: {
        width: DYCommon.window.width / 2,
        paddingLeft: 10,
        paddingRight: 10,
        height: 40,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bottom: {
        position: 'absolute',
        right: 0,
        width: DYCommon.window.width,
        height: 50,
        bottom: 0,
        flexDirection: 'row'
    },
    bottomBtn: {
        width: .5*DYCommon.window.width,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#fff'
    },
    bottomRed: {
        backgroundColor: '#f00'
    }
});
