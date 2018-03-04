import React from 'react';

import BuyPanel from './BuyPanel';
import GameBox from './GameBox';
import DialogBox from './DialogBox';
import HeroPortrait from './HeroPortrait';

import { innItems } from '../data/innItems.js';

const Inn = () => (

	<GameBox>
		<HeroPortrait gamelocation="inn"/>
		<div className="inn-box">
			<div className="inn">
				<p>Art: 
					<a 
						href="https://dashinvaine.deviantart.com/art/Tavern-Wench048-418114669" 
						target="_blank" 
						rel="noopener noreferrer"
					>
						dashinvaine
					</a>
				</p>
			</div>
			<DialogBox gamelocation="inn"/>	
		</div>
		<BuyPanel items={ innItems } gamelocation="inn"/>		
	</GameBox>	

);

export default Inn;