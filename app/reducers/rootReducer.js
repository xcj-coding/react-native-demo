import {combineReducers } from 'redux';

import BaseRD from './baseReducer';
import HomeRD from './homeReducer';
import ClassifyRD from './classifyReducer';
import CartRD from './cartReducer';
import PersonalRD from './personalReducer';

const DYReducers = combineReducers({BaseRD,HomeRD,ClassifyRD,CartRD,PersonalRD});

export default DYReducers;