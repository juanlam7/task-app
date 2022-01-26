import { createStore, combineReducers } from 'redux';
import taskReducer from './reducers/taskReducer.js';

const appReducer = combineReducers({
	taskReducer: taskReducer,
});

export default createStore(appReducer);