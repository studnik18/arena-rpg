import React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions';
import GameBox from './GameBox';
import { Link } from 'react-router-dom';

class MainMenu extends React.Component {

	constructor(props) {
		super(props);
		this.state = { name: ''}
	}

	handleChange = evt => {
		this.setState({ name: evt.target.value })
	}

	start = name => {
		if (!!name.length) {
			this.props.startGame(name)		
		}
	}

	render() {
		const { name, inProgress } = this.props;

		return (

			<GameBox>
				{ !inProgress ?
					<div className="main-box">
						<p className="main-title">WELCOME TO THE ARENA</p>
						<div className="launch-box">
							<input 
								type="text" 
								placeholder="Enter name" 
								maxLength="15" 
								name="player-name" 
								onChange={this.handleChange}
							/>
							<Link to="/arena-rpg/">
								<button onClick={() => this.start(this.state.name)}>Proceed</button>
							</Link>
						</div>
					</div>

					:

					<div className="game-info">
						<p>
							Greetings, {name}!<br/><br/>
							Arena is a turn-based game set in slavic realms. Defeat the dragon and be blessed
							by Perun! Follow the instructions below.<br/><br/>
						</p>
						<ul>
							<li>
								Hero Panel - here You are able to equip Your weapons, armor parts or mixtures.
								Don't forget to do it after the purchase! Another essential thing in this place 
								is distribution of attribute points. You will receive 20 each time You earn new level.
								<ul>
									<li>Strength - increases dealt damage by 1% per point.</li>
									<li>Defense - increases block chance by 0.5% per point.</li>
									<li>Agility - increases hit chance by 0.5% per point.</li>
									<li>Vitality - increases Your HP by 5 per point.</li>
								</ul>
								Moreover, by equipping items You may increase Your armor. Each point You have
								reduces damage taken by 1%. 
							</li>
							<li>
								Magic shop - place with plenty of enchanted trinkets and potions. Necklaces and
								rings, when equipped, beef up Your statistics. Mixtures, like health or grenade-like potions 
								have immediate effect and are usable during arena fight. The other are consumable only before
								entering the arena and their effect lasts 1 battle.
							</li>
							<li>
								Blacksmith - best offer of armors and weapons. Axes deal more damage than swords, but have lower
								accuracy. Armor parts provide You with armor points - but remember, the heavier they are, the lower
								is Your hit chance. Shields are specific items - they increase Your block chance instead.
							</li>
							<li>
								Inn - after good fight it is essential to get some rest. Drink some of good local stuff or take a nap
								- it will restore Your HP.
							</li>
							<li>
								Arena - Here is what all the action takes place! Choose Your opponent and slay it or be slain.
								Your actions include: ordinary attack, strong attack (more damage, less accuracy) or use of potion.
								For each fight You will receive XP and gold.
							</li>
						</ul>
						<p>The game is saved automatically so think twice before You rush into higher-level monsters!</p>						
					</div>
				}
			</GameBox>
		)
	}
}

const mapStateToProps = state => ({
	name: state.startGame.name,
	inProgress: state.startGame.inProgress
})

export default connect(mapStateToProps, {
	startGame
})(MainMenu);
