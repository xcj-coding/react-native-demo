import React, { Component } from 'react';
import ReactNative, {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ListView,
    Animated
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const itemWidth = W / 4;

class FilterTab3 extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            selected: this.props.selected,
            pop: false,
            dataSource: ds.cloneWithRows(this.props.value.list),
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this._self.measure((x, y, w, h, pX, pY) => {
                this.setState({
                    btnOpts: { x, y, w, h, pX, pY },
                });
            });
        }, 0);
    }

    onPress() {
        let params = {
            filter: this.state.selectItem,
            id: this.props.value.id
        }

        if (this.state.pop == true) {
            this.props.postData && this.props.postData();
        }

        this.props.changeTabState && this.props.changeTabState(this.props.index);
    }

    renderRow(row, v, i) {
        let active = i == 0 ? true : false;
        let textStyle = active ? styles.activeItemText : {};
        let content;
        if (active) {
            content = <Icon name='md-checkmark' size={20} color='#f00' />;
        }
        return (
            <TouchableOpacity style={styles.listItem} onPress={() => {
                this.setState({
                    pop: false
                });
                this.props.postData && this.props.postData({
                    id: this.props.value.id,
                    filter: row.id
                });
            } }>
                <Text style={textStyle}>{row.name}</Text>
                {content}
            </TouchableOpacity>
        )
    }

    renderMenu() {
        let content;
        if (this.state.pop) {
            // Animated.timing(
            //     this.state.top,
            //     {
            //         toValue: this.state.btnOpts.h,
            //         duration: 100
            //     },
            // ).start();

            let sl = {
                height: H - this.state.btnOpts.h - this.state.btnOpts.pY,
                left: -this.state.btnOpts.x,
                top: this.state.btnOpts.h
            };
            content = (
                <View style={[styles.menu, sl]}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow.bind(this)}
                        />
                </View>
            )
        }

        return content;
    }

    render() {
        let active = this.props.selected ? {} : {};
        let textActive = this.props.selected ? { color: '#f00' } : { color: '#000' };

        let menu = this.renderMenu();
        return (
            <TouchableOpacity ref={(self) => this._self = self} style={[styles.item, active]} onPress={() => {
                this.props.changeTabState && this.props.changeTabState(this.props.index);
                let params = { id: this.props.value.id };

                this.setState({
                    pop: !this.state.pop
                });
                this._self.measure((x, y, w, h, pX, pY) => {
                    console.log(x, y, w, h, pX, pY);
                });
                if (this.state.pop === true) {
                    // this.props.postData(params);
                }
            } }>
                <Text style={textActive} >{this.props.value.name}</Text>
                {menu}
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
    },
    menu: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        right: 0,
        bottom: 0,
        width: W,
        borderTopWidth: 1,
        borderTopColor: '#000'
    },
    listItem: {
        height: 50,
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    activeItem: {

    },
    activeItemText: {
        color: '#f00'
    }
});


export default FilterTab3;