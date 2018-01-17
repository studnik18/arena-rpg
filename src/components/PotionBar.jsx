import React from 'react';
import { connect } from 'react-redux';

import { restoreHP, dealDamage, logMessage, addOpponentEffect, removeItem } from '../actions';


class PotionBar extends React.Component {
	
	useItem = (potion) => {

		const { restoreHP, dealDamage, logMessage, addOpponentEffect, removeItem } = this.props

		if (typeof potion.restore !== 'undefined') {
			
			logMessage(['player', `You have healed ${potion.restore} HP`])
			restoreHP(potion)
		}

		if (typeof potion.damage !== 'undefined') {

			logMessage(['player', `${potion.name} deals ${potion.damage} damage.`])
			dealDamage(potion.damage)
		}

		if (typeof potion.effect !== 'undefined') {
			console.log(potion.effect.chance, Math.random() < potion.effect.chance)
			if (Math.random() < potion.effect.chance) {
				let message = potion.effect.name === 'Fire' 
					? 'You have set the opponent in flames! It will suffer 20 damage per turn.' 
					: 'You have frozen your enemy! Frozen enemies receive 5 damage each turn, have 30% less chance to dodge an attack and Hero has +15% to hit chance.'		
				logMessage(['player', message])
				addOpponentEffect(potion.effect)
			}
			removeItem(potion)
		}

	}

	render() {
		const { equipped, maxHP, currentHP, blockChance, opponent } = this.props

		const battlePotions = equipped.filter(item =>
			item.category === 'potions' && (item.useLocation === 'battle' || item.useLocation === 'both')
		)

		return (
			<div class="potion-bar">
				
				{battlePotions.map(potion =>
					<div>
						<p>potion.name</p>
						<button onClick={ () => this.useItem(potion) }>Use item</button>
					</div>
				)}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	
	equipped: state.handleEquip.equipped,
	maxHP: state.handleHP.maxXP,
	currentHP: state.handleHP.currentHP,
	blockChance: state.handlePlayerStats.blockChance,
	damage: state.handlePlayerStats.damage,
	opponent: state.handleOpponent.opponent

})

export default connect(mapStateToProps,{
	restoreHP, dealDamage, logMessage, addOpponentEffect, removeItem
})(PotionBar);