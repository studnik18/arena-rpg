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

		default:
			return state
	}
}