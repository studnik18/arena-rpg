import React from 'react';

const ItemDescription = ({ hoveredItem }) => (

	<div className="item-description">
		<span className="item-name">{hoveredItem.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
		
			{
				['necklaces', 'rings', 'potions', 'oils'].includes(hoveredItem.category) ? <span>{hoveredItem.description}</span> :

				['armors', 'boots', 'helmets', 'gloves'].includes(hoveredItem.category)  && hoveredItem.hitChancePenalty > 0 ?			

				[<span>{`Armor: ${hoveredItem.armor}`}&nbsp;&nbsp;</span>, <span>{` Hit chance penalty: -${hoveredItem.hitChancePenalty * 100}%`}&nbsp;</span>] :

				['armors', 'boots', 'helmets', 'gloves'].includes(hoveredItem.category)  && hoveredItem.hitChancePenalty === 0 ?

				<span>{`Armor: ${hoveredItem.armor}`}&nbsp;&nbsp;</span> :						

				hoveredItem.category === 'shields' && hoveredItem.hitChancePenalty > 0 ? 

				[<span>{`Block chance bonus: ${hoveredItem.blockChanceBonus * 100}`}%&nbsp;&nbsp;</span>, <span>{`Hit chance penalty: -${hoveredItem.hitChancePenalty * 100}%`}</span>] :

				hoveredItem.category === 'shields' && hoveredItem.hitChancePenalty === 0 ? 

				<span>{`Block chance bonus: ${hoveredItem.blockChanceBonus * 100}`}%&nbsp;&nbsp;</span> :								

				hoveredItem.category === 'weapons' ? 

				[<span>{`Damage range: ${hoveredItem.dmgRange[0]} - ${hoveredItem.dmgRange[1]}`}&nbsp;&nbsp;</span>, <span>{`Attack accuracy: ${hoveredItem.hitChance * 100}%`}</span>] : 

				hoveredItem.category === 'inn' && hoveredItem.restore > 1 ?

				<span>{`Restore ${hoveredItem.restore} HP.`}&nbsp;&nbsp;</span> :

				hoveredItem.category === 'inn' && hoveredItem.restore <= 1 ?

				<span>{hoveredItem.description}</span> :	''
			}
			
	</div>

)

export default ItemDescription;