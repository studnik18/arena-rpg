export const sellItem = (item)  => ({

	type: 'SELL_ITEM',
	item

}) 

export const buyItem = (item) => ({

	type: 'BUY_ITEM',
	item		
	
})

export const equipItem = (item) => ({

	type: 'EQUIP_ITEM',
	item	

})

export const unequipItem = (item) => ({

	type: 'UNEQUIP_ITEM',
	item	

})

export const incrementAttribute = (attribute) => ({

	type: 'INCREMENT_ATTRIBUTE',
	attribute

})

export const earnExp = (exp) => ({

	type: 'EARN_EXP',
	exp

})

export const earnGold = (gold) => ({

	type: 'EARN_GOLD',
	gold

})

export const restoreHP = (item) => ({

	type: 'HEAL',
	item

})

export const calculateAttributeBonus = () => ({
	
	type: 'CALCULATE_ATTRIBUTE_BONUS'

})


export const chooseOpponent = (opponent) => ({
	
	type: 'CHOOSE_OPPONENT',
	opponent

})

export const dealDamage = (damage) => ({

	type: 'DEAL_DAMAGE',
	damage

})

export const sufferDamage = (damage) => ({

	type: 'SUFFER_DAMAGE',
	damage

})

export const innBuy = (item) => ({
	
	type: 'INN_BUY',
	item

})

export const addEffect = (item) => ({

	type: 'ADD_EFFECT',
	item

})

export const logMessage = (message) => ({

	type: 'LOG_MESSAGE',
	message

})

export const addOpponentEffect = (effect) => ({

	type: 'ADD_OPPONENT_EFFECT',
	effect

})

