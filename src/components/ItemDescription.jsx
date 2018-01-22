import React from 'react';

const ItemDescription = ({ hoveredItem }) => (

	<div className="item-description">
		<p>{hoveredItem.name}</p>
		
			{
				['necklaces', 'rings', 'potions', 'oils'].includes(hoveredItem.category) ? <p>{hoveredItem.description}</p> :

				['armors', 'boots', 'helmets', 'gloves'].includes(hoveredItem.category)  && hoveredItem.hitChancePenalty > 0 ?			

				[<p>{`Armor: ${hoveredItem.armor}`}</p>, <p>{` Hit chance penalty: -${hoveredItem.hitChancePenalty * 100}%`}</p>] :

				['armors', 'boots', 'helmets', 'gloves'].includes(hoveredItem.category)  && hoveredItem.hitChancePenalty === 0 ?

				<p>{`Armor: ${hoveredItem.armor}`}</p> :						

				hoveredItem.category === 'shields' && hoveredItem.hitChancePenalty > 0 ? 

				[<p>{`Block chance bonus: ${hoveredItem.blockChanceBonus * 100}`}</p>, <p>{`% Hit chance penalty: -${hoveredItem.hitChancePenalty * 100}%`}</p>] :

				hoveredItem.category === 'shields' && hoveredItem.hitChancePenalty === 0 ? 

				<p>{`Block chance bonus: ${hoveredItem.blockChanceBonus * 100}`}</p> :								

				hoveredItem.category === 'weapons' ? 

				[<p>{`Damage range: ${hoveredItem.dmgRange[0]} - ${hoveredItem.dmgRange[1]}`}</p>, <p>{`Attack accuracy: ${hoveredItem.hitChance * 100}%`}</p>] : 

				hoveredItem.category === 'inn' && hoveredItem.restore > 1 ?

				<p>{`Restore ${hoveredItem.restore} HP.`}</p> :

				hoveredItem.category === 'inn' && hoveredItem.restore <= 1 ?

				<p>{hoveredItem.description}</p> :	''
			}
			
	</div>

)

export default ItemDescription;