import React from 'react';

/*Components*/
import GameBox from './GameBox.jsx';
import SellPanel from './SellPanel.jsx';
import BuyPanel from './BuyPanel.jsx';
import DialogBox from './DialogBox.jsx';

/*Data array*/
import { weapons } from '../data/weapons.js';
import { armory } from '../data/armory.js';

const Blacksmith = () => (

	<GameBox>
		<SellPanel />
		<div className="location-box">
			<div className="blacksmith">
			</div>
			<DialogBox gamelocation="blacksmith"/>	
		</div>
		<BuyPanel items={ [...weapons, ...armory] } gamelocation="blacksmith"/>		
	</GameBox>	

);

export default Blacksmith;