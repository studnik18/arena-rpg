import * as actionTypes from '../constants/ActionTypes';

const initialState = { gold: 300 };


export const handleGold = ( state = initialState, action ) => {
	
	switch(action.type) {	
		case actionTypes.BUY_ITEM:
		case actionTypes.INN_BUY:
			return { ...state, gold: state.gold - action.item.buyValue}
		case actionTypes.SELL_ITEM:
			return { ...state, gold: state.gold + action.item.sellValue}
		case actionTypes.END_BATTLE:
			return action.result === 'success'
			?
			{ 
				...state, 
				gold: state.gold + action.reward.gold
			}
			: 
			state
		case actionTypes.END_GAME:
			return {
				...state,
				...initialState
			}
		default:
			return state;
	}
}

export default handleGold;					







