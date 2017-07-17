/**
 * 1.基础第三方框架引入
 */
import React,{ Component } from 'react';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
/**
 * 2.第三方组件引入
 */
import { Actions } from 'react-native-router-flux';
/**
 * 3.项目组件引入
 */

/**
 * 4.项目reducers引入 || 项目Action引入 || 配置文件引入 || 公用方法引入
 */
import DYReducers from './reducers/';
import DYcommon from './common/dyCommon';

/**
 * 5.流转页面
 */
import Root from './root'

/**
 * 页面内使用常量
 */
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore);
const store = createStoreWithMiddleware(DYReducers);

/**
 * 页面类
 */
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}

export default App;
