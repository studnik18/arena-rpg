import React from 'react';
import { connect } from 'react-redux';

import { restoreHP, dealDamage, logMessage, addOpponentEffect, unequipItem } from '../actions';


class PotionBar extends React.Component {
	
	useItem = (potion) => {

		const { restoreHP, dealDamage, logMessage, addOpponentEffect, unequipItem } = this.props

		if (typeof potion.restore !== 'undefined') {
			
			logMessage(['player', `You have healed ${potion.restore} HP`])
			restoreHP(potion)
		}

		if (typeof potion.damage !== 'undefined') {

			logMessage(['player', `${potion.name} deals ${potion.damage} damage.`])
			dealDamage(potion.damage)
		}

		if (typeof potion.effect !== 'undefined') {
			
			let message = potion.effect === 'burn' ? 'You have set the opponent in flames!' : 'You have frozen your enemy!'		
			logMessage(['player', message])
			addOpponentEffect(potion.effect)
			unequipItem(potion)
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
	restoreHP, dealDamage, logMessage, addOpponentEffect, unequipItem
})(PotionBar);