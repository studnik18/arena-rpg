import React from 'react';
import { connect } from 'react-redux';

import { dealDamage, logMessage, addOpponentEffect, drainLife } from '../actions';

class AttackButtons extends React.Component {

	getRandomInteger = (min, max) => (
		Math.floor(Math.random() * (max - min + 1)) + min
	)

	attack = (isStrong = false) => {
		const { opponent, temporaryEffects, dealDamage, lifeDrain, logMessage, addOpponentEffect, drainLife, opponentsTurn } = this.props;
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

		if (opponent.effects.filter(effect => effect.name === 'Ice').length > 0) {
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

				if (lifeDrain > 0) {
					let drainedValue = Math.round(lifeDrain * inflictedDamage);
					logMessage(['player', `You drain ${drainedValue} life from Your opponent.`])
					drainLife({
						character: 'player',
						value: drainedValue
					})
				}

				if (opponent.effects.filter(effect => effect.name === 'Poison').length === 0 && temporaryEffects.includes('poison')) {
					logMessage(['player', "Opponent has been poisoned. Poisoned enemies receive 15% of Hero's base damage each turn."])
					addOpponentEffect({
						name: 'Poison',
						dmgPerTurn: Math.round(0.15 * inflictedDamage),
						duration: 20,
					})
				}  
			} 
		}

		opponentsTurn(opponent.currentHP / opponent.maxHP < 0.2 ? true : false, opponent)
	}

	render() {

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
	lifeDrain: state.handlePlayerStats.lifeDrain,	
	opponent: state.handleOpponent.opponent,
	temporaryEffects: state.handleTemporaryEffects.temporaryEffects,

})

export default connect(mapStateToProps,{
	dealDamage, logMessage, addOpponentEffect, drainLife
})(AttackButtons);