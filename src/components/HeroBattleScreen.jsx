import React from 'react';
import { connect } from 'react-redux';

import EffectList from './EffectList';
import HeroPortrait from './HeroPortrait';
import AttackButtons from './AttackButtons';

import { restoreHP, dealDamage, getRandomInteger } from '../actions';


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
			<div class="hero-battle-screen">
				<HeroPortrait />
				{battlePotions.map(potion =>
						<div>
							<p>potion.name</p>
							<button onClick={ () => this.useItem() }>Use item</button>
						</div>
				)}
{/*				<button onClick={ () => this.attack() }>attack</button>
				<button onClick={ () => this.attack(true) }>strong attack</button>*/}

				<AttackButtons />
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

