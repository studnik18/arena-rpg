import * as actionTypes from '../constants/ActionTypes';

const initialState = { name: '', inProgress: false };

export const startGame = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.START_GAME:
			return { ...state, name: action.name, inProgress: true};
		case actionTypes.END_GAME:
			return { ...state, name: '', inProgress: false}
		default:
			return state;
	}
}