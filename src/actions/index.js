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

export const restoreHP = (hp) => ({

	type: 'HEAL',
	hp

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

