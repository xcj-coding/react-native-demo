import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, PixelRatio, TouchableOpacity} from 'react-native';

export default class ClassifyNavListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initTypeId: this.props.initTypeId
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({initTypeId: nextProps.initTypeId});
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.selectFn(this.props.typeId)}>
            <View
                style={this.props.initTypeId === this.props.typeId ? [styles.list_item,styles.list_item_select] : styles.list_item}>
                <Text
                    style={this.props.initTypeId === this.props.typeId ? [styles.list_item_font,styles.list_item_font_select] : styles.list_item_font}
                >
                    {this.props.typeName}
                </Text>
            </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    list_item: {
        height: 40,
        borderTopWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get(),
        borderColor: '#f3f5f7',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    list_item_select: {
        borderRightWidth: 0 / PixelRatio.get(),
        backgroundColor: '#f3f5f7'
    },
    list_item_font: {
        fontSize: 12,
        color: '#252526'
    },
    list_item_font_select: {
        color: '#f23030'
    }
})
