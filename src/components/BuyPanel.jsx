import React from 'react';

const BuyPanel = ({items, location, buyItem, children}) => (

	

	<div className="panel" location={location}>
		

		{ items.map((el, i) => 

			<div key={i} className='item-container' onClick={() => console.log(buyItem)}>
				<p>{el.name}</p>			
			</div>
		)}

	</div>

);

export default BuyPanel;