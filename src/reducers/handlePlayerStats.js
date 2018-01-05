
const initialState = {
	
	attributes: {
		strength: 10,
		defense: 10,
		agility: 10,
		vitality: 10
	},
	attributePoints: 20,
	armor: 0,
	blockChance: 0.05,
	damage: [2, 4],
	hitChance: 0.5

}

export const handlePlayerStats = (state = initialState, action) => {
	switch(action.type) {

		case 'EQUIP_ITEM':

			switch(action.item.category){
				case 'helmets':
				case 'armors':
				case 'boots':
				case 'gloves':

					return {
						...state, 
						armor: state.armor + action.item.armor							
					}

				case 'weapons': 
					
					return {
						...state,
						damage: action.item.dmgRange,
						hitChance: action.item.hitChance
					}
				default: 
					return state;

			}

		case 'UNEQUIP_ITEM':

			switch(action.item.category){
				case 'helmets':
				case 'armors':
				case 'boots':
				case 'gloves':

					return {

						...state, 
							armor: state.armor - action.item.armor
							
					}

				case 'weapons':
					return {
						
						...state,
						damage: [2,4],
						hitChance: 0.5


					}
				default: 
					return state;
			}

		case 'INCREMENT_ATTRIBUTE':

			return {
				...state,
				attributes: {
					...state.attributes, [action.attribute]: state.attributes[action.attribute] + 1
				},
				attributePoints: state.attributePoints - 1

			}



		default: 
			return state

	}
}

	