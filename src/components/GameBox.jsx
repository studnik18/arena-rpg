import React from 'react';

import { connect } from 'react-redux';

import VictoryScreen from './VictoryScreen';

import { addAttributePoints, closeModal, gameOver } from '../actions';

class GameBox extends React.Component {
	
	handleModal = (result) => {
		this.props.closeModal(result)
	}

	handleAttributePoints = () => {
		this.props.addAttributePoints()
	}

	endGame = () => {
		this.props.gameOver()
	}

	render() {
		const { children, isVictoryScreenOpen, isDefeatScreenOpen, lastReward, level } = this.props
		return (
			
			<div className="game-box">
				{
					isDefeatScreenOpen ?
					<div className="defeat-screen">
						<p>Art:&nbsp; 
							<a href="https://snatti89.deviantart.com/art/238-365-A-Feast-For-Crows-597848649" 
							target="_blank"
							rel="noopener noreferrer"
							>
								snatti89
							</a>
						</p>
						<div className="battle-summary">
							<p>Your foe has kicked the shit out of You...</p>
							<button className="flex-row align-center" onClick={() => { this.handleModal('defeat'); this.endGame() }}>
								<div className="tombstone-icon"/>
								<p>Game over</p>
							</button>
						</div>
					</div>
					:
					isVictoryScreenOpen !== false ?
					<VictoryScreen 
						type={isVictoryScreenOpen} 
						lastReward={lastReward}
						level={level}
						handleAttributePoints={this.handleAttributePoints}
						handleModal={this.handleModal}
					/>
					:
					children
				}
			</div>

		)
	}
}

const mapStateToProps = (state) => ({
	isVictoryScreenOpen: state.handleExp.isVictoryScreenOpen,
	isDefeatScreenOpen: state.handleExp.isDefeatScreenOpen,
	lastReward: state.handleExp.lastReward,
	level: state.handleExp.level,
	opponent: state.handleOpponent.opponent
})

export default connect(mapStateToProps, {
	addAttributePoints, closeModal, gameOver
})(GameBox);