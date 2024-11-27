// src/reducers.ts
import { combineReducers } from 'redux';
import generalConfigSlice from '../slices/generalConfigSlice';

const rootReducer = combineReducers({
  generalConfig: generalConfigSlice,
});

export default rootReducer;