
const initialState = {
  inventory: [],
  gold: 500
}

const handleTransaction = ( state = initialState, action ) => {
	
	switch(action.type) {
		
		case 'BUY_ITEM':

			const currentItem = state.inventory.filter(
				item => item.id === action.item.id 
			);

			const index = state.inventory.map(
				(item) => item.id 
			).indexOf(action.item.id);

			return currentItem.length === 0

				?

				Object.assign({}, state, {
					inventory: [ ...state.inventory, { ...action.item, quantity : 1}],
					gold: state.gold - action.item.buyValue
				})

				:

				Object.assign({}, state, {
					inventory: Object.assign([ ...state.inventory], {
						[index] : {
							...action.item,
							quantity: ++currentItem[0].quantity
						}										
					}),
					gold: state.gold - action.item.buyValue
				})

		case 'SELL_ITEM':

			console.log(action.index, action.item.quantity)
			return action.item.quantity > 1 

				?

				Object.assign({}, state, {
					inventory: Object.assign([ ...state.inventory], {
						[action.index] : {
							...action.item,
							quantity: --action.item.quantity

						}										
					}),
					gold: state.gold + action.item.sellValue
				})				

				:

				{ 
					...state, 
					gold: state.gold + action.item.sellValue, 
					inventory: 
						[	...state.inventory.slice(0, action.index), 
							...state.inventory.slice(action.index + 1)
						] 
				}



			

		default:
			console.log('default');
			return state;

	}

}

export default handleTransaction;


