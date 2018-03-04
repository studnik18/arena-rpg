import * as actionTypes from '../constants/ActionTypes';

const initialState = { logs: [] }

export const logMessage = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.LOG_MESSAGE:
			return {
				...state,
				logs: [
					...state.logs,
					action.message
				]
			}
		case actionTypes.END_BATTLE:
			return {
				...state,
				logs: []
			}
		default:
			return state
	}
}