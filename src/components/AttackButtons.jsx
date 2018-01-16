import React from 'react';
import { connect } from 'react-redux';

import { dealDamage, logMessage } from '../actions';

class AttackButtons extends React.Component {

	getRandomInteger = (min, max) => (
		Math.floor(Math.random() * (max - min + 1)) + min
	)

	attack = (isStrong = false) => {
		const { opponent, temporaryEffects, dealDamage, logMessage } = this.props;
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

		minDamage = Math.round(minDamage)
		maxDamage = Math.round(maxDamage)
		const inflictedDamage = this.getRandomInteger(minDamage, maxDamage)

		console.log(inflictedDamage, hitChance)

		let playerHit = Math.random()
		let message = `Player performs ${isStrong ? 'a strong attack' : 'an attack'}`
		console.log(message);

		if (playerHit > hitChance) {
			message += ' and misses.'
			logMessage(message)
		} 

		if (playerHit < hitChance) {
			if (Math.random() < opponent.dodgeChance) {
				message += ', but the opponent successfuly dodges.'
				logMessage(message)
			} else {
				message += ` and deals ${inflictedDamage} damage!`
				logMessage(message)
				dealDamage(inflictedDamage)  
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
	dealDamage, logMessage
})(AttackButtons);