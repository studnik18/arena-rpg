import React from 'react';
import { connect } from 'react-redux';

import { restoreHP, dealDamage, logMessage, addOpponentEffect, removeItem, endBattle } from '../actions';


class PotionBar extends React.Component {
	
	constructor(props) {
		super(props)

		this.state = {
			hoveredItem: ''
		}
	};

	useItem = (potion) => {

		const { restoreHP, dealDamage, logMessage, addOpponentEffect, removeItem, opponentsTurn, opponent, endBattle } = this.props

		if (typeof potion.restore !== 'undefined') {		
			logMessage(['player', `You have healed ${potion.restore} HP`])
			restoreHP(potion)
		} else {
			removeItem(potion)
		}

		if (typeof potion.damage !== 'undefined') {

			logMessage(['player', `${potion.name} deals ${potion.damage} damage.`])
			dealDamage(potion.damage)

			if (opponent.currentHP - potion.damage <= 0) {
				endBattle(opponent.reward, 'success')
				return					
			}
		}

		if (typeof potion.effect !== 'undefined') {

			if (opponent.effects.filter(effect => effect.name === potion.effect.name).length === 0 && Math.random() < potion.effect.chance) {
				let message = potion.effect.name === 'Fire' 
					? 'You have set the opponent in flames! It will suffer 20 damage per turn.' 
					: 'You have frozen your enemy! Frozen enemies receive 5 damage each turn, have 30% less chance to dodge an attack and -15% to hit accuracy.'		
				logMessage(['player', message])
				addOpponentEffect(potion.effect)
			}		
		}

		opponentsTurn(opponent.currentHP / opponent.maxHP < 0.2 ? true : false, opponent)

	}

	render() {
		const { equipped, maxHP, currentHP, blockChance, opponent, opponentsTurn } = this.props

		const battlePotions = equipped.filter(item =>
			item.category === 'potions' && (item.useLocation === 'battle' || item.useLocation === 'both')
		)

		let hoveredPotion = this.state.hoveredItem
		return (
			[
			<div class="flex-row potion-bar">
				
				{	
					battlePotions.length === 0 

					?
						[
							<div className="bag-img" />,
							<p>Your potion bag is empty.</p>
						]


					:
				
					battlePotions.map(potion =>
					<div 
						className="flex-column potion-container"
						onMouseEnter={() => this.setState({hoveredItem: potion})}
						onMouseLeave={() => this.setState({hoveredItem: ''})}
					>
						<div className={`potion id_${potion.id}`} />	

						<button className="use-btn" onClick={ () => this.useItem(potion) }>Use ({potion.quantity})</button>
					</div>
					)
					
				}
				
			</div>,
			<p>{hoveredPotion.length === 0 ? '' : hoveredPotion.name}</p>,
			<p>
				{
					hoveredPotion.length === 0

					?

					''

					: 

					typeof hoveredPotion.restore !== 'undefined'

					?

					`Restore ${hoveredPotion.restore} HP.`

					:

					`Deal ${hoveredPotion.damage} damage. ${hoveredPotion.effect.chance * 100}% chance to trigger effect: 
					'${hoveredPotion.effect.name}' for ${hoveredPotion.effect.duration} turns.`
				}
			</p>
			]
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
	restoreHP, dealDamage, logMessage, addOpponentEffect, removeItem, endBattle
})(PotionBar);