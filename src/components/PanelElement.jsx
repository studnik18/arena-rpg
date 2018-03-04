import React from 'react';

import { connect } from 'react-redux';

import { showDescription } from '../actions';

class PanelElement extends React.Component {

	showItemDescription = (item) => {
		this.props.showDescription(item)
	}

	render() {
		const { handleClick, item, gold, action, gamelocation } = this.props;
		return (
			<div 
				className='item-container'
				onMouseEnter={() => this.showItemDescription({...item, action: action})}
				onMouseLeave={() => this.showItemDescription('')}
			>
				<p className="item-title">{item.name} {action === "sell" && item.quantity > 1 ? ` (${item.quantity})`: ''}</p>
				<div className="item-data">
					<div
						className={`item-icon id_${item.id}`} 
					/>

					<div className="flex-row">	
						<p className="price">
							{
								action === 'buy' 
								? item.buyValue 
								: item.sellValue
							}
						</p>
						<div className="coin-bg"/>
					</div>					
					{ 	action === 'buy'
						? 
						<button 
							onClick={ gold >= item.buyValue ? () => {handleClick(item); this.showItemDescription('')} : () => ''}
							className={ `buy-btn ${gold >= item.buyValue ? 'enabled' : 'disabled'}`}			
						>
							Buy
						</button>
						:
						(gamelocation === "blacksmith" && ['weapons', 'armors', 'helmets', 'gloves', 'boots', 'shields'].includes(item.category) === true) || 
						(gamelocation === "shop" && ['potions', 'oils', 'necklaces', 'rings'].includes(item.category) === true)						
						?
						<button 
							onClick={ () => {handleClick(item); this.showItemDescription('')} }
							className="enabled sell-btn"			
						>
							Sell
						</button>
						:
						<button className="disabled sell-btn">
							Sell
						</button>
					}
				</div>
			</div>
		)
	}
};

export default connect(null, { 
showDescription 
})(PanelElement)

