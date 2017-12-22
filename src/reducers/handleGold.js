const initialState = { gold: 500 };


export const handleGold = ( state = initialState, action ) => {
	
	switch(action.type) {
		
		case 'BUY_ITEM':

			return { ...state, gold: state.gold - action.item.buyValue}


		case 'SELL_ITEM':

			return { ...state, gold: state.gold + action.item.sellValue}

		default:
			return state;

	}

}

export default handleGold;					







