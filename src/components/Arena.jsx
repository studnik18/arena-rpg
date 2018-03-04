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
		const { opponent, equipped, logs } = this.props;
	
		return (
			<GameBox>					
				{
					opponent === 'none' 
					?
					[   
						<HeroPortrait gamelocation="arena"/>,
						<OpponentList handleClick={this.handleClick} list={opponentList}/>
					]
					:					
					[	<HeroBattleScreen />,
						<div className="vertical-layout">
							<Console logs={logs} />
							<OpponentScreen opponent={opponent} />
						</div> 
					]
				}
			</GameBox>	
		)
	}
}
 
const mapStateToProps = (state) => ({
	opponent: state.handleOpponent.opponent,
	equipped: state.handleEquip.equipped,
	logs: state.logMessage.logs
})

export default connect(mapStateToProps, {
	chooseOpponent
})(Arena);