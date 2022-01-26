import { ACTION_UPDATE } from '../actions/taskActions.js';
import { RESET_INITIAL_STATE } from '../actions/taskActions.js';
import * as data from '../../db';

const { activities, allMonths } = data;

const initialState = {
	tasks: activities,
    months: allMonths,
};

const taskReducer = (state = initialState, action) => {
	switch(action.type) {

		case ACTION_UPDATE:
			return {
				...state,
				tasks: action.payload.tasks,
			}; 
        case RESET_INITIAL_STATE:
            return {
                ...initialState,
            };  
		default:
			return state;
	}
}

export default taskReducer;