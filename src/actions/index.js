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

export const earnExp = (exp) => {

	type: 'EARN_EXP',
	exp

}

export const restoreHP = (hp) => {

	type: 'RESTORE_HP',
	hp

}

export const calculateAttributeBonus = () => {
	
	type: 'CALCULATE_ATTRIBUTE_BONUS'

}