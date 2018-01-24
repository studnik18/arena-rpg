
const initialState = {
  inventory: [],
}


export const handleInventory = ( state = initialState, action ) => {



	switch(action.type) {
		
		case 'BUY_ITEM':
		case 'UNEQUIP_ITEM':

			const addedItem = state.inventory.filter(
				item => item.id === action.item.id 
			);

			const addedIndex = state.inventory.map(
				(item) => item.id 
			).indexOf(action.item.id);

			return addedItem.length === 0

				?

				Object.assign({}, state, {
					inventory: [ ...state.inventory, { ...action.item, quantity : 1}],
				})

				:

				Object.assign({}, state, {
					inventory: Object.assign([ ...state.inventory], {
						[addedIndex] : {
							...action.item,
							quantity: ++addedItem[0].quantity
						}										
					}),
				})

		case 'SELL_ITEM':
		case 'EQUIP_ITEM':

			const removedItem = state.inventory.filter(
				item => item.id === action.item.id 
			);

			const removedIndex = state.inventory.map(
				(item) => item.id 
			).indexOf(action.item.id);

			
			return action.item.quantity > 1 

				?

				Object.assign({}, state, {
					inventory: Object.assign([ ...state.inventory], {
						[removedIndex] : {
							...action.item,
							quantity: --action.item.quantity

						}										
					}),
				})				

				:

				{ 
					...state,  
					inventory: 
						[	...state.inventory.slice(0, removedIndex), 
							...state.inventory.slice(removedIndex + 1)
						] 
				}

		case 'END_GAME':

			return initialState			

		default:
			return state;

	}

}

export default handleInventory;


