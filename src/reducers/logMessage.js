const initialState = {
	lastMessage: ''
}

export const logMessage = (state = initialState, action) => {

	switch(action.type) {

		case 'LOG_MESSAGE':
			return {
				...state,
				lastMessage: action.message
			}

		default:
			return state
	}
}