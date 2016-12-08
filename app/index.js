import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import DYReducers from './reducers/rootReducer';

import Root from './root'
import DYGlobal from './global/DYGlobal'

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore);

const store = createStore(DYReducers);


import { Scene, Router } from 'react-native-router-flux';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        )
    }
}

export default App;
