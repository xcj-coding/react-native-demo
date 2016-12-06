import React, {Component} from 'react';
import {Provider} from 'react-redux';


import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import DYReducers from './reducers/rootReducer';

import Root from './root'
import DYGlobal from './global/DYGlobal'

console.log(DYGlobal.a)
console.log(DYGlobal.window.width)
console.log(DYGlobal.window.height)

// const perflogger = store => next => action => {
//   console.log( '%c Dispatching ', 'background: #222; color: #bada55', action );
//   const start = performance.now();
//   const result = next( action );
//   const end = performance.now();
//   console.log( `%c Action with type "${action.type}" took ${( end-start ).toFixed( 2 )} milliseconds.`, 'background: #bada55; color: #222' );
//   return result;
// }

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(logger,thunk)(createStore);

const store = createStore(DYReducers);

console.log(store);
console.log(store.getState());

// import * as DYAction  from './actions/index';
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
