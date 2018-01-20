const initialState = { gold: 5000 };


export const handleGold = ( state = initialState, action ) => {
	
	switch(action.type) {
		
		case 'BUY_ITEM':
		case 'INN_BUY':

			return { ...state, gold: state.gold - action.item.buyValue}


		case 'SELL_ITEM':

			return { ...state, gold: state.gold + action.item.sellValue}

		case 'END_BATTLE':

			return action.result === 'success'

			?

			{ 
				...state, 
				gold: state.gold + action.reward.gold
			}

			: ''

		default:
			return state;

	}

}

export default handleGold;					







