const initialState = {
	temporaryEffects: []
}


export const handleTemporaryEffects = (state = initialState, action) => {

	switch(action.type) {

		case 'ADD_EFFECT':

			return {
				...state,
				temporaryEffects: [...state.temporaryEffects, action.item.effect]
			}

		case 'END_BATTLE':

			return {
				...state,
				temporaryEffects: []
			}

		default:
			return state

	}
}



















