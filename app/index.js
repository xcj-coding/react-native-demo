import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import DYReducers from './reducers/rootReducer';

import Root from './root'
import DYGlobal from './global/DYGlobal'

console.log(DYGlobal.test)
console.log(DYGlobal.window.width)
console.log(DYGlobal.window.height)


const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore);

const store = createStore(DYReducers);

console.log(store);
console.log(store.getState());

// import * as DYAction  from './actions/index';
// console.log(DYAction.xxx())
// store.dispatch(DYAction.xxx());
// store.subscribe(listener)

import { Scene, Router } from 'react-native-router-flux';

class App extends Component {
	render() {
		return (
		<Provider store={store}>
			<Root />
		</Provider>
		)
		// return (
		// 	<Router>
		// 		<Scene key="root">
		// 			<Scene key="login" component={Login} title="Login" />
		// 			<Scene key="register" component={Register} title="Register" />
		// 			<Scene key="home" component={Home} />
		// 		</Scene>
		// 	</Router>
		// )
	}
}

export default App;
