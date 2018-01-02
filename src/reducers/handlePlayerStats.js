
const initialState = {
	
	playerStats: {

		strength: 10,
		defense: 10,
		agility: 10,
		vitality: 10


	},

	attributePoints: 30

}

export const handlePlayerStats = (state = initialState, action) => {
	switch(action.type) {

		case 'EQUIP_ITEM':

			switch(action.item.category){
				case 'helmets':
				case 'armors':

					return {

						...state, 
						playerStats: 
							{
								...state.playerStats, 
								defense: state.playerStats.defense + action.item.defense
							}
					}

			}

		case 'UNEQUIP_ITEM':

			switch(action.item.category){
				case 'helmets':
				case 'armors':

					return {

						...state, 
						playerStats: 
							{
								...state.playerStats, 
								defense: state.playerStats.defense - action.item.defense
							}
					}

			}

		default: 
			return state

	}
}

	