 export const magicalMixtures = [

// useLocation: battle only, exploration mode only, both

	{
		id: 1,
		category: 'potions',
		name: 'Small health potion',
		buyValue: 50,
		sellValue: 25,
		restore: 20,
		useLocation: 'both'

	}, 

	{
		id: 2,
		category: 'potions',
		name: 'Medium health potion',
		buyValue: 150,
		sellValue: 75,
		restore: 75,
		useLocation: 'both'
	}, 

	{
		id: 3,
		category: 'potions',
		name: 'Large health potion',
		buyValue: 500,
		sellValue: 250,
		restore: 200,
		useLocation: 'both'
	}, 	

	{
		id: 4,
		category: 'potions',
		name: "Alchemist's fire",
		buyValue: 300,
		sellValue: 150,
		damage: 200,
		effect: 'burn',
		useLocation: 'battle'
	}, 	

	{
		id: 5,
		category: 'potions',
		name: 'Freeze blast',
		buyValue: 300,
		sellValue: 150,
		damage: 100,
		effect: 'freeze',
		useLocation: 'battle'
	}, 

	{
		id: 6,
		category: 'potions',
		name: 'Potion of strength',
		buyValue: 500,
		sellValue: 250,
		effect: {
			statIncrease: 'strength'	
		},
		useLocation: 'exploration'
	}, 	

	{
		id: 7,
		category: 'potions',
		name: "Potion of defense",
		buyValue: 500,
		sellValue: 150,
		effect: {
			statIncrease: 'defense'	
		},
		useLocation: 'exploration'
	}, 	

	{
		id: 8,
		category: 'potions',
		name: 'Potion of agility',
		buyValue: 500,
		sellValue: 250,
		effect: {
			statIncrease: 'agilty'	
		},
		useLocation: 'exploration'
	},

	{
		id: 9,
		category: 'potions',
		name: 'Potion of vitality',
		buyValue: 500,
		sellValue: 250,
		effect: {
			statIncrease: 'vitality'	
		},
		useLocation: 'exploration'
	},

	{
		id: 10,
		category: 'oils',
		name: "Might of Perun",
		buyValue: 600,
		sellValue: 300,
		effect: {
			dmgIncrease: ['all', 0.5]	
		},
		useLocation: 'exploration'
	}, 	

	{
		id: 11,
		category: 'oils',
		name: 'Holy water',
		buyValue: 300,
		sellValue: 150,
		effect: {
			dmgIncrease: ['undead', 0.25]
		},
		useLocation: 'exploration'
	},

	{
		id: 12,
		category: 'oils',
		name: 'Poison',
		buyValue: 300,
		sellValue: 150,
		effect: 'poison',
		useLocation: 'exploration'
	}
]

