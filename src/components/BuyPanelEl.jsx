import React from 'react';

export const BuyPanelEl = ( { handleClick, item, gold } ) => (

	<div className='item-container'>


		<p className="item-title">{item.name}</p>


		<div className="item-data">
			<div
				className={`item-icon id_${item.id}`} 
			/>

			<div className="flex-row">	
				<p className="price">{item.buyValue}</p>
				<div className="coin-bg"/>
			</div>
			<button 
				onClick={ gold >= item.buyValue ? () => handleClick(item) : () => ''}
				className={ `buy-btn ${gold >= item.buyValue ? 'enabled' : 'disabled'}`}			
			>
				Buy
			</button>



		</div>

	</div>
)

export default BuyPanelEl