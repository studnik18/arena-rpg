import React from 'react';
import { connect } from 'react-redux';


class StatsPanel extends React.Component {

	render() {
		const { playerStats, attributePoints } = this.props;
		return (
			<div>
				{
					Object.keys(playerStats).map((key, i) =>
							<p key={i}>{`${key} : ${playerStats[key]}`}</p>
					)
				}
				<p>Attribute Points: {attributePoints}</p>
			</div>
		)
	}
}


const mapStateToProps = (state) => ({
	playerStats: state.handlePlayerStats.playerStats,
	attributePoints: state.handlePlayerStats.attributePoints
})

export default connect(mapStateToProps, null)(StatsPanel)
