import React from 'react';
import { connect } from 'react-redux';
import { sellItem } from '../actions';
import PanelElement from './PanelElement';

class SellPanel extends React.Component {
	handleClick = (el) => {
		this.props.sellItem(el)
	}
	render() {
		const { inventory, gamelocation,gold } = this.props;
		return (
			<div>
				<div>
					<div className="flex-row gold-container">
						<p className="price">
							{gold}
						</p>
						<div className="coin-bg"></div>
					</div>
					{
						inventory.length > 0 
						? <p className="inventory-header">
							Your inventory
						</p> 
						: ''
					}
				</div>				
					{ 
						inventory.length > 0

						?
						<div className="panel sell-panel" gamelocation={gamelocation}>
						{	
							inventory.map((el, i) => 

								<PanelElement
									key={i}
									handleClick={this.handleClick}
									gold={gold}
									item={el}
									action="sell"
									gamelocation={gamelocation}
								/>						
							)
						}
						</div>
						:
						<p className="inventory-header">Your inventory is empty</p>
					}	
			</div>
		)
	}
};


const mapStateToProps = (state) => ({
	gold: state.handleGold.gold,
	inventory: state.handleInventory.inventory
})

export default connect(mapStateToProps, {
	sellItem
})(SellPanel);