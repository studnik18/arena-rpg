import React from 'react';
import { connect } from 'react-redux';
import { incrementAttribute, calculateAttributeBonus } from '../actions';
import EffectList from './EffectList'


class StatsPanel extends React.Component {

	handleClick = (attr) => {
		this.props.incrementAttribute(attr);
		this.props.calculateAttributeBonus();
	}
		
	render() {
		const { attributes, armor, blockChance, damage, hitChance, lifeDrain, attributePoints, incrementAttribute, 
				calculateAttributeBonus, exp, level, nextLevel, maxHP, currentHP, temporaryEffects, name } = this.props;			

		return (
			<div className="flex-row">
				<div className="hero-attributes">

					{
						Object.keys(attributes).map((key, i) =>
							<div key={i} className="attribute">
								<div className={`panel-${key} attr-pic`} />
								<p>{`${key}:`}<br/>{`${attributes[key]}`}</p>
								<button className={`${attributePoints > 0 ? 'enabled' : 'disabled'} increment-button`} onClick={ attributePoints > 0 ? () => this.handleClick(key) : () => '' }>+</button>
							</div>
						)
					}
					
						<div className="attr-pts">
							<p>Attribute Points: {attributePoints}</p>
						</div>
						
						<div className="flex-row">
							<div className="panel-damage attr-pic" />
							<p>Damage:<br/> {`${Math.round(damage[0])} - ${Math.round(damage[1])}`}</p>
						</div>
						<div className="flex-row">
							<div className="panel-hit-chance attr-pic" />
							<p>Hit chance:<br/> {Math.round(hitChance * 100)}%</p>
						</div>

						<div className="flex-row">
							<div className="panel-armor attr-pic" />
							<p>Armor:<br/> {armor}</p>
						</div>
						<div className="flex-row">
							<div className="panel-block-chance attr-pic" />
							<p>Block chance:<br/> {Math.round(blockChance * 100)}%</p>
						</div>
						<div className="flex-row">
							<div className="panel-life-drain attr-pic" />
							<p>Life drain:<br/> {Math.round(lifeDrain * 100)}%</p>
						</div>
				</div>
				<div className="hero-right-panel">
					<p className="player-name">{name}</p>
					<p>Level: {level}</p>
					<div className="panel-bar exp-bar">
						<p>EXP: {`${exp} / ${nextLevel}`}</p>
						<div style={{width: `${Math.floor(exp / nextLevel * 100)}%`}} className="exp" />
					</div>	

					<div className="hero-pic">

					</div>
					<div className="panel-bar health-bar">
						<p>HP: {`${currentHP} / ${maxHP}`}</p>
						<div style={{width: `${Math.floor(100 - (currentHP / maxHP * 100))}%`}} className="damage" />
					</div>
					
					<EffectList />
				</div>
			</div>
		)
	}
}


const mapStateToProps = (state) => ({
	name: state.startGame.name,
	attributes: state.handlePlayerStats.attributes,
	attributePoints: state.handlePlayerStats.attributePoints,
	damage: state.handlePlayerStats.damage,
	armor: state.handlePlayerStats.armor,
	hitChance: state.handlePlayerStats.hitChance,
	blockChance: state.handlePlayerStats.blockChance,
	lifeDrain: state.handlePlayerStats.lifeDrain,
	equipped: state.handleEquip.equipped,
	exp: state.handleExp.exp,
	level: state.handleExp.level,
	nextLevel: state.handleExp.nextLevel,
	maxHP: state.handleHP.maxHP,
	currentHP: state.handleHP.currentHP,
	temporaryEffects: state.handleTemporaryEffects.temporaryEffects
})

export default connect(mapStateToProps, {
	incrementAttribute, calculateAttributeBonus
})(StatsPanel)
