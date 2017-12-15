
const initialState = {
  inventory: []
}

const handleTransaction = ( state = initialState.inventory, action ) => {

	switch(action) {
		case 'BUY_ITEM':

			console.log('works!');
			return [ ...state, action.item.name ]


		default: 
			return state;

	}

}

export default handleTransaction;


