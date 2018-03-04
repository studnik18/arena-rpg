import * as actionTypes from '../constants/ActionTypes';

const initialState = { opponent: 'none' }

export const handleOpponent = ( state = initialState, action ) => {
	switch(action.type) {
		case actionTypes.CHOOSE_OPPONENT:
			return {
				...state,
				opponent: {
					...action.opponent, 
					effects: []
				}
			}
		case actionTypes.DEAL_DAMAGE:
			return {
				...state,
				opponent: { 
					...state.opponent, 
					currentHP: state.opponent.currentHP - action.damage
				}
			}
		case actionTypes.ADD_OPPONENT_EFFECT:
			return {
				...state,
				opponent: { 
					...state.opponent, 
					effects: [
						...state.opponent.effects,
						action.effect
					]
				}				
			}
		case actionTypes.EFFECT_COOLDOWN:
			if (typeof state.opponent.effects !== 'undefined') {
				const effectIndex = state.opponent.effects.map(
					(effect) => effect.name 
				).indexOf(action.effect.name);
				return action.effect.duration > 1 
					?
					Object.assign({}, state, {
						opponent: Object.assign({ ...state.opponent }, {
							effects: Object.assign([...state.opponent.effects], {
								[effectIndex] : {
									...state.opponent.effects[effectIndex],
									duration: action.effect.duration - 1
								}
							})
										
						})
					})	
					:
					{ 
						...state,  
						opponent: {
							...state.opponent,
							effects: 
								[	...state.opponent.effects.slice(0, effectIndex), 
									...state.opponent.effects.slice(effectIndex + 1)
								] 
						}
					}
			}
			return state;			
		case actionTypes.DRAIN_LIFE:
			return action.payload.character === 'opponent' 
				? 
				{
					...state,
					opponent: {
						...state.opponent,
						currentHP: state.opponent.currentHP + action.payload.value <= state.opponent.maxHP ? state.opponent.currentHP + action.payload.value : state.opponent.maxHP
					}
				}
				:
				state
		case actionTypes.END_BATTLE:
			return {
				...state,
				opponent: 'none'
			}				
		default:
			return state
	}
}