const initialState = {
	opponent: 'none'
}

export const handleOpponent = ( state = initialState, action ) => {

	switch(action.type) {

		case 'CHOOSE_OPPONENT':
			return {
				...state,
				opponent: action.opponent
			}

		case 'DEAL_DAMAGE':
			return {
				...state,
				opponent: { 
					...state.opponent, 
					currentHP: state.opponent.currentHP - action.damage
				}
			}

		case 'ADD_OPPONENT_EFFECT':
			return {
				...state,
				opponent: { 
					...state.opponent, 
					[action.effect]: true
				}				
			}			

		default:
			return state
	}
}