//@flow
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import {
    AsyncStorage
} from 'react-native';

import reducers from '../reducers';

var middlewareWrapper = applyMiddleware(thunk);

var createDYStore = middlewareWrapper(createStore);

function configureStore(onComplete) {
    const rehydrator = autoRehydrate();
    const store = rehydrator(createDYStore)(reducers);

    persistStore(store, {storage: AsyncStorage}, onComplete);
    console.log(store);

    return store;
}

module.exports = configureStore;
