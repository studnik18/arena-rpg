import * as actionTypes from '../constants/ActionTypes';

const initialState = { equipped: [] }

export const handleEquip = ( state = initialState, action ) => {
	
	switch(action.type) {
		
		case actionTypes.EQUIP_ITEM:

			const equippedItem = state.equipped.filter(
				item => item.id === action.item.id 
			);

			const equippedIndex = state.equipped.map(
				(item) => item.id 
			).indexOf(action.item.id);

			return equippedItem.length === 0
				?
				Object.assign({}, state, {
					equipped: [ ...state.equipped, { ...action.item, quantity : 1}],
				})
				:
				Object.assign({}, state, {
					equipped: Object.assign([ ...state.equipped], {
						[equippedIndex] : {
							...action.item,
							quantity: ++equippedItem[0].quantity
						}										
					}),
				})
		case actionTypes.UNEQUIP_ITEM:
		case actionTypes.HEAL:
		case actionTypes.ADD_EFFECT:
		case actionTypes.REMOVE_ITEM:		
			const unequippedItem = state.equipped.filter(
				item => item.id === action.item.id 
			);

			const unequippedIndex = state.equipped.map(
				(item) => item.id 
			).indexOf(action.item.id);

			return action.item.quantity > 1 
				?
				Object.assign({}, state, {
					equipped: Object.assign([ ...state.equipped], {
						[unequippedIndex] : {
							...action.item,
							quantity: --unequippedItem[0].quantity

						}										
					}),
				})				
				:
				{ 
					...state,  
					equipped: 
						[	...state.equipped.slice(0, unequippedIndex), 
							...state.equipped.slice(unequippedIndex + 1)
						] 
				}		
		case actionTypes.END_GAME:
			return initialState		
		default:
			return state;
	}
}

export default handleEquip;