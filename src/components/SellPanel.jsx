import React from 'react';
import { connect } from 'react-redux';
import { sellItem } from '../actions';

class SellPanel extends React.Component {
	handleClick = (el) => {
		this.props.sellItem(el)
	}

	render() {
		const { inventory, gamelocation, sellItem, children, gold } = this.props;
		return (

			<div className="panel" gamelocation={gamelocation}>
				
				{ 
					inventory.length > 0

					?

					inventory.map((el, i) => 

						<div key={i} className='item-container'>
							<p onClick={() => this.handleClick(el)}>{`${el.name} ${el.quantity} ${i}`}</p>

						</div>
					)	

					:

					<p>You have no items</p>

				}
				<p>{gold}</p>
				
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