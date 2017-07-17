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

class FilterTab5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected,
            pop: false,
            choices: Array.from({length: this.props.value.list.length}, () => false),
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.box.measure((x, y, w, h, pX, pY) => {
                this.setState({
                    btnOpts: {x, y, w, h, pX, pY},
                });
            });
        }, 0);
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
            choices: Array.from({length: this.props.value.list.length}, () => false),
        });
    }

    confirm() {
        this.setState({
            pop: !this.state.pop
        });
        let valArr = [];
        this.state.choices.forEach((val, index) => {
            console.log(val, index);
            if(val === true) {
                valArr.push(this.props.value.list[index]);
                return index;
            }
        });
        this.props.postData(valArr);
    }

    openPanel() {
        const opts = {
            height: H - this.state.btnOpts.h - this.state.btnOpts.pY,
            left: -this.state.btnOpts.x,
            top: this.state.btnOpts.h + this.state.btnOpts.pY,
            list: this.props.value.list,
        }
        this.props.showPanel(opts);
    }

    renderMenu() {
        if(!this.state.pop) return ;
        let content;
        
        let sl = {
            height: H - this.state.btnOpts.h - this.state.btnOpts.pY,
            left: -this.state.btnOpts.x,
            top: this.state.btnOpts.h
        };

        let items = this.props.value.list.map((val, index) => {
            return this.renderItem(val, index);
        });
        content = (
            <View style={[styles.menu, sl]}>
                {items}
                <View style={{position: 'relative', flex:1}}>
                    <View style={styles.bottom}>
                        <TouchableOpacity activeOpacity ={1} style={styles.bottomBtn} onPress={this.reset.bind(this)}>
                            <Text>重置</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity ={1} style={[styles.bottomBtn, styles.bottomRed]} onPress={this.confirm.bind(this)}>
                            <Text style={{color: '#fff'}}>确定</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
        return content;
    }

    render() {
        let active = this.props.selected ? {} : {};
        let textActive = this.props.selected ?   {color: '#f00'} : {color: '#000'} ;
        let menu = this.renderMenu();
        return (
            <TouchableOpacity activeOpacity ={1} ref={(ref) => { this.box = ref; }}  style={[styles.item, active]} onPress = {() => {
                this.props.changeTabState && this.props.changeTabState(this.props.index);
                let params = {id: this.props.value.id};
                this.setState({
                    pop: !this.state.pop
                });

                this.openPanel();
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
        backgroundColor: '#eee',
        borderRadius: 4
    },
    menu: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        right: 0,
        bottom: 0,
        top: 0,
        width: W,
        borderTopWidth: 1,
        borderTopColor: '#000',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    listItem: {
        width: W / 2,
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
        width: W,
        height: 50,
        flexDirection: 'row'
    },
    bottomBtn: {
        width: .5*W,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#fff'
    },
    bottomRed: {
        backgroundColor: '#f00'
    }
});


export default FilterTab5;