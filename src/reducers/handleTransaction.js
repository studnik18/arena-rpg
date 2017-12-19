
const initialState = {
  inventory: []
}

const handleTransaction = ( state = initialState, action ) => {

	switch(action.type) {
		case 'BUY_ITEM':

			console.log('works!');
			const quantity = state.inventory.filter(
				item => item.id === action.item.id 
			);
			console.log(quantity.length)

			return Object.assign({}, state, {
				inventory: [ ...state.inventory, action.item]
			})


		default:
			console.log('default');
			return state;

	}

}

export default handleTransaction;


