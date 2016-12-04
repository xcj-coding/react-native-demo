// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/index';

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// export default function configureStore(initialState) {
// 	const store = createStoreWithMiddleware(rootReducer, initialState);
// 	return store;
// }


// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/index';

// // Note: this API requires redux@>=3.1.0
// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );