/**
 * 1.基础第三方框架引入
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, Text, Navigator, StyleSheet } from 'react-native';
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
// import Welcome from './welcome/welcome';
import Home from './views/home';
import Classify from './views/classify';
import Best from './views/best';
import Cart from './views/cart';
import Personal from './views/personal';
import NotFound from './views/notFound';
import List from './views/list';
import Detail from './views/detail';
import Error from './views/error';
import WebViewPage from './views/webViewPage';
import Other from './views/other'


/**
 * 页面内使用常量
 */
import RootConfig from './common/Rootconfig';

const reducerCreate = params => {
	const defaultReducer = Reducer(params);
	return (state, action) => {
		// console.log("ACTION:", action);
		return defaultReducer(state, action);
	}
};
const RouterWithRedux = connect()(Router)
const backButton = require('../res/classify.png');
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

/**
 * 页面类
 */
class TabIcon extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Image source={this.props.selected ? this.props.selectedImgLink : this.props.imgLink} style={{ width: 26, height: 26 }} />
				<Text style={{ color: this.props.selected ? 'red' : 'black',fontSize:12 }}>{this.props.title}</Text>
			</View>
		);
	}
}

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
				<Scene key="modal" component={Modal}>
					<Scene key="root">
						<Scene key='tabs' tabs={true} tabBarStyle={{ backgroundColor: '#fff' }} initial >
							{
								RootConfig.nav.map((item, i) => {
									switch (item.TabText) {
										case "首页":
											return <Scene key={"home"} component={Home} icon={TabIcon} title={item.TabText} imgLink={item.TabImage} selectedImgLink={item.SelectTabImage} hideNavBar />;
										case "分类":
											return <Scene key={"classify"} component={Classify} icon={TabIcon} title={item.TabText} imgLink={item.TabImage} selectedImgLink={item.SelectTabImage} hideNavBar />;
										case "推荐":
											return <Scene key={"best"} component={Best} icon={TabIcon} title={item.TabText} imgLink={item.TabImage} selectedImgLink={item.SelectTabImage} hideNavBar />;
										case "购物车":
											return <Scene key={"cart"} component={Cart} icon={TabIcon} title={item.TabText} imgLink={item.TabImage} selectedImgLink={item.SelectTabImage} hideNavBar />;
										case "我的":
											return <Scene key={"personal"} component={Personal} icon={TabIcon} title={item.TabText} imgLink={item.TabImage} selectedImgLink={item.SelectTabImage} hideNavBar />;
										default:
											return null;
									}
								})
							}
						</Scene>
						<Scene key="notFound" component={NotFound} title="NotFound" />
						<Scene key="list" component={List} title="List" direction="List" hideNavBar hideTabBar />
						<Scene key="detail" component={Detail} title="Detail" direction="horizontal" hideNavBar hideTabBar />
						<Scene key="webViewPage" component={WebViewPage} title="WebViewPage" direction="horizontal" hideNavBar hideTabBar />
					</Scene>
                    <Scene key="error" component={Error} />
					<Scene key="other" component={Other} />
				</Scene>
			</RouterWithRedux >
		)
	}
}

export default Root;
