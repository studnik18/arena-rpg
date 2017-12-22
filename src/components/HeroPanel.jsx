import React from 'react';


/*Components*/
import GameBox from './GameBox.jsx';
import InventoryPanel from './InventoryPanel.jsx';
import EquipPanel from './EquipPanel.jsx';
import StatsPanel from './StatsPanel.jsx';


const HeroPanel = () => (


			<GameBox>
				<InventoryPanel />

				<EquipPanel />

				<StatsPanel />	
			</GameBox>	

)


export default HeroPanel


