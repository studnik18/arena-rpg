import React from 'react';

/*Components*/
import GameBox from './GameBox.jsx';
import SellPanel from './SellPanel.jsx';
import BuyPanel from './BuyPanel.jsx';
import DialogBox from './DialogBox.jsx';

/*Data array*/
import { shopItems } from '../data/shopItems.js';

const MagicShop = ( inventory ) => (

	<GameBox>
		<SellPanel inventory={inventory} />
		<div className="location-box">
			<div className="shop">
			</div>
			<DialogBox gamelocation="shop"/>	
		</div>
		<BuyPanel items={shopItems} gamelocation="shop"/>		
	</GameBox>	

);

export default MagicShop;