
const initialState = {
  inventory: []
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
					inventory: [ ...state.inventory, { ...action.item, quantity : 1}]
				})

				:

				Object.assign({}, state, {
					inventory: Object.assign([ ...state.inventory], {
						[index] : {

							...action.item,
							quantity: ++currentItem[0].quantity

						}
						
						
					})
				})

		default:
			console.log('default');
			return state;

	}

}

export default handleTransaction;


