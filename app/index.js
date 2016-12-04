import React, {Component} from 'react';
import {Provider} from 'react-redux';
// import configureStore from './store/configure-store'
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import Reducers from './reducers/index';
import * as DYAction  from './actions/index';

import Root from './root'
import DYglobal from './DYglobal'
console.log(DYglobal.a)
// const store = configureStore();

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunk,logger)(createStore);

const store = createStore(Reducers);

console.log(store);
console.log(store.getState());
// console.log(DYAction.xxx())
// store.dispatch(DYAction.xxx());
// store.subscribe(listener)

class App extends Component {
	render(){
		return (
		<Provider store={store}>
			<Root />
		</Provider>
		)
	}
}

export default App;
