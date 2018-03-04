import * as actionTypes from '../constants/ActionTypes';

const initialState = { hoveredItem: '' }

export const showDescription = (state = initialState, action) => {
	switch(action.type) {		
		case actionTypes.SHOW_DESCRIPTION:
			return {
				...state,
				hoveredItem: action.item
			}
		default:
			return state;
	}
}