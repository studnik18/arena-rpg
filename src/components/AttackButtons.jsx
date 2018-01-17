import React from 'react';
import { connect } from 'react-redux';

import { dealDamage, logMessage, addOpponentEffect } from '../actions';

class AttackButtons extends React.Component {

	getRandomInteger = (min, max) => (
		Math.floor(Math.random() * (max - min + 1)) + min
	)

	attack = (isStrong = false) => {
		const { opponent, temporaryEffects, dealDamage, logMessage, addOpponentEffect } = this.props;
		let { hitChance, damage } = this.props;

		let minDamage = damage[0];
		let maxDamage = damage[1];
		
		if (temporaryEffects.includes({dmgIncrease: ['all', 0.5]})) {
			minDamage *= 1.5
			maxDamage *= 1.5
		}

		if (temporaryEffects.includes({dmgIncrease: ['undead', 0.25]}) && opponent.type === 'undead') {
			minDamage *= 1.25
			maxDamage *= 1.25
		}

		if (isStrong) {
			hitChance *= 0.7
			minDamage *= 1.5
			maxDamage *= 1.5
		}

		let opponentDodgeChance = opponent.dodgeChance

		if (opponent.effects.name === 'Ice') {
			hitChance *= 1.15
			opponentDodgeChance *= 0.7
		}

		if (typeof opponent.armor !== 'undefined') {
			minDamage *= (1 - opponent.armor / 100)
			maxDamage *= (1 - opponent.armor / 100)
		}

		minDamage = Math.round(minDamage)
		maxDamage = Math.round(maxDamage)
		const inflictedDamage = this.getRandomInteger(minDamage, maxDamage)

		let playerHit = Math.random()
		let message = `Player performs ${isStrong ? 'a strong attack' : 'an attack'}`

		if (playerHit > hitChance) {
			message += ' and misses.'
			logMessage(['player', message])
		} 

		if (playerHit < hitChance) {
			if (Math.random() < opponentDodgeChance) {
				message += ', but the opponent successfuly dodges.'
				logMessage(['player', message])
			} else {
				message += ` and deals ${inflictedDamage} damage!`
				logMessage(['player', message])
				dealDamage(inflictedDamage)

				if (!opponent.poisoned && temporaryEffects.includes('poison')) {
					logMessage(['player', 'Opponent has been poisoned.'])
					addOpponentEffect({
						name: 'Poison',
						dmgPerTurn: Math.round(0.15 * inflictedDamage)
					})
				}  
			} 
		}
	}

	render() {
		const { equipped, maxHP, currentHP, blockChance, hitChance, damage, opponent, temporaryEffects } = this.props

		return (
			<div>
				<button onClick={ () => this.attack() }>attack</button>
				<button onClick={ () => this.attack(true) }>strong attack</button>
			</div>
		)

	}
}

const mapStateToProps = (state) => ({
	
	equipped: state.handleEquip.equipped,
	maxHP: state.handleHP.maxXP,
	currentHP: state.handleHP.currentHP,
	blockChance: state.handlePlayerStats.blockChance,
	hitChance: state.handlePlayerStats.hitChance,
	damage: state.handlePlayerStats.damage,
	opponent: state.handleOpponent.opponent,
	temporaryEffects: state.handleTemporaryEffects.temporaryEffects

})

export default connect(mapStateToProps,{
	dealDamage, logMessage, addOpponentEffect
})(AttackButtons);