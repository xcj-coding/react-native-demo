/**
 * @author huangliang@douyu.tv
 * @description 改造原生StyleSheet 添加ios和android 样式例外支持
 */

import {
    StyleSheet,
    Platform
} from 'react-native';

function create(styles) {
    const platformStyles = {};
    Object.keys(styles).forEach((name) => {
        let {ios, android, ...style} = {...styles[name]};
        if (ios && Platform.OS === 'ios') {
            style = {...style, ...ios};
        }
        if (android && Platform.OS === 'android') {
            style = {...style, ...android};
        }
        platformStyles[name] = style;
        
    });
    return StyleSheet.create(platformStyles);
}

module.exports = {
    create
};
