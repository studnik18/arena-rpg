import React from 'react';
import { connect } from 'react-redux';

import HeroPortrait from './HeroPortrait';
import AttackButtons from './AttackButtons';
import PotionBar from './PotionBar';

import { dealDamage, sufferDamage, drainLife, logMessage, effectCooldown, endBattle } from '../actions';


class HeroBattleScreen extends React.Component {
	
	getRandomInteger = (min, max) => (
		Math.floor(Math.random() * (max - min + 1)) + min
	)	

	checkHP = (health, damage, result) => {
		if (health - damage <= 0) {
			this.props.endBattle(this.props.opponent.reward, result) 
			return
		}
	}

	opponentsTurn = (isStrong = false, opponent = this.props.opponent) => {

		const { currentHP, blockChance, armor, temporaryEffects, dealDamage, sufferDamage, drainLife, logMessage, effectCooldown, endBattle } = this.props;

		if (opponent.effects.length > 0) {
			opponent.effects.map(effect => {
				logMessage(['player', `${effect.name} deals ${effect.dmgPerTurn} damage to Your opponent.`])
				dealDamage(effect.dmgPerTurn)
				this.checkHP(opponent.currentHP, effect.dmgPerTurn, 'success')
				effectCooldown(effect)				
			})
		}
		
		let minDamage = opponent.damage[0];
		let maxDamage = opponent.damage[1];		

		let hitChance = opponent.effects.filter(effect => effect.name === 'Ice').length > 0 ? opponent.hitChance : opponent.hitChance * 0.85;

		if (isStrong) {
			hitChance *= 0.7
			minDamage *= 1.5
			maxDamage *= 1.5
		}

		minDamage = Math.round(minDamage)
		maxDamage = Math.round(maxDamage)
		const inflictedDamage = this.getRandomInteger(minDamage, maxDamage)

		let opponentHit = Math.random()
		let message = `Opponent performs ${isStrong ? 'a strong attack' : 'an attack'}`		

		if (opponentHit > hitChance) {
			message += ' and misses.'
			logMessage(['opponent', message])
		} 

		if (opponentHit < hitChance) {
			if (Math.random() < blockChance) {
				message += ', but Your hero blocks successfuly.'
				logMessage(['opponent', message])
			} else {
				message += ` and deals ${inflictedDamage} damage!`
				logMessage(['opponent', message])
				sufferDamage(inflictedDamage)

				this.checkHP(currentHP, inflictedDamage, 'defeat');

				if (opponent.lifeDrain > 0) {
					let drainedValue = Math.round(opponent.lifeDrain * inflictedDamage);
					logMessage(['opponent', `Opponent drains ${drainedValue} life from You.`])
					drainLife({
						character: 'opponent',
						value: drainedValue
					})
				}
			}
		}
	}

	render() {

		return (

			<div class="hero-battle-screen">
				<HeroPortrait gamelocation="battle"/>

				<AttackButtons opponentsTurn={this.opponentsTurn}/>

				<PotionBar opponentsTurn={this.opponentsTurn}/>
			</div>

		)
	}		
}

const mapStateToProps = (state) => ({

	opponent: state.handleOpponent.opponent,
	currentHP: state.handleHP.currentHP,
	blockChance: state.handlePlayerStats.blockChance,
	armor: state.handlePlayerStats.armor,	
	opponent: state.handleOpponent.opponent,
	temporaryEffects: state.handleTemporaryEffects.temporaryEffects

})

export default connect(mapStateToProps, {
	dealDamage, sufferDamage, drainLife, logMessage, effectCooldown, endBattle
})(HeroBattleScreen);

