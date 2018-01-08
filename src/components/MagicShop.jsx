import React from 'react';

/*Components*/
import GameBox from './GameBox.jsx';
import SellPanel from './SellPanel.jsx';
import BuyPanel from './BuyPanel.jsx';
import DialogBox from './DialogBox.jsx';

/*Data array*/
import { magicalMixtures } from '../data/magicalMixtures.js';
import { jewellery } from '../data/jewellery.js'

const MagicShop = () => (

	<GameBox>
		<SellPanel gamelocation="shop"/>
		<div className="location-box">
			<div className="shop">
			</div>
			<DialogBox gamelocation="shop"/>	
		</div>
		<BuyPanel items={ [...magicalMixtures, ...jewellery] } gamelocation="shop"/>		
	</GameBox>	

);

export default MagicShop;