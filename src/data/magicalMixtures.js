 export const magicalMixtures = [

// useLocation: battle only, exploration mode only, both

	{
		id: 1,
		category: 'potions',
		name: 'Small health potion',
		buyValue: 25,
		sellValue: 12,
		restore: 50,
		useLocation: 'both',
		description: 'Restores 50 HP.'

	}, 

	{
		id: 2,
		category: 'potions',
		name: 'Medium health potion',
		buyValue: 60,
		sellValue: 30,
		restore: 120,
		useLocation: 'both',
		description: 'Restores 120 HP.'
	}, 

	{
		id: 3,
		category: 'potions',
		name: 'Large health potion',
		buyValue: 120,
		sellValue: 60,
		restore: 250,
		useLocation: 'both',
		description: 'Restores 250 HP.'		
	}, 	

	{
		id: 4,
		category: 'potions',
		name: "Alchemist's fire",
		buyValue: 150,
		sellValue: 75,
		damage: 150,
		effect: {
			name: 'Fire',
			chance: 0.5,
			dmgPerTurn: 20,
			duration: 3
		},
		useLocation: 'battle',
		description: 'Deals 200 damage to Your enemy and has 50% to set it in flames for 3 turns. Burning enemies suffer 20 damage each turn.'
	}, 	

	{
		id: 5,
		category: 'potions',
		name: 'Freeze blast',
		buyValue: 150,
		sellValue: 75,
		damage: 50,
		effect: {
			name: 'Ice',
			chance: 1,
			dmgPerTurn: 5,
			duration: 4
		},
		useLocation: 'battle',
		description: 'Deals 100 damage to Your enemy and freezes it for 4 turns. Frozen opponents have -15% hit chance, -30% dodge chance and suffer 5 damage each turn.'	
	}, 

	{
		id: 6,
		category: 'potions',
		name: 'Potion of strength',
		buyValue: 200,
		sellValue: 100,
		effect: {
			statIncrease: 'strength'	
		},
		useLocation: 'exploration',
		description: 'Increases strength by 10 during next battle.'	
	}, 	

	{
		id: 7,
		category: 'potions',
		name: "Potion of defense",
		buyValue: 200,
		sellValue: 100,
		effect: {
			statIncrease: 'defense'	
		},
		useLocation: 'exploration',
		description: 'Increases defense by 10 during next battle.'			
	}, 	

	{
		id: 8,
		category: 'potions',
		name: 'Potion of agility',
		buyValue: 200,
		sellValue: 100,
		effect: {
			statIncrease: 'agility'	
		},
		useLocation: 'exploration',
		description: 'Increases agility by 10 during next battle.'		
	},

	{
		id: 9,
		category: 'potions',
		name: 'Potion of vitality',
		buyValue: 200,
		sellValue: 100,
		effect: {
			statIncrease: 'vitality'	
		},
		useLocation: 'exploration',
		description: 'Increases vitality by 10 during next battle.'		
	},

	{
		id: 10,
		category: 'oils',
		name: "Might of Perun",
		buyValue: 300,
		sellValue: 150,
		effect: {
			dmgIncrease: ['all', 0.5]	
		},
		useLocation: 'exploration',
		description: 'Used before the battle on Your weapon increases damage against all enemies by 50%.'
	}, 	

	{
		id: 11,
		category: 'oils',
		name: 'Holy water',
		buyValue: 100,
		sellValue: 75,
		effect: {
			dmgIncrease: ['undead', 0.25]
		},
		useLocation: 'exploration',
		description: 'Used before the battle on Your weapon increases damage against undead enemies by 25%.'
	},

	{
		id: 12,
		category: 'oils',
		name: 'Poison',
		buyValue: 40,
		sellValue: 20,
		effect: 'poison',
		useLocation: 'exploration',
		description: 'Used before the battle on Your weapon can poison living enemies. Poison deals 15% of base weapon damage each turn'
	}
]

