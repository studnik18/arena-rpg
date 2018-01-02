const initialState = {
	exp: 0,
	level: 1,
	nextLevel: 100
}

const levelThresholds = {
	1: 100,
	2: 200,
	3: 350,
	4: 500,
	5: 700,
	6: 1000,
	7: 1500,
	8: 2100,
	9: 3000,
	10: 4000
}

export const handleExp = ( state = initialState, action ) => {

	switch(action.type) {
		case 'EARN_EXP':
			return state.exp + action.exp < levelThresholds[state.level]
				?
				{
					...state,
					exp: state.exp + action.exp
				}
				:
				{
					...state,
					level: state.level + 1,
					exp: state.exp + action.exp - levelThresholds[state.level],
					nextLevel: levelThresholds[state.level + 1]
				}
		default: 
			return state;

	}




}