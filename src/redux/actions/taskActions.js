export const ACTION_UPDATE = 'ACTION_UPDATE';
export const RESET_INITIAL_STATE = 'RESET_INITIAL_STATE';

export const updateTask = (tasks) => {
	return {
		type: ACTION_UPDATE,
		payload: {
			tasks: tasks,
		}
	}
}

export const resetTask = () => {
	return {
		type: RESET_INITIAL_STATE,
	}
}