import React from 'react';
import { connect } from 'react-redux';

// Copmponents
import GameBox from './GameBox.jsx';
import HeroBattleScreen from './HeroBattleScreen.jsx';
import OpponentList from './OpponentList.jsx';
import Console from './Console.jsx';
import OpponentScreen from './OpponentScreen.jsx';
import HeroPortrait from './HeroPortrait.jsx';

// Data
import { opponentList } from '../data/opponentList.js';

// Actions

import { chooseOpponent } from '../actions';

class Arena extends React.Component {

	handleClick = ( opponent ) => {
		this.props.chooseOpponent(opponent);
	}

	render() {
		const { opponent, equipped } = this.props;

		return (


			<div className="full-width">
				
				
				{
					opponent === 'none' 

					?

					<GameBox>
						<HeroPortrait gamelocation="arena"/>
						<OpponentList handleClick={this.handleClick} list={opponentList}/>
					</GameBox>

					:

					<GameBox>
						<HeroBattleScreen />
						<div>
							<Console />
							<OpponentScreen opponent={opponent} />
						</div>
					</GameBox>
				}

			</div>

		)

	}

}
 
const mapStateToProps = (state) => ({

	opponent: state.handleOpponent.opponent,
	equipped: state.handleEquip.equipped


})

export default connect(mapStateToProps, {
	chooseOpponent
})(Arena);