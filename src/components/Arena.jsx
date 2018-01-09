import React from 'react';
import { connect } from 'react-redux';

// Copmponents
import GameBox from './GameBox.jsx';
import StatsPanel from './StatsPanel.jsx';
import Opponents from './Opponents.jsx';

// Data
import { opponentList } from '../data/opponentList.js';

class Arena extends React.Component {


	render() {

		return (


			<GameBox>
				<StatsPanel />
				<Opponents list={opponentList}/>
			</GameBox>	

		)

	}

}

export default connect(null, null)(Arena);