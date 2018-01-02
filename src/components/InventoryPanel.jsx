import React from 'react';
import { connect } from 'react-redux';
import { equipItem, unequipItem } from '../actions';


class InventoryPanel extends React.Component {
	
	handleClick = (el) => {
		const maxOneAllowed = ['weapons', 'helmets', 'armors'];
		if (maxOneAllowed.includes(el.category)) {
			const equippedOneAllowed = this.props.equipped.filter(
				item => item.category === el.category
			);
			if (equippedOneAllowed.length > 0) {
				this.props.unequipItem(equippedOneAllowed[0]);
			}		
		}
		this.props.equipItem(el);
	}

	render() {
		const { inventory, equipped, equipItem, unequipItem } = this.props;
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
	equipped: state.handleEquip.equipped
})

export default connect(mapStateToProps, {
	equipItem, unequipItem
})(InventoryPanel)


