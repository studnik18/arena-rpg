const initialState = { gold: 500 };


export const handleGold = ( state = initialState, action ) => {
	
	switch(action.type) {
		
		case 'BUY_ITEM':
		case 'INN_BUY':

			return { ...state, gold: state.gold - action.item.buyValue}


		case 'SELL_ITEM':

			return { ...state, gold: state.gold + action.item.sellValue}

		case 'EARN_GOLD':

			return { ...state, gold: state.gold + action.gold}

		default:
			return state;

	}

}

export default handleGold;					







