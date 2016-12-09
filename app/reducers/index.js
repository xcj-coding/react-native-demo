import { combineReducers } from 'redux';

import BaseRD from './baseReducer';
import HomeRD from './homeReducer';
import ClassifyRD from './classifyReducer';
import CartRD from './cartReducer';
import PersonalRD from './personalReducer';
import Routes from './routes';

const DYReducers = combineReducers({ BaseRD, HomeRD, ClassifyRD, CartRD, PersonalRD, Routes });

export default DYReducers;