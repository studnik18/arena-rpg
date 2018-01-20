
//base statisicts - without bonus from attributes

const initialState = {
	
	attributes: {
		strength: 10,
		defense: 10,
		agility: 10,
		vitality: 10
	},
	boostedAttributes: [],
	attributePoints: 20,
	armor: 0,
	baseBlockChance: 0.05,
	baseDamage: [2, 4],
	baseHitChance: 0.5,
	blockChance: 0.1,
	damage: [2, 4],
	hitChance: 0.55,
	lifeDrain: 0

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
						armor: state.armor + action.item.armor,
						baseHitChance: state.baseHitChance - action.item.hitChancePenalty
					}

				case 'weapons': 
					
					return {
						...state,
						baseDamage: action.item.dmgRange,
						baseHitChance: action.item.hitChance
					}

				case 'shields':

					return {
						...state,
						baseBlockChance: state.baseBlockChance + action.item.blockChanceBonus
					}

				case 'rings':
				case 'necklaces':


					const skill = Object.keys(action.item.skillIncrease)[0];

					if (skill === 'all') {
						return {
							...state,
							attributes: {
								strength: state.attributes.strength + action.item.skillIncrease[skill],
								defense: state.attributes.defense + action.item.skillIncrease[skill],
								agility: state.attributes.agility + action.item.skillIncrease[skill],
								vitality: state.attributes.vitality + action.item.skillIncrease[skill]
							}		
						}
					}

					return Object.keys(state.attributes).includes(skill) 

					?

					{
						...state,
						attributes: {
							...state.attributes,
							[skill]: state.attributes[skill] + action.item.skillIncrease[skill]
						}		
					}

					:

					{
						...state,
						[skill]: state[skill] + action.item.skillIncrease[skill]
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
							armor: state.armor - action.item.armor,
							baseHitChance: state.baseHitChance + action.item.hitChancePenalty
							
					}

				case 'weapons':
					return {
						
						...state,
						baseDamage: [2,4],
						baseHitChance: state.baseHitChance - action.item.hitChance + 0.5
					}

				case 'shields':
					return {
						...state,
						baseBlockChance: state.baseBlockChance - action.item.blockChanceBonus
					}

				case 'rings':
				case 'necklaces':	

					const skill = Object.keys(action.item.skillIncrease)[0]

					if (skill === 'all') {
						return {
							...state,
							attributes: {
								strength: state.attributes.strength - action.item.skillIncrease[skill],
								defense: state.attributes.defense - action.item.skillIncrease[skill],
								agility: state.attributes.agility - action.item.skillIncrease[skill],
								vitality: state.attributes.vitality - action.item.skillIncrease[skill]
							}		
						}
					}

					Object.keys(state.attributes).includes(skill) 

					?

					{
						...state,
						attributes: {
							...state.attributes,
							[skill]: state.attributes[skill] - action.item.skillIncrease[skill]
						}		
					}

					:

					{
						...state,
						[skill]: state[skill] - action.item.skillIncrease[skill]
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

		case 'CALCULATE_ATTRIBUTE_BONUS':

			return {
				...state,
				blockChance: state.baseBlockChance * (1 + (state.attributes.defense * 0.005)),
				hitChance: state.baseHitChance * (1 + (state.attributes.agility * 0.005)),
				damage: [state.baseDamage[0] * (1 + state.attributes.strength * 0.01), state.baseDamage[1] * (1 + state.attributes.strength * 0.01)]
			}

		case 'NEW_LEVEL':

			return {
				...state,
				attributePoints: state.attributePoints + 20
			}

		case 'ADD_EFFECT': 
			const increasedStat = action.item.effect.statIncrease;
			if (Object.keys(state.attributes).includes(increasedStat)) {
				return {
					...state,
					attributes: {
						...state.attributes, [increasedStat]: state.attributes[increasedStat] + 10
					},
					boostedAttributes: [
						...state.boostedAttributes, increasedStat
					]				
				}
			}

		case 'END_BATTLE':
			return {
				...state,
				attributes: {
					strength: state.boostedAttributes.includes('strength') ? state.attributes.strength - 10 : state.attributes.strength,
					defense: state.boostedAttributes.includes('defense') ? state.attributes.defense - 10 : state.attributes.defense,
					agility: state.boostedAttributes.includes('agility') ? state.attributes.agility - 10 : state.attributes.agility,
					vitality: state.boostedAttributes.includes('vitality') ? state.attributes.vitality - 10 : state.attributes.vitality
				},
				boostedAttributes: []
			}

		default: 
			return state

	}
}

	