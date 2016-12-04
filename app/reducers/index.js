import {combineReducers } from 'redux';
import RDcount from './reducer';
import Home from './home';

const Reducers = combineReducers({RDcount,Home});
export default Reducers;