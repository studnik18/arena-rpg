import * as actionTypes from '../constants/ActionTypes';

const initialState = { temporaryEffects: [] }

export const handleTemporaryEffects = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.ADD_EFFECT:
			return {
				...state,
				temporaryEffects: [...state.temporaryEffects, action.item.effect]
			}
		case actionTypes.END_BATTLE:
			return {
				...state,
				temporaryEffects: []
			}
		default:
			return state
	}
}



















