import React from 'react';
import { connect } from 'react-redux';

import { restoreHP, dealDamage } from '../actions';

class HeroBattleScreen extends React.Component {

	getRandomInteger = (min, max) => (
		Math.floor(Math.random() * (max - min + 1)) + min
	)

	attack = (isStrong = false) => {
		const { opponent, dealDamage } = this.props;
		let { hitChance, damage } = this.props;

		if (isStrong) {
			hitChance *= 0.7
			damage = [damage[0] * 1.5, damage[1] * 1.5]
		}

		const roundedDamage = [Math.round(damage[0]), Math.round(damage[1])]
		const inflictedDamage = this.getRandomInteger(...roundedDamage)

		console.log(roundedDamage, inflictedDamage, hitChance)
		if (Math.random() < hitChance && Math.random() > opponent.dodgeChance) {
			dealDamage(inflictedDamage)
		}

	} 

	render() {
		const { equipped, maxHP, currentHP, blockChance, hitChance, damage, opponent } = this.props
		const battlePotions = equipped.filter(item =>
			item.category === 'potions' && (item.useLocation === 'battle' || item.useLocation === 'both')
		)

		return (
			<div>
				<p>HeroBattleScreen  {currentHP} </p>
				<p>{battlePotions.map(potion =>
						potion.name
					)}</p>
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
	opponent: state.handleOpponent.opponent

})

export default connect(mapStateToProps,{
	restoreHP, dealDamage
})(HeroBattleScreen);

