import React from 'react';

import { connect } from 'react-redux';

import VictoryScreen from './VictoryScreen';

class GameBox extends React.Component {
	
	render() {

		const { children, isVictoryScreenOpen, isDefeatScreenOpen } = this.props

		return (
			
			<div className="game-box">
				{

					isDefeatScreenOpen ?

					<p>You lost</p>

					:

					isVictoryScreenOpen !== false ?

					<VictoryScreen type={isVictoryScreenOpen} />

					:

					children

				}
			</div>

		)
	}
}

const mapStateToProps = (state) => ({

	isVictoryScreenOpen: state.handleExp.isVictoryScreenOpen,
	isDefeatScreenOpen: state.handleExp.isDefeatScreenOpen	

})

export default connect(mapStateToProps, 
null
)(GameBox);