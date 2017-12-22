import React from 'react';
import { connect } from 'react-redux';
import { equipItem } from '../actions';

class InventoryPanel extends React.Component {
	
	handleClick = (el) => {
		this.props.equipItem(el);
	}

	render() {
		const { inventory, equipItem } = this.props;
		return (
			<div className="panel">
				{

					inventory.map((el, i) =>

						<div key={i} className='item-container'>
							<p onClick={() => this.handleClick(el)}>{`${el.name} ${el.quantity} ${i}`}</p>

						</div>
					)

				}

			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	inventory: state.handleInventory.inventory,	
})

export default connect(mapStateToProps, {
	equipItem 
})(InventoryPanel)


