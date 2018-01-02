import React from 'react';
import { connect } from 'react-redux';
import { incrementAttribute } from '../actions';


class StatsPanel extends React.Component {

	handleClick = (attr) => {
		this.props.incrementAttribute(attr);
	}

		
	render() {
		const { attributes, armor, damage, attributePoints, incrementAttribute } = this.props;

		return (
			<div>
				{
					Object.keys(attributes).map((key, i) =>
							<p key={i} onClick={ attributePoints > 0 ? () => this.handleClick(key) : () => '' }>{`${key} : ${attributes[key]}`}</p>
					)
				}
				<p>Attribute Points: {attributePoints}</p>
				<p>Armor: {armor}</p>
				<p>Damage: {`${damage[0]} - ${damage[1]}`}</p>
			</div>
		)
	}
}


const mapStateToProps = (state) => ({
	attributes: state.handlePlayerStats.attributes,
	attributePoints: state.handlePlayerStats.attributePoints,
	damage: state.handlePlayerStats.damage,
	armor: state.handlePlayerStats.armor,
	equipped: state.handleEquip.equipped
})

export default connect(mapStateToProps, {
	incrementAttribute
})(StatsPanel)
