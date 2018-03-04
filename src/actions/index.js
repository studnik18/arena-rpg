import * as actionTypes from '../constants/ActionTypes';

export const sellItem = item  => ({
	type: actionTypes.SELL_ITEM,
	item
}) 

export const buyItem = item => ({
	type: actionTypes.BUY_ITEM,
	item			
})

export const equipItem = item => ({
	type: actionTypes.EQUIP_ITEM,
	item	
})

export const unequipItem = item => ({
	type: actionTypes.UNEQUIP_ITEM,
	item	
})

export const incrementAttribute = attribute => ({
	type: actionTypes.INCREMENT_ATTRIBUTE,
	attribute
})

export const restoreHP = item => ({
	type: actionTypes.HEAL,
	item
})

export const calculateAttributeBonus = () => ({	
	type: actionTypes.CALCULATE_ATTRIBUTE_BONUS
})


export const chooseOpponent = opponent => ({	
	type: actionTypes.CHOOSE_OPPONENT,
	opponent
})

export const dealDamage = damage => ({
	type: actionTypes.DEAL_DAMAGE,
	damage
})

export const sufferDamage = damage => ({
	type: actionTypes.SUFFER_DAMAGE,
	damage
})

export const innBuy = item => ({	
	type: actionTypes.INN_BUY,
	item
})

export const addEffect = item => ({
	type: actionTypes.ADD_EFFECT,
	item
})

export const logMessage = message => ({
	type: actionTypes.LOG_MESSAGE,
	message
})

export const addOpponentEffect = effect => ({
	type: actionTypes.ADD_OPPONENT_EFFECT,
	effect
})

export const removeItem = item => ({
	type: actionTypes.REMOVE_ITEM,
	item	
})

export const drainLife = payload => ({
	type: actionTypes.DRAIN_LIFE,
	payload
})

export const effectCooldown = effect => ({
	type: actionTypes.EFFECT_COOLDOWN,
	effect
})

export const endBattle = (reward, result) => ({
	type: actionTypes.END_BATTLE,
	reward,
	result
})

export const showDescription = item => ({
	type: actionTypes.SHOW_DESCRIPTION,
	item
})

export const addAttributePoints = () => ({
	type: actionTypes.NEW_LEVEL_POINTS
})

export const closeModal = result => ({
	type: actionTypes.CLOSE_MODAL,
	result
})

export const startGame = name => ({
	type: actionTypes.START_GAME,
	name
})

export const gameOver = () => ({
	type: actionTypes.END_GAME
})
