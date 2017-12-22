const initialState = {
  equipped: [],
}



export const handleEquip = ( state = initialState, action ) => {
	
	



	switch(action.type) {
		
		case 'EQUIP_ITEM':

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

		case 'UNEQUIP_ITEM':
			
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
						[equippedIndex] : {
							...action.item,
							quantity: --unequippedItem[0].quantity

						}										
					}),
				})				

				:

				{ 
					...state,  
					equipped: 
						[	...state.equipped.slice(0, unequippedItem.index), 
							...state.equipped.slice(unequippedIndex.index + 1)
						] 
				}

		default:
			return state;

	}

}

export default handleEquip;