import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import LSwiper from 'react-native-swiper';
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

export default class Swiper extends Component {
    constructor(props) {
        super(props);
        this.renderSwiper = this.renderSwiper.bind(this);
    }

    renderSwiper(list) {
        return list.map((value, i) => {
            return (
                <TouchableOpacity key={i} style={styles.container} onPress={() => {
                    this.props.onPress && this.props.onPress(value.imgLink);
                }}>
                    <Image  source={{uri: value.img}}  style={[styles.image,{height: this.props.height || 200}]}  />
                </TouchableOpacity>
            );
        });
    }

    render() {
        let content = this.props.renderSwiper ? this.props.renderSwiper() : this.renderSwiper(this.props.list);

        return (
            <LSwiper 
                width={this.props.width || W}
                autoplayTimeout = {this.props.autoplayTimeout || 2}
                autoplay = {this.props.autoplay || true}
                showButtons = {this.props.showButtons || true}
                height = {this.props.height || 200}
                paginationStyle = {this.props.paginationStyle || styles.pagination}
                {...this.props}
            >
            {content}
            </LSwiper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    image: {
        flex:1
    },
    pagination: {
        justifyContent: 'flex-end',
        paddingRight: 10,
        bottom: 10
    }
});
