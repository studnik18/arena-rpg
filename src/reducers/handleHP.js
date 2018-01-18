const initialState = {
	maxHP: 100,
	currentHP: 100
}

export const handleHP = ( state = initialState, action) => {

	switch(action.type) {

		case 'INN_BUY':
		case 'HEAL':

			return action.item.restore <= 1 

				?

				{
					...state,
					currentHP: Math.ceil(state.maxHP * action.item.restore)
				}				

				:

				{
					...state,
					currentHP: state.currentHP + action.item.restore <= state.maxHP ? state.currentHP + action.item.restore : state.maxHP
				}

		case 'DRAIN_LIFE':

			return action.payload.character === 'player'

				?  

				{
					...state,
					currentHP: state.currentHP + action.payload.value <= state.maxHP ? state.currentHP + action.payload.value : state.maxHP
				}

				:

				state

		case 'SUFFER_DAMAGE':
			
			return {
				...state,
				currentHP: state.currentHP - action.damage
			}

		case 'INCREMENT_ATTRIBUTE':
			 
			return action.attribute === 'vitality' 
			
			?

			{
				...state,
				maxHP: state.maxHP + 5,
				currentHP: state.currentHP + 5
			}

			:

			state

		default:
			return state
	}
} 