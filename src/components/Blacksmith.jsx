import React from 'react';

/*Components*/
import GameBox from './GameBox.jsx';
import SellPanel from './SellPanel.jsx';
import BuyPanel from './BuyPanel.jsx';
import DialogBox from './DialogBox.jsx';

/*Data array*/
import { blacksmithItems } from '../data/blacksmithItems.js';

const Blacksmith = () => (

	<GameBox>
		<SellPanel />
		<div className="location-box">
			<div className="blacksmith">
			</div>
			<DialogBox gamelocation="blacksmith"/>	
		</div>
		<BuyPanel items={ blacksmithItems } gamelocation="blacksmith"/>		
	</GameBox>	

);

export default Blacksmith;