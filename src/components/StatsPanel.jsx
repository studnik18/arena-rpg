import React from 'react';
import { connect } from 'react-redux';
import { incrementAttribute, calculateAttributeBonus } from '../actions';


class StatsPanel extends React.Component {

	handleClick = (attr) => {
		this.props.incrementAttribute(attr);
		this.props.calculateAttributeBonus();
	}

		
	render() {
		const { attributes, armor, blockChance, damage, hitChance, attributePoints, incrementAttribute, 
				calculateAttributeBonus, exp, level, nextLevel, maxHP, currentHP } = this.props;

		return (
			<div>
				<div className="expBar" />	

				<div className="hero-pic">

				</div>
				<div className="healthBar">
				</div>
				{
					Object.keys(attributes).map((key, i) =>
							<div className="attribute">
								<div className={`panel-${key} attr-pic`} />
								<p key={i} >{`${key} : ${attributes[key]}`}</p>
								<button onClick={ attributePoints > 0 ? () => this.handleClick(key) : () => '' }>+</button>
							</div>
					)
				}
				
					<div className="flex-row">
						<div className="panel-attr-pts attr-pic" />
						<p>Attribute Points: {attributePoints}</p>
					</div>
					
					<div className="flex-row">
						<div className="panel-damage attr-pic" />
						<p>Damage: {`${damage[0]} - ${damage[1]}`}</p>
					</div>
					<div className="flex-row">
						<div className="panel-hit-chance attr-pic" />
						<p>Hit chance: {hitChance * 100}%</p>
					</div>

					<div className="flex-row">
						<div className="panel-armor attr-pic" />
						<p>Armor: {armor}</p>
					</div>
					<div className="flex-row">
						<div className="panel-block-chance attr-pic" />
						<p>Block chance: {blockChance * 100}%</p>
					</div>
			</div>
		)
	}
}


const mapStateToProps = (state) => ({
	attributes: state.handlePlayerStats.attributes,
	attributePoints: state.handlePlayerStats.attributePoints,
	damage: state.handlePlayerStats.damage,
	armor: state.handlePlayerStats.armor,
	hitChance: state.handlePlayerStats.hitChance,
	blockChance: state.handlePlayerStats.blockChance,
	equipped: state.handleEquip.equipped,
	exp: state.handleExp.exp,
	level: state.handleExp.level,
	nextLevel: state.handleExp.nextLevel,
	maxXP: state.handleHP.maxHP,
	currentHP: state.handleHP.currentHP
})

export default connect(mapStateToProps, {
	incrementAttribute, calculateAttributeBonus
})(StatsPanel)
