import React from 'react';

/*Components*/
import GameBox from './GameBox.jsx';
import SellPanel from './SellPanel.jsx';
import BuyPanel from './BuyPanel.jsx';
import DialogBox from './DialogBox.jsx';

/*Data array*/
import { shopItems } from '../data/shopItems.js';

const MagicShop = ( buyItem, sellItem, inventory ) => (

	<GameBox>
		<SellPanel inventory={inventory} sellItem={sellItem} />
		<div className="location-box">
			<div className="shop">
			</div>
			<DialogBox location="shop"/>	
		</div>
		<BuyPanel items={shopItems} buyItem={buyItem} location="shop"/>		
	</GameBox>	

);

export default MagicShop;