import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper';
import {LazyloadView} from 'react-native-lazyload';

import CacheImage from './cacheImage';

const WINDOW_WIDTH = Dimensions.get('window').width;
const itemWidth = WINDOW_WIDTH / 4;

class IconList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let nums = this.props.nums || 8; // 每页显示的图标数量
        let len = Math.ceil(this.props.tabs.length / nums);
        let contain = Array.from({length: len});
        let itemWidth = WINDOW_WIDTH / (nums / 2);
        let itemHeight = this.props.itemHeight ? this.props.itemHeight : WINDOW_WIDTH / 4;
        let imgW = this.props.imgW || 50;
        let radius = imgW / 2;
        if (this.props.isRadius == false) {
            radius = 0;
        }
        return (
            <Swiper
                style={this.props.style}
                paginationStyle={styles.paginationStyle}
                showsPagination={false}
                activeDot={
                    <View
                        style={{
                            backgroundColor: '#f70',
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3,
                        }}
                    />
                }
                width={this.props.width || WINDOW_WIDTH}
                height={this.props.height || (itemHeight * 2)}
                loop={false}
            >
                {
                    contain.map((e, i) => (
                        <LazyloadView host={this.props.host || ''} style={styles.container} key={i}>
                            {
                                this.props.tabs.filter((ele, _index) => {
                                    return (_index >= i * nums && _index < (i + 1) * nums);
                                }).map((cate, index) => (
                                    <TouchableOpacity
                                        style={[styles.itemWrapper, {width: itemWidth, height: itemHeight}]}
                                        key={index}
                                        onPress={ () => { this.props.onPress && this.props.onPress((i) *nums + index) }}
                                    >
                                        <CacheImage
                                            cacheNeed
                                            host={this.props.host || ''}
                                            source={{uri: cate.img}}
                                            style={{
                                                width: imgW,
                                                height: imgW,
                                                borderRadius: radius
                                            }}
                                        />
                                        <Text style={{fontSize: 12,marginTop: 5}}>
                                            {cate.name}
                                        </Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </LazyloadView>
                    ))
                }
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    paginationStyle: {
        bottom: 5,
    },
    sliderItemWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    container: {
        flex: 1,
        width: WINDOW_WIDTH,
        backgroundColor: '#fff',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    itemWrapper: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sliderItem: {
        flex: 1,
        width: WINDOW_WIDTH,
        resizeMode: 'stretch',
        justifyContent: 'flex-end'
    },
    sliderItemTitle: {
        color: '#fff',
        backgroundColor: 'rgba(63, 63, 63, 0.5)',
        height: 25,
        lineHeight: 25,
        fontSize: 15,
    },
});
export default IconList;