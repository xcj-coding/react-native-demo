/**
 * 1.基础第三方框架引入
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Navigator, StyleSheet } from 'react-native';
/**
 * 2.第三方组件引入
 */
import { Router, Scene, TabBar, Reducer, Modal } from 'react-native-router-flux';
/**
 * 3.项目组件引入
 */

/**
 * 4.项目reducers引入 || 项目Action引入 || 配置文件引入 || 公用方法引入
 */

/**
 * 5.流转页面
 */
// import Welcome from './welcome/welcome'
import Home from './views/home'
import Classify from './views/classify'
import Cart from './views/cart'
import Personal from './views/personal'
import NotFound from './views/notFound'
import Detail from './views/detail'
import Error from './views/error'

/**
 * 页面内使用常量
 */
const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};
const RouterWithRedux = connect()(Router)
const backButton = require('../res/back.png');
const getSceneStyle = (props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    };
    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ? 0 : Navigator.NavigationBar.Styles.General.TotalNavHeight;
        style.marginBottom = computedProps.hideTabBar ? 0 : 50;
    }
    return style;
};
const TabIcon = ({selected, title}) => {
    return (
        <Text style={{color: selected? 'red': 'black'}}>{title}</Text>
    )
};

/**
 * 页面类
 */
class Root extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<RouterWithRedux
				getSceneStyle={getSceneStyle}
				backButtonImage={backButton}
				createReducer={reducerCreate}
				>
				<Scene key="modal" component={Modal} >
					<Scene key="root">
						<Scene key='tabs' tabs={true} tabBarStyle={{ backgroundColor: '#fff' }} initial >
							<Scene key='home' component={Home} icon={TabIcon} title='首页' />
							<Scene key='classify' component={Classify} icon={TabIcon} title='分类' />
							<Scene key='cart' component={Cart} icon={TabIcon} title='购物车' />
							<Scene key='personal' component={Personal} icon={TabIcon} title='个人' />
						</Scene>
						<Scene key="notFound" component={NotFound} title="NotFound" />
						<Scene key="detail" component={Detail} title="Detail" direction="vertical" hideNavBar hideTabBar />
					</Scene>
					<Scene key="error" component={Error} />
				</Scene>
			</RouterWithRedux >
		)
	}
}

export default Root;
