const initialState = {
	logs: []
}

export const logMessage = (state = initialState, action) => {

	switch(action.type) {

		case 'LOG_MESSAGE':
			return {
				...state,
				logs: [
					...state.logs,
					action.message
				]
			}

		case 'END_BATTLE':
			return {
				...state,
				logs: []
			}

		default:
			return state
	}
}