const initialState = { name: '', inProgress: false };

export const startGame = (state = initialState, action) => {
	switch(action.type) {
		case 'START_GAME':
			return { ...state, name: action.name, inProgress: true};
		case 'END_GAME':
			return { ...state, name: '', inProgress: false}
		default:
			return state;
	}
}