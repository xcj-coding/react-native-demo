/**
 * 全局变量
 * 
 */
import {Dimensions} from 'react-native';

const DYGlobal = {}

DYGlobal.a = 1;

DYGlobal.window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};

DYGlobal.fetch = {
    
}


module.exports = DYGlobal;
