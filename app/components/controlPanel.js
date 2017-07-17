import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ListView,
    Dimensions,
    TextInput
} from 'react-native';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

import Icon from 'react-native-vector-icons/Ionicons';

class SimpleChoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choices: Array.from({length: this.props.list.length}, () => false),
            showAll: false
        }
    }

    renderList() {
        let arr = this.state.showAll === true ? this.props.list : this.props.list.slice(0, 3);
        let html = arr.map((val, index) => {
            return (
                <TouchableOpacity key={index} style={[styles.btn, this.state.choices[index] == true ? styles.activeBtn: styles.btn]} onPress={() => {
                    let isActive = !this.state.choices[index];
                    let newArray = this.state.choices.slice();
                    newArray[index] = isActive;
                    this.setState({
                        choices: newArray
                    });
                }}>
                    <Text style={this.state.choices[index] == true ? styles.activeBtnText: styles.btnText}>{val}</Text>
                </TouchableOpacity>
            )
        });
        return html;
    }

    renderIcon() {
        if(this.state.showAll === true) {
            return (<Icon name="ios-arrow-up" size={20}/>);
        } else {
            return (<Icon name="ios-arrow-down" size={20}/>);
        }
    }

    reset() {
        this.setState({
            choices: Array.from({length: this.props.list.length}, () => false),
        });
    }

    render(ReactElement, DOMElement, callback) {
        let content = this.renderList();
        let icon = this.renderIcon();
        return (
            <View style={styles.box}>
                <View style={styles.title}>
                    
                <Text>{this.props.title}</Text>
                <TouchableOpacity onPress={() => {
                    this.setState({
                        showAll: !this.state.showAll
                    });
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingRight: 5}}>
                        <Text>全部</Text>
                        {icon}
                    </View>
                </TouchableOpacity>
                </View>
                <View style={[styles.list]}>
                    {content}
                </View>
            </View>
        );
    }
}

class ControlPanel extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.data = ['自营配送', '货到付款', '手机专享', '仅看有货', '促销'];
        this.state = {
            choices: Array.from({length: this.data.length}, () => false),
            lowPrice: null,
            highPrice: null
        };
    }

    renderSelects() {
        // console.log('render');
        return (
            this.data.map((val, index) => {
                return (
                    <TouchableOpacity key={index} style={[styles.btn, this.state.choices[index] == true ? styles.activeBtn: styles.btn]} onPress={(e) => {
                        let isActive = !this.state.choices[index];
                        let newArray = this.state.choices.slice();
                        newArray[index] = isActive;
                        this.setState({
                            choices: newArray
                        });
                    }}>
                        <Text style={this.state.choices[index] == true ? styles.activeBtnText: styles.btnText}>{val}</Text>
                    </TouchableOpacity>
                )
            })
            
        )
    }

    reset() {
        this.setState({
            choices: Array.from({length: this.data.length}, () => false)
        });
        this.props.choices.map((val, index) => {
            this['simpleChoice'+index].reset();
        });
    }

    render() {
        let content = this.renderSelects();
        return (
            <View style={styles.container}>
                <View style={styles.header}></View>
                <View style={styles.box}>
                    <Text>斗鱼服务</Text>
                </View>
                <View style={[styles.list]}>
                    {content}
                </View>
                <View style = {styles.box}>
                    <Text>价格区间</Text>
                </View>
                <View style={styles.inputBox}>
                    <TextInput 
                    keyboardType ='numeric'
                    placeholder ='最低价'
                    value={this.state.lowPrice}
                    style = {styles.textinput}
                    />
                    <Text> - </Text>
                    <TextInput 
                    keyboardType ='numeric'
                    placeholder ='最高价'
                    style = {styles.textinput}
                    value={this.state.highPrice}
                    />
                </View>
                {this.props.choices.map((val, index) => {
                    return (
                        <SimpleChoice ref={(ref) => { this['simpleChoice'+index] = ref; }} key={index} title={val.title}
                            list={val.list}
                        />
                    )
                })}
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.bottomBtn} onPress={this.reset.bind(this)}>
                        <Text>重置</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.bottomBtn, styles.bottomRed]} onPress={() => {
                        this.props.closeDrawer && this.props.closeDrawer();
                    }}>
                        <Text style={{color: '#fff'}}>确定</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        paddingLeft: 5
    },
    header: {
        height: 30
    },
    btn: {
        backgroundColor: '#eee',
        margin: 5,
        marginLeft: 0,
        padding: 10,
        width: 80,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 4
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        width: .8 * W,
        backgroundColor: '#fff',
    },
    activeBtn: {
        borderColor: '#f00',

    },
    btnText: {
        color: '#000'
    },
    activeBtnText: {
        color: '#f00'
    },
    box: {
        marginTop: 10,
        marginBottom: 10
    },
    inputBox: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: .8*W,
    },
    textinput: {
        width: 120,
        height: 26,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        borderRadius: 4,
        paddingLeft: 5
    },
    title: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: .8* W,
        height: 50,
        flexDirection: 'row'
    },
    bottomBtn: {
        width: .4*W,
        alignItems: 'center',
        justifyContent:'center'
    },
    bottomRed: {
        backgroundColor: '#f00'
    }
});

export default ControlPanel;